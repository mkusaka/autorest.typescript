import { RequestParameters } from "@azure-rest/core-client";
import { RoundTripModel } from "./models";

export type ReadonlyPropertiesGetOptionalPropertyModelParameters =
  RequestParameters;

export interface ReadonlyPropertiesSetOptionalPropertyModelBodyParam {
  body: RoundTripModel;
}

export type ReadonlyPropertiesSetOptionalPropertyModelParameters =
  ReadonlyPropertiesSetOptionalPropertyModelBodyParam & RequestParameters;
