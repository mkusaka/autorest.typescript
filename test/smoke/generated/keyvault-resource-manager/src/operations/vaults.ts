/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Vaults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Vault,
  VaultsListByResourceGroupNextOptionalParams,
  VaultsListByResourceGroupOptionalParams,
  VaultsListBySubscriptionNextOptionalParams,
  VaultsListBySubscriptionOptionalParams,
  DeletedVault,
  VaultsListDeletedNextOptionalParams,
  VaultsListDeletedOptionalParams,
  Resource,
  VaultsListNextOptionalParams,
  VaultsListOptionalParams,
  VaultCreateOrUpdateParameters,
  VaultsCreateOrUpdateOptionalParams,
  VaultsCreateOrUpdateResponse,
  VaultPatchParameters,
  VaultsUpdateOptionalParams,
  VaultsUpdateResponse,
  VaultsDeleteOptionalParams,
  VaultsGetOptionalParams,
  VaultsGetResponse,
  VaultAccessPolicyParameters,
  AccessPolicyUpdateKind,
  VaultsUpdateAccessPolicyOptionalParams,
  VaultsUpdateAccessPolicyResponse,
  VaultsListByResourceGroupResponse,
  VaultsListBySubscriptionResponse,
  VaultsListDeletedResponse,
  VaultsGetDeletedOptionalParams,
  VaultsGetDeletedResponse,
  VaultsPurgeDeletedOptionalParams,
  VaultsListResponse,
  VaultCheckNameAvailabilityParameters,
  VaultsCheckNameAvailabilityOptionalParams,
  VaultsCheckNameAvailabilityResponse,
  VaultsListByResourceGroupNextResponse,
  VaultsListBySubscriptionNextResponse,
  VaultsListDeletedNextResponse,
  VaultsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Vaults operations. */
export class VaultsImpl implements Vaults {
  private readonly client: KeyVaultManagementClientContext;

  /**
   * Initialize a new instance of the class Vaults class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClientContext) {
    this.client = client;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Vault> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Vault[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Vault> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Vault> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: VaultsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Vault[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: VaultsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Vault> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  public listDeleted(
    options?: VaultsListDeletedOptionalParams
  ): PagedAsyncIterableIterator<DeletedVault> {
    const iter = this.listDeletedPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeletedPagingPage(options);
      }
    };
  }

  private async *listDeletedPagingPage(
    options?: VaultsListDeletedOptionalParams
  ): AsyncIterableIterator<DeletedVault[]> {
    let result = await this._listDeleted(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeletedNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeletedPagingAll(
    options?: VaultsListDeletedOptionalParams
  ): AsyncIterableIterator<DeletedVault> {
    for await (const page of this.listDeletedPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VaultsListOptionalParams
  ): PagedAsyncIterableIterator<Resource> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: VaultsListOptionalParams
  ): AsyncIterableIterator<Resource[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: VaultsListOptionalParams
  ): AsyncIterableIterator<Resource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VaultsCreateOrUpdateResponse>,
      VaultsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VaultsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vaultName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<VaultsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vaultName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to patch the vault
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultPatchParameters,
    options?: VaultsUpdateOptionalParams
  ): Promise<VaultsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault to delete
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsGetOptionalParams
  ): Promise<VaultsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      getOperationSpec
    );
  }

  /**
   * Update access policies in a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param operationKind Name of the operation
   * @param parameters Access policy to merge into the vault
   * @param options The options parameters.
   */
  updateAccessPolicy(
    resourceGroupName: string,
    vaultName: string,
    operationKind: AccessPolicyUpdateKind,
    parameters: VaultAccessPolicyParameters,
    options?: VaultsUpdateAccessPolicyOptionalParams
  ): Promise<VaultsUpdateAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, operationKind, parameters, options },
      updateAccessPolicyOperationSpec
    );
  }

  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): Promise<VaultsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): Promise<VaultsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  private _listDeleted(
    options?: VaultsListDeletedOptionalParams
  ): Promise<VaultsListDeletedResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeletedOperationSpec
    );
  }

  /**
   * Gets the deleted Azure key vault.
   * @param vaultName The name of the vault.
   * @param location The location of the deleted vault.
   * @param options The options parameters.
   */
  getDeleted(
    vaultName: string,
    location: string,
    options?: VaultsGetDeletedOptionalParams
  ): Promise<VaultsGetDeletedResponse> {
    return this.client.sendOperationRequest(
      { vaultName, location, options },
      getDeletedOperationSpec
    );
  }

  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  async beginPurgeDeleted(
    vaultName: string,
    location: string,
    options?: VaultsPurgeDeletedOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { vaultName, location, options },
      purgeDeletedOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  async beginPurgeDeletedAndWait(
    vaultName: string,
    location: string,
    options?: VaultsPurgeDeletedOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurgeDeleted(vaultName, location, options);
    return poller.pollUntilDone();
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VaultsListOptionalParams
  ): Promise<VaultsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Checks that the vault name is valid and is not already in use.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  checkNameAvailability(
    vaultName: VaultCheckNameAvailabilityParameters,
    options?: VaultsCheckNameAvailabilityOptionalParams
  ): Promise<VaultsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { vaultName, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VaultsListByResourceGroupNextOptionalParams
  ): Promise<VaultsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: VaultsListBySubscriptionNextOptionalParams
  ): Promise<VaultsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListDeletedNext
   * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
   * @param options The options parameters.
   */
  private _listDeletedNext(
    nextLink: string,
    options?: VaultsListDeletedNextOptionalParams
  ): Promise<VaultsListDeletedNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeletedNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VaultsListNextOptionalParams
  ): Promise<VaultsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    },
    202: {
      bodyMapper: Mappers.Vault
    },
    204: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    },
    201: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId,
    Parameters.operationKind
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const purgeDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    }
  },
  requestBody: Parameters.vaultName2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeletedNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
