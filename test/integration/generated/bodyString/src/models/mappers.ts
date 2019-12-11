/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        type: {
          name: "String"
        },
        serializedName: "message"
      }
    }
  }
};

export const RefColorConstant: coreHttp.CompositeMapper = {
  serializedName: "RefColorConstant",
  type: {
    name: "Composite",
    modelProperties: {
      colorConstant: {
        type: {
          name: "String"
        },
        serializedName: "ColorConstant",
        defaultValue: "green-color",
        isConstant: true
      },
      field1: {
        type: {
          name: "String"
        },
        serializedName: "field1"
      }
    }
  }
};
