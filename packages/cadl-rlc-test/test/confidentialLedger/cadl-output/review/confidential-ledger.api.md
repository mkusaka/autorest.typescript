## API Report File for "@msinternal/confidential-ledger"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface CollectionOutput {
    // (undocumented)
    collectionId: string;
}

// @public (undocumented)
export interface ConfidentialLedgerCreateLedgerEntry201Headers {
    // (undocumented)
    location: string;
}

// @public
export interface ConfidentialLedgerCreateLedgerEntry201Response extends HttpResponse {
    // (undocumented)
    headers: RawHttpHeaders & ConfidentialLedgerCreateLedgerEntry201Headers;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface ConfidentialLedgerCreateLedgerEntryBodyParam {
    // (undocumented)
    body?: LedgerEntry;
}

// @public (undocumented)
export interface ConfidentialLedgerCreateLedgerEntryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerCreateLedgerEntryParameters = ConfidentialLedgerCreateLedgerEntryQueryParam & ConfidentialLedgerCreateLedgerEntryBodyParam & RequestParameters;

// @public (undocumented)
export interface ConfidentialLedgerCreateLedgerEntryQueryParam {
    // (undocumented)
    queryParameters?: ConfidentialLedgerCreateLedgerEntryQueryParamProperties;
}

// @public (undocumented)
export interface ConfidentialLedgerCreateLedgerEntryQueryParamProperties {
    collectionId?: string;
}

// @public
export interface ConfidentialLedgerCreateOrUpdateUser200Response extends HttpResponse {
    // (undocumented)
    body: LedgerUserOutput;
    // (undocumented)
    status: "200";
}

// @public
export interface ConfidentialLedgerCreateOrUpdateUser201Response extends HttpResponse {
    // (undocumented)
    body: LedgerUserOutput;
    // (undocumented)
    status: "201";
}

// @public (undocumented)
export interface ConfidentialLedgerCreateOrUpdateUserBodyParam {
    // (undocumented)
    body?: LedgerUser;
}

// @public (undocumented)
export interface ConfidentialLedgerCreateOrUpdateUserDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export interface ConfidentialLedgerCreateOrUpdateUserMediaTypesParam {
    // (undocumented)
    contentType: "application/merge-patch+json";
}

// @public (undocumented)
export type ConfidentialLedgerCreateOrUpdateUserParameters = ConfidentialLedgerCreateOrUpdateUserMediaTypesParam & ConfidentialLedgerCreateOrUpdateUserBodyParam & RequestParameters;

// @public
export interface ConfidentialLedgerDeleteUser204Response extends HttpResponse {
    // (undocumented)
    status: "204";
}

// @public (undocumented)
export interface ConfidentialLedgerDeleteUserDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerDeleteUserParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetConsortiumMembers200Response extends HttpResponse {
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetConsortiumMembersDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetConsortiumMembersParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetConstitution200Response extends HttpResponse {
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetConstitutionDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetConstitutionParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetCurrentLedgerEntry200Response extends HttpResponse {
    // (undocumented)
    body: LedgerEntryOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetCurrentLedgerEntryParameters = ConfidentialLedgerGetCurrentLedgerEntryQueryParam & RequestParameters;

// @public (undocumented)
export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParam {
    // (undocumented)
    queryParameters?: ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties;
}

// @public (undocumented)
export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties {
    collectionId?: string;
}

// @public
export interface ConfidentialLedgerGetEnclaveQuotes200Response extends HttpResponse {
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetEnclaveQuotesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetEnclaveQuotesParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetLedgerEntry200Response extends HttpResponse {
    // (undocumented)
    body: LedgerEntryOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetLedgerEntryDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetLedgerEntryParameters = ConfidentialLedgerGetLedgerEntryQueryParam & RequestParameters;

// @public (undocumented)
export interface ConfidentialLedgerGetLedgerEntryQueryParam {
    // (undocumented)
    queryParameters?: ConfidentialLedgerGetLedgerEntryQueryParamProperties;
}

// @public (undocumented)
export interface ConfidentialLedgerGetLedgerEntryQueryParamProperties {
    collectionId?: string;
}

// @public
export interface ConfidentialLedgerGetReceipt200Response extends HttpResponse {
    // (undocumented)
    body: TransactionReceiptOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetReceiptDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetReceiptParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetTransactionStatus200Response extends HttpResponse {
    // (undocumented)
    body: TransactionStatusOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetTransactionStatusDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetTransactionStatusParameters = RequestParameters;

// @public
export interface ConfidentialLedgerGetUser200Response extends HttpResponse {
    // (undocumented)
    body: LedgerUserOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerGetUserDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerGetUserParameters = RequestParameters;

// @public
export interface ConfidentialLedgerListCollections200Response extends HttpResponse {
    // (undocumented)
    body: Array<CollectionOutput>;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerListCollectionsDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerListCollectionsParameters = RequestParameters;

// @public
export interface ConfidentialLedgerListLedgerEntries200Response extends HttpResponse {
    // (undocumented)
    body: PagedLedgerEntriesOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface ConfidentialLedgerListLedgerEntriesDefaultResponse extends HttpResponse {
    // (undocumented)
    body: ErrorResponseOutput;
    // (undocumented)
    status: string;
}

// @public (undocumented)
export type ConfidentialLedgerListLedgerEntriesParameters = RequestParameters;

// @public
export interface ConfidentialLedgerOperations {
    createLedgerEntry(options?: ConfidentialLedgerCreateLedgerEntryParameters): StreamableMethod<ConfidentialLedgerCreateLedgerEntry201Response | ConfidentialLedgerCreateLedgerEntryDefaultResponse>;
    createOrUpdateUser(userId: string, options: ConfidentialLedgerCreateOrUpdateUserParameters): StreamableMethod<ConfidentialLedgerCreateOrUpdateUser200Response | ConfidentialLedgerCreateOrUpdateUser201Response | ConfidentialLedgerCreateOrUpdateUserDefaultResponse>;
    deleteUser(userId: string, options?: ConfidentialLedgerDeleteUserParameters): StreamableMethod<ConfidentialLedgerDeleteUser204Response | ConfidentialLedgerDeleteUserDefaultResponse>;
    getConsortiumMembers(options?: ConfidentialLedgerGetConsortiumMembersParameters): StreamableMethod<ConfidentialLedgerGetConsortiumMembers200Response | ConfidentialLedgerGetConsortiumMembersDefaultResponse>;
    getConstitution(options?: ConfidentialLedgerGetConstitutionParameters): StreamableMethod<ConfidentialLedgerGetConstitution200Response | ConfidentialLedgerGetConstitutionDefaultResponse>;
    getCurrentLedgerEntry(options?: ConfidentialLedgerGetCurrentLedgerEntryParameters): StreamableMethod<ConfidentialLedgerGetCurrentLedgerEntry200Response | ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse>;
    getEnclaveQuotes(options?: ConfidentialLedgerGetEnclaveQuotesParameters): StreamableMethod<ConfidentialLedgerGetEnclaveQuotes200Response | ConfidentialLedgerGetEnclaveQuotesDefaultResponse>;
    getLedgerEntry(transactionId: string, options?: ConfidentialLedgerGetLedgerEntryParameters): StreamableMethod<ConfidentialLedgerGetLedgerEntry200Response | ConfidentialLedgerGetLedgerEntryDefaultResponse>;
    getReceipt(transactionId: string, options?: ConfidentialLedgerGetReceiptParameters): StreamableMethod<ConfidentialLedgerGetReceipt200Response | ConfidentialLedgerGetReceiptDefaultResponse>;
    getTransactionStatus(transactionId: string, options?: ConfidentialLedgerGetTransactionStatusParameters): StreamableMethod<ConfidentialLedgerGetTransactionStatus200Response | ConfidentialLedgerGetTransactionStatusDefaultResponse>;
    getUser(userId: string, options?: ConfidentialLedgerGetUserParameters): StreamableMethod<ConfidentialLedgerGetUser200Response | ConfidentialLedgerGetUserDefaultResponse>;
    listCollections(options?: ConfidentialLedgerListCollectionsParameters): StreamableMethod<ConfidentialLedgerListCollections200Response | ConfidentialLedgerListCollectionsDefaultResponse>;
    listLedgerEntries(options?: ConfidentialLedgerListLedgerEntriesParameters): StreamableMethod<ConfidentialLedgerListLedgerEntries200Response | ConfidentialLedgerListLedgerEntriesDefaultResponse>;
}

// @public (undocumented)
export type ConfidentialLedgerServiceClient = Client & {
    path: Routes;
    confidentialLedger: ConfidentialLedgerOperations;
};

// @public
function createClient(ledgerUri: string, credentials: TokenCredential, options?: ClientOptions): ConfidentialLedgerServiceClient;
export default createClient;

// @public (undocumented)
export interface DeleteUser {
    delete(options?: ConfidentialLedgerDeleteUserParameters): StreamableMethod<ConfidentialLedgerDeleteUser204Response | ConfidentialLedgerDeleteUserDefaultResponse>;
    get(options?: ConfidentialLedgerGetUserParameters): StreamableMethod<ConfidentialLedgerGetUser200Response | ConfidentialLedgerGetUserDefaultResponse>;
    patch(options: ConfidentialLedgerCreateOrUpdateUserParameters): StreamableMethod<ConfidentialLedgerCreateOrUpdateUser200Response | ConfidentialLedgerCreateOrUpdateUser201Response | ConfidentialLedgerCreateOrUpdateUserDefaultResponse>;
}

// @public
export interface ErrorModelOutput {
    code: string;
    details: Array<ErrorModelOutput>;
    innererror?: InnerErrorOutput;
    message: string;
    target?: string;
}

// @public
export interface ErrorResponseOutput {
    error: ErrorModelOutput;
}

// @public
export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

// @public (undocumented)
export interface GetConsortiumMembers {
    get(options?: ConfidentialLedgerGetConsortiumMembersParameters): StreamableMethod<ConfidentialLedgerGetConsortiumMembers200Response | ConfidentialLedgerGetConsortiumMembersDefaultResponse>;
}

// @public (undocumented)
export interface GetConstitution {
    get(options?: ConfidentialLedgerGetConstitutionParameters): StreamableMethod<ConfidentialLedgerGetConstitution200Response | ConfidentialLedgerGetConstitutionDefaultResponse>;
}

// @public (undocumented)
export interface GetCurrentLedgerEntry {
    get(options?: ConfidentialLedgerGetCurrentLedgerEntryParameters): StreamableMethod<ConfidentialLedgerGetCurrentLedgerEntry200Response | ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse>;
}

// @public (undocumented)
export interface GetEnclaveQuotes {
    get(options?: ConfidentialLedgerGetEnclaveQuotesParameters): StreamableMethod<ConfidentialLedgerGetEnclaveQuotes200Response | ConfidentialLedgerGetEnclaveQuotesDefaultResponse>;
}

// @public (undocumented)
export interface GetLedgerEntry {
    get(options?: ConfidentialLedgerGetLedgerEntryParameters): StreamableMethod<ConfidentialLedgerGetLedgerEntry200Response | ConfidentialLedgerGetLedgerEntryDefaultResponse>;
}

// @public
export type GetPage<TPage> = (pageLink: string, maxPageSize?: number) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

// @public (undocumented)
export interface GetReceipt {
    get(options?: ConfidentialLedgerGetReceiptParameters): StreamableMethod<ConfidentialLedgerGetReceipt200Response | ConfidentialLedgerGetReceiptDefaultResponse>;
}

// @public (undocumented)
export interface GetTransactionStatus {
    get(options?: ConfidentialLedgerGetTransactionStatusParameters): StreamableMethod<ConfidentialLedgerGetTransactionStatus200Response | ConfidentialLedgerGetTransactionStatusDefaultResponse>;
}

// @public
export interface InnerErrorOutput {
    code: string;
    innererror?: InnerErrorOutput;
}

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerListCollections200Response | ConfidentialLedgerListCollectionsDefaultResponse): response is ConfidentialLedgerListCollectionsDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetEnclaveQuotes200Response | ConfidentialLedgerGetEnclaveQuotesDefaultResponse): response is ConfidentialLedgerGetEnclaveQuotesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetConstitution200Response | ConfidentialLedgerGetConstitutionDefaultResponse): response is ConfidentialLedgerGetConstitutionDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetConsortiumMembers200Response | ConfidentialLedgerGetConsortiumMembersDefaultResponse): response is ConfidentialLedgerGetConsortiumMembersDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerListLedgerEntries200Response | ConfidentialLedgerListLedgerEntriesDefaultResponse): response is ConfidentialLedgerListLedgerEntriesDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerCreateLedgerEntry201Response | ConfidentialLedgerCreateLedgerEntryDefaultResponse): response is ConfidentialLedgerCreateLedgerEntryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetLedgerEntry200Response | ConfidentialLedgerGetLedgerEntryDefaultResponse): response is ConfidentialLedgerGetLedgerEntryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetReceipt200Response | ConfidentialLedgerGetReceiptDefaultResponse): response is ConfidentialLedgerGetReceiptDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetTransactionStatus200Response | ConfidentialLedgerGetTransactionStatusDefaultResponse): response is ConfidentialLedgerGetTransactionStatusDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetCurrentLedgerEntry200Response | ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse): response is ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerDeleteUser204Response | ConfidentialLedgerDeleteUserDefaultResponse): response is ConfidentialLedgerDeleteUserDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerGetUser200Response | ConfidentialLedgerGetUserDefaultResponse): response is ConfidentialLedgerGetUserDefaultResponse;

// @public (undocumented)
export function isUnexpected(response: ConfidentialLedgerCreateOrUpdateUser200Response | ConfidentialLedgerCreateOrUpdateUser201Response | ConfidentialLedgerCreateOrUpdateUserDefaultResponse): response is ConfidentialLedgerCreateOrUpdateUserDefaultResponse;

// @public (undocumented)
export interface LedgerEntry {
    // (undocumented)
    collectionId: string;
    contents: string;
    transactionId: string;
}

// @public (undocumented)
export interface LedgerEntryOutput {
    // (undocumented)
    collectionId: string;
    contents: string;
    transactionId: string;
}

// @public
export interface LedgerUser {
    assignedRole: string;
    userId: string;
}

// @public
export interface LedgerUserOutput {
    assignedRole: string;
    userId: string;
}

// @public (undocumented)
export interface ListCollections {
    get(options?: ConfidentialLedgerListCollectionsParameters): StreamableMethod<ConfidentialLedgerListCollections200Response | ConfidentialLedgerListCollectionsDefaultResponse>;
}

// @public (undocumented)
export interface ListLedgerEntries {
    get(options?: ConfidentialLedgerListLedgerEntriesParameters): StreamableMethod<ConfidentialLedgerListLedgerEntries200Response | ConfidentialLedgerListLedgerEntriesDefaultResponse>;
    post(options?: ConfidentialLedgerCreateLedgerEntryParameters): StreamableMethod<ConfidentialLedgerCreateLedgerEntry201Response | ConfidentialLedgerCreateLedgerEntryDefaultResponse>;
}

// @public
export interface PagedLedgerEntriesOutput {
    entries: Array<LedgerEntryOutput>;
    nextLink?: string;
    state: string;
}

// @public
export function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

// @public
export type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} | {
    body: {
        entries?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

// @public
export interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

// @public (undocumented)
export interface ReceiptContentsOutput {
}

// @public (undocumented)
export interface Routes {
    (path: "/app/collections"): ListCollections;
    (path: "/app/enclaveQuotes"): GetEnclaveQuotes;
    (path: "/app/governance/constitution"): GetConstitution;
    (path: "/app/governance/members"): GetConsortiumMembers;
    (path: "/app/transactions"): ListLedgerEntries;
    (path: "/app/transactions/{transactionId}", transactionId: string): GetLedgerEntry;
    (path: "/app/transactions/{transactionId}/receipt", transactionId: string): GetReceipt;
    (path: "/app/transactions/{transactionId}/status", transactionId: string): GetTransactionStatus;
    (path: "/app/transactions:getCurrentLedgerEntry"): GetCurrentLedgerEntry;
    (path: "/app/users/{userId}", userId: string): DeleteUser;
}

// @public
export interface TransactionReceiptOutput {
    // (undocumented)
    receipt: ReceiptContentsOutput;
    state: string;
    transactionId: string;
}

// @public
export interface TransactionStatusOutput {
    state: string;
    transactionId: string;
}

// (No @packageDocumentation comment for this package)

```
