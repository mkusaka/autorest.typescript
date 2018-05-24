/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { AzureCompositeModel } from "../azureCompositeModel";

const WebResource = msRest.WebResource;

/** Class representing a Readonlyproperty. */
export class Readonlyproperty {
  private readonly client: AzureCompositeModel;
  /**
   * Create a Readonlyproperty.
   * @param {AzureCompositeModel} client Reference to the service client.
   */
  constructor(client: AzureCompositeModel) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ReadonlyObj>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "/complex/readonlyproperty/valid",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.ReadonlyObj;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putValidWithHttpOperationResponse(options?: Models.ReadonlypropertyPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    let size = (options && options.size !== undefined) ? options.size : undefined;
    // Validate
    try {
      if (size !== null && size !== undefined && typeof size !== 'number') {
        throw new Error('size must be of type number.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let complexBody: any = {};
    try {
      if (size !== null && size !== undefined)
      {
        complexBody.size = size;
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    httpRequest.body = complexBody;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = Mappers.ReadonlyObj;
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "/complex/readonlyproperty/valid",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
          requestBodyMapper: requestModelMapper,
          requestBodyName: "complexBody",
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.ReadonlyObj} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ReadonlyObj} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.ReadonlyObj>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ReadonlyObj>;
  getValid(callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReadonlyObj>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ReadonlyObj>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ReadonlyObj);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ReadonlyObj;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(): Promise<void>;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ReadonlypropertyPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
