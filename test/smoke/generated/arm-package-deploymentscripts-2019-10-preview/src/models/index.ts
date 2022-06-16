/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type DeploymentScriptUnion =
  | DeploymentScript
  | AzurePowerShellScript
  | AzureCliScript;

/** Managed identity generic object. */
export interface ManagedServiceIdentity {
  /** Type of the managed identity. */
  type?: ManagedServiceIdentityType;
  /** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
  userAssignedIdentities?: { [propertyName: string]: UserAssignedIdentity };
}

/** User-assigned managed identity. */
export interface UserAssignedIdentity {
  /** Azure Active Directory principal ID associated with this identity. */
  principalId?: string;
  /** Client App Id associated with this identity. */
  clientId?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The type of identity that last modified the resource. */
  lastModifiedAt?: Date;
}

/** Common properties for all Azure resources. */
export interface AzureResourceBase {
  /**
   * String Id used to locate any resource on Azure.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Deployment scripts error response. */
export interface DeploymentScriptsError {
  /** The resource management error response. */
  error?: ErrorResponse;
}

/** The resource management error response. */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** List of deployment scripts. */
export interface DeploymentScriptListResult {
  /** An array of deployment scripts. */
  value?: DeploymentScriptUnion[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Deployment script execution logs. */
export interface ScriptLogsList {
  /** Deployment scripts logs. */
  value?: ScriptLog[];
}

/** Common properties for the deployment script. */
export interface DeploymentScriptPropertiesBase {
  /** Container settings. */
  containerSettings?: ContainerConfiguration;
  /** Storage Account settings. */
  storageAccountSettings?: StorageAccountConfiguration;
  /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: { [propertyName: string]: Record<string, unknown> };
}

/** Settings to customize ACI container instance. */
export interface ContainerConfiguration {
  /** Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property. */
  containerGroupName?: string;
}

/** Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage */
export interface StorageAccountConfiguration {
  /** The storage account name. */
  storageAccountName?: string;
  /** The storage account access key. */
  storageAccountKey?: string;
}

/** Generic object modeling results of script execution. */
export interface ScriptStatus {
  /**
   * ACI resource Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly containerInstanceId?: string;
  /**
   * Storage account resource Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly storageAccountId?: string;
  /**
   * Start time of the script execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * End time of the script execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTime?: Date;
  /**
   * Time the deployment script resource will expire.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly expirationTime?: Date;
  /** Error that is relayed from the script execution. */
  error?: ErrorResponse;
}

/** Common configuration settings for both Azure PowerShell and Azure CLI scripts. */
export interface ScriptConfigurationBase {
  /** Uri for the script. This is the entry point for the external script. */
  primaryScriptUri?: string;
  /** Supporting files for the external script. */
  supportingScriptUris?: string[];
  /** Script body. */
  scriptContent?: string;
  /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
  arguments?: string;
  /** The environment variables to pass over to the script. */
  environmentVariables?: EnvironmentVariable[];
  /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
  forceUpdateTag?: string;
  /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week). */
  retentionInterval: string;
  /** Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H */
  timeout?: string;
}

/** The environment variable to pass to the script in the container instance. */
export interface EnvironmentVariable {
  /** The name of the environment variable. */
  name: string;
  /** The value of the environment variable. */
  value?: string;
  /** The value of the secure environment variable. */
  secureValue?: string;
}

/** Deployment script object. */
export interface DeploymentScript extends AzureResourceBase {
  /** Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported. */
  identity: ManagedServiceIdentity;
  /** The location of the ACI and the storage account for the deployment script. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Type of the script. */
  kind: ScriptType;
  /**
   * The system metadata related to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Deployment script parameters to be updated. */
export interface DeploymentScriptUpdateParameter extends AzureResourceBase {
  /** Resource tags to be updated. */
  tags?: { [propertyName: string]: string };
}

/** Script execution log object. */
export interface ScriptLog extends AzureResourceBase {
  /**
   * Script execution logs in text format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly log?: string;
}

/** Properties of the Azure PowerShell script object. */
export interface AzurePowerShellScriptProperties
  extends DeploymentScriptPropertiesBase,
    ScriptConfigurationBase {
  /** Azure PowerShell module version to be used. */
  azPowerShellVersion: string;
}

/** Properties of the Azure CLI script object. */
export interface AzureCliScriptProperties
  extends DeploymentScriptPropertiesBase,
    ScriptConfigurationBase {
  /** Azure CLI module version to be used. */
  azCliVersion: string;
}

/** Object model for the Azure PowerShell script. */
export interface AzurePowerShellScript extends DeploymentScript {
  /** Container settings. */
  containerSettings?: ContainerConfiguration;
  /** Storage Account settings. */
  storageAccountSettings?: StorageAccountConfiguration;
  /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: { [propertyName: string]: Record<string, unknown> };
  /** Uri for the script. This is the entry point for the external script. */
  primaryScriptUri?: string;
  /** Supporting files for the external script. */
  supportingScriptUris?: string[];
  /** Script body. */
  scriptContent?: string;
  /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
  arguments?: string;
  /** The environment variables to pass over to the script. */
  environmentVariables?: EnvironmentVariable[];
  /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
  forceUpdateTag?: string;
  /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week). */
  retentionInterval: string;
  /** Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H */
  timeout?: string;
  /** Azure PowerShell module version to be used. */
  azPowerShellVersion: string;
}

/** Object model for the Azure CLI script. */
export interface AzureCliScript extends DeploymentScript {
  /** Container settings. */
  containerSettings?: ContainerConfiguration;
  /** Storage Account settings. */
  storageAccountSettings?: StorageAccountConfiguration;
  /** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
  cleanupPreference?: CleanupOptions;
  /**
   * State of the script execution. This only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ScriptProvisioningState;
  /**
   * Contains the results of script execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ScriptStatus;
  /**
   * List of script outputs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: { [propertyName: string]: Record<string, unknown> };
  /** Uri for the script. This is the entry point for the external script. */
  primaryScriptUri?: string;
  /** Supporting files for the external script. */
  supportingScriptUris?: string[];
  /** Script body. */
  scriptContent?: string;
  /** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
  arguments?: string;
  /** The environment variables to pass over to the script. */
  environmentVariables?: EnvironmentVariable[];
  /** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
  forceUpdateTag?: string;
  /** Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week). */
  retentionInterval: string;
  /** Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H */
  timeout?: string;
  /** Azure CLI module version to be used. */
  azCliVersion: string;
}

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** UserAssigned */
  UserAssigned = "UserAssigned"
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** Known values of {@link ScriptType} that the service accepts. */
export enum KnownScriptType {
  /** AzurePowerShell */
  AzurePowerShell = "AzurePowerShell",
  /** AzureCLI */
  AzureCLI = "AzureCLI"
}

/**
 * Defines values for ScriptType. \
 * {@link KnownScriptType} can be used interchangeably with ScriptType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzurePowerShell** \
 * **AzureCLI**
 */
export type ScriptType = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link CleanupOptions} that the service accepts. */
export enum KnownCleanupOptions {
  /** Always */
  Always = "Always",
  /** OnSuccess */
  OnSuccess = "OnSuccess",
  /** OnExpiration */
  OnExpiration = "OnExpiration"
}

/**
 * Defines values for CleanupOptions. \
 * {@link KnownCleanupOptions} can be used interchangeably with CleanupOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Always** \
 * **OnSuccess** \
 * **OnExpiration**
 */
export type CleanupOptions = string;

/** Known values of {@link ScriptProvisioningState} that the service accepts. */
export enum KnownScriptProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** ProvisioningResources */
  ProvisioningResources = "ProvisioningResources",
  /** Running */
  Running = "Running",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for ScriptProvisioningState. \
 * {@link KnownScriptProvisioningState} can be used interchangeably with ScriptProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **ProvisioningResources** \
 * **Running** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ScriptProvisioningState = string;

/** Optional parameters. */
export interface DeploymentScriptsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type DeploymentScriptsCreateResponse = DeploymentScriptUnion;

/** Optional parameters. */
export interface DeploymentScriptsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Deployment script resource with the tags to be updated. */
  deploymentScript?: DeploymentScriptUpdateParameter;
}

/** Contains response data for the update operation. */
export type DeploymentScriptsUpdateResponse = DeploymentScriptUnion;

/** Optional parameters. */
export interface DeploymentScriptsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DeploymentScriptsGetResponse = DeploymentScriptUnion;

/** Optional parameters. */
export interface DeploymentScriptsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentScriptsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type DeploymentScriptsListBySubscriptionResponse = DeploymentScriptListResult;

/** Optional parameters. */
export interface DeploymentScriptsGetLogsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getLogs operation. */
export type DeploymentScriptsGetLogsResponse = ScriptLogsList;

/** Optional parameters. */
export interface DeploymentScriptsGetLogsDefaultOptionalParams
  extends coreClient.OperationOptions {
  /** The number of lines to show from the tail of the deployment script log. Valid value is a positive number up to 1000. If 'tail' is not provided, all available logs are shown up to container instance log capacity of 4mb. */
  tail?: number;
}

/** Contains response data for the getLogsDefault operation. */
export type DeploymentScriptsGetLogsDefaultResponse = ScriptLog;

/** Optional parameters. */
export interface DeploymentScriptsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type DeploymentScriptsListByResourceGroupResponse = DeploymentScriptListResult;

/** Optional parameters. */
export interface DeploymentScriptsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type DeploymentScriptsListBySubscriptionNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export interface DeploymentScriptsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DeploymentScriptsListByResourceGroupNextResponse = DeploymentScriptListResult;

/** Optional parameters. */
export interface DeploymentScriptsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
