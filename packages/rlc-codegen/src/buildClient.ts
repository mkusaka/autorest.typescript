// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure,
  WriterFunction
} from "ts-morph";
import * as path from "path";
import { NameType, normalizeName } from "./helpers/nameUtils.js";
import { isConstantSchema } from "./helpers/schemaHelpers.js";
import { buildMethodShortcutImplementation } from "./buildMethodShortcuts.js";
import { RLCModel, Schema, File } from "./interfaces.js";

export function buildClient(model: RLCModel): File | undefined {
  const name = normalizeName(model.libraryName, NameType.File);
  const { srcPath } = model;
  const project = new Project();
  const filePath = path.join(srcPath, `${name}.ts`);
  const clientFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  // Get all paths
  const clientName = model.libraryName;
  const urlParameters = model?.urlInfo?.urlParameters;

  if (!model.options) {
    return undefined;
  }
  const { multiClient, batch } = model.options;
  const { addCredentials, credentialScopes, credentialKeyHeaderName } =
    model.options;
  const credentialTypes =
    credentialScopes && credentialScopes.length > 0 ? ["TokenCredential"] : [];

  if (credentialKeyHeaderName) {
    credentialTypes.push("KeyCredential");
  }

  const commonClientParams = [
    ...(urlParameters ?? []),
    ...(addCredentials === false ||
    !isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
      ? []
      : [{ name: "credentials", type: credentialTypes.join(" | ") }])
  ];
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;

  const functionStatement = {
    isExported: true,
    name: `createClient`,
    parameters: [
      ...commonClientParams,
      { name: "options", type: "ClientOptions = {}" }
    ],
    docs: [
      {
        description:
          `Initialize a new instance of the class ${clientInterfaceName} class. \n` +
          commonClientParams
            .map((param) => {
              return `@param ${param.name} type: ${param.type} ${param.description ?? ""}`;
            })
            .join("\n")
      }
    ],
    returnType: clientInterfaceName,
    isDefaultExport: false,
    statements: getClientFactoryBody(model, clientInterfaceName)
  };

  if (!multiClient || !batch || batch.length === 1) {
    functionStatement.isDefaultExport = true;
  }
  clientFile.addFunction(functionStatement);

  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (
    addCredentials &&
    isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
  ) {
    clientFile.addImportDeclarations([
      {
        namedImports: credentialTypes,
        moduleSpecifier: "@azure/core-auth"
      }
    ]);
  }
  clientFile.addImportDeclarations([
    {
      namedImports: [`${clientInterfaceName}`],
      moduleSpecifier: "./clientDefinitions"
    }
  ]);
  return { path: filePath, content: clientFile.getFullText() };
}

function isSecurityInfoDefined(
  credentialScopes?: string[],
  credentialKeyHeaderName?: string
) {
  return (
    (credentialScopes && credentialScopes.length > 0) || credentialKeyHeaderName
  );
}

function getClientFactoryBody(
  model: RLCModel,
  clientTypeName: string
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
  if (!model.options || !model.options.packageDetails || !model.urlInfo) {
    return "";
  }
  const { includeShortcuts, packageDetails } = model.options;
  let clientPackageName = packageDetails.nameWithoutScope ?? "";
  const packageVersion = packageDetails.version;
  const { endpoint, urlParameters } = model.urlInfo;
  let baseUrl: string;
  if (urlParameters && endpoint) {
    let parsedEndpoint = endpoint;
    urlParameters.forEach((urlParameter) => {
      parsedEndpoint = parsedEndpoint.replace(
        `{${urlParameter.name}}`,
        `\${${urlParameter.name}}`
      );
    });

    baseUrl = `options.baseUrl ?? \`${parsedEndpoint}\``;
  } else {
    baseUrl = `options.baseUrl ?? "${endpoint}"`;
  }

  const apiVersion = getApiVersion(model);
  let apiVersionStatement: string = "";
  if (apiVersion) {
    apiVersionStatement = `options.apiVersion = options.apiVersion ?? "${apiVersion}"`;
  }

  if (!clientPackageName.endsWith("-rest")) {
    clientPackageName = clientPackageName + "-rest";
  }
  const userAgentInfoStatement =
    "const userAgentInfo = `azsdk-js-" +
    clientPackageName +
    "/" +
    packageVersion +
    "`;";
  const userAgentPrefix =
    "options.userAgentOptions && options.userAgentOptions.userAgentPrefix ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`: `${userAgentInfo}`;";
  const userAgentStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "userAgentPrefix", initializer: userAgentPrefix }]
  };

  const userAgentOptionsStatement = `options = {
      ...options,
      userAgentOptions: {
        userAgentPrefix
      }
    }`;

  const baseUrlStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "baseUrl", initializer: baseUrl }]
  };

  const { credentialScopes, credentialKeyHeaderName } = model.options;

  const scopesString =
    credentialScopes && credentialScopes.length
      ? credentialScopes.map((cs) => `"${cs}"`).join(", ")
      : "";
  const scopes = scopesString ? `scopes: [${scopesString}],` : "";

  const apiKeyHeaderName = credentialKeyHeaderName
    ? `apiKeyHeaderName: "${credentialKeyHeaderName}",`
    : "";

  const credentials =
    scopes || apiKeyHeaderName
      ? `options = {
        ...options,
        credentials: {
          ${scopes}
          ${apiKeyHeaderName}
        },
      }`
      : "";

  const getClient = `const client = getClient(
        baseUrl, ${credentials ? "credentials," : ""} options
      ) as ${clientTypeName};
      `;

  let returnStatement = `return client;`;

  if (includeShortcuts) {
    const shortcutImplementations = buildMethodShortcutImplementation(
      model.paths
    );
    const shortcutBody = Object.keys(shortcutImplementations).map((key) => {
      // If the operation group has an empty name, it means its operations are client
      // level operations so we need to spread the definitions. Otherwise they are
      // within an operation group so we add them as key: value
      return `${
        key && key !== "client" ? `"${key}":` : "..."
      } {${shortcutImplementations[key].join()}}`;
    });
    returnStatement = `return { ...client, ${shortcutBody.join()} };`;
  }

  return [
    baseUrlStatement,
    apiVersionStatement,
    credentials,
    userAgentInfoStatement,
    userAgentStatement,
    userAgentOptionsStatement,
    getClient,
    returnStatement
  ];
}

function getApiVersion(model: RLCModel): string | undefined {
  if (!model.apiVersionParam) {
    return undefined;
  }

  if (
    model.apiVersionParam &&
    isConstantSchema(model.apiVersionParam as Schema)
  ) {
    return model.apiVersionParam.default;
  }

  return undefined;
}
