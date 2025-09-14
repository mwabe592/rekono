import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'akahu/1.0.0 (api/6.1.3)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get a list of all accounts that the user has connected to your application.
   *
   * > ℹ️
   * >
   * > The format for the returned account depends on the permissions you have!
   *
   * For more details see:
   *   - [📚 Accessing account data guide](/docs/accessing-account-data)
   *   - [📖 Account model](/docs/the-account-model)
   *
   * @summary Get All Accounts
   * @throws FetchError<400, types.GetAccountsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetAccountsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetAccountsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetAccountsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getAccounts(metadata: types.GetAccountsMetadataParam): Promise<FetchResponse<200, types.GetAccountsResponse200>> {
    return this.core.fetch('/accounts', 'get', metadata);
  }

  /**
   * Get an individual account that the user has connected to your application.
   *
   * > ℹ️
   * >
   * > The format for the returned account depends on the permissions you have!
   *
   * For more details see:
   *   - [📚 Accessing account data guide](/docs/accessing-account-data)
   *   - [📖 Account model](/docs/the-account-model)
   *
   * @summary Get Account
   * @throws FetchError<400, types.GetAccountsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetAccountsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetAccountsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetAccountsIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetAccountsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getAccountsId(metadata: types.GetAccountsIdMetadataParam): Promise<FetchResponse<200, types.GetAccountsIdResponse200>> {
    return this.core.fetch('/accounts/{id}', 'get', metadata);
  }

  /**
   * > ⚠️
   * >
   * > This endpoint is deprecated.
   * > <pre></pre>
   * > Accounts connected via an official open banking connection can't be revoked on an
   * individual basis via API. Calling this endpoint for accounts that have a
   * `connection_type` of `official` will result in a 400 error response.
   * > <pre></pre>
   * > Use one of these alternative options to the update the accounts connected via
   * `official` connections:
   * >  - Send the user to the [📚 authorisation flow](/docs/authorizing-with-oauth2) where
   * they can reduce the scope of the authorisation via their bank.
   * >  - Use the [Revoke Access To Authorisation](/reference/delete_authorisations-id)
   * endpoint to revoke the entire authorisation.
   *
   * Revoke your application's access to one of the user's connected accounts and its
   * associated data, including transactions.
   *
   * Use this if you no longer require access to the consented account data.
   *
   * For more details see:
   *   - [📚 Accessing account data guide](/docs/accessing-account-data)
   *   - [📖 Account model](/docs/the-account-model)
   *
   * @summary Revoke Access To Account
   * @throws FetchError<400, types.DeleteAccountsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.DeleteAccountsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.DeleteAccountsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.DeleteAccountsIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.DeleteAccountsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  deleteAccountsId(metadata: types.DeleteAccountsIdMetadataParam): Promise<FetchResponse<200, types.DeleteAccountsIdResponse200>> {
    return this.core.fetch('/accounts/{id}', 'delete', metadata);
  }

  /**
   * A user's accounts are connected to Akahu via an authorisation with their financial
   * institution. Multiple accounts can be connected using a single authorisation.
   *
   * This endpoint will revoke your application's access to one of the user's consented
   * authorisations. After calling this endpoint, your application will no longer have access
   * to the accounts connected via that authorisation (including their associated data and
   * transactions).
   *
   * You can find an authorisation for an account by looking at the `_authorisation` field on
   * each account.
   *
   * > ℹ️
   * >
   * > Users can also update their authorisations via the [📚 authorisation
   * flow](/docs/authorizing-with-oauth2). The authorisation flow is the only way that users
   * can add or remove access for individual accounts rather than a whole authorisation.
   *
   * For more details see:
   *   - [📚 Accessing account data guide](/docs/accessing-account-data)
   *   - [📖 Account model](/docs/the-account-model)
   *
   * @summary Revoke Access To Authorisation
   * @throws FetchError<400, types.DeleteAuthorisationsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.DeleteAuthorisationsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.DeleteAuthorisationsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.DeleteAuthorisationsIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.DeleteAuthorisationsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  deleteAuthorisationsId(metadata: types.DeleteAuthorisationsIdMetadataParam): Promise<FetchResponse<200, types.DeleteAuthorisationsIdResponse200>> {
    return this.core.fetch('/authorisations/{id}', 'delete', metadata);
  }

  /**
   * This endpoint is the final step in our [📖 OAuth Authentication
   * Flow](/docs/authorizing-with-oauth2).
   *
   * Use this endpoint to exchange an **Authorization Code** for a **User Access Token**,
   * which can be used to access the rest of this API.
   *
   * To ensure that your application does not retain unnecessary access to user data,
   * [revoke](./delete_token) this access token in the event that is no longer required (e.g.
   * the user deletes their account).
   *
   * **Endpoint not applicable for Personal Apps**. See our [📚 Getting started
   * guide](/docs/getting-started) to set up your Personal App.
   *
   * > 📘
   * >
   * > **OAuth2 Error Responses**
   * >
   * > In keeping with the OAuth2 specification, error responses from this endpoint contain
   * an error in the `error` field, rather than the `message` field used by other Akahu
   * endpoints.
   *
   * For more details see:
   * - [📚 OAuth Authentication Flow](/docs/authorizing-with-oauth2).
   * - [📖 Auth scopes](/docs/scopes)
   * - [📖 Token webhooks](/docs/reference-webhooks#token)
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📚 Accessing account data guide](/docs/accessing-account-data)
   *
   * @summary Exchange an Authorization Code For a Token
   * @throws FetchError<400, types.PostTokenResponse400> Your request was malformed or otherwise unacceptable. The `error` key in the response
   * will be on one of the standard OAuth error codes.
   * @throws FetchError<500, types.PostTokenResponse500> Internal Error
   */
  postToken(body: types.PostTokenBodyParam): Promise<FetchResponse<200, types.PostTokenResponse200>> {
    return this.core.fetch('/token', 'post', body);
  }

  /**
   * Revokes the **User Access Token** that is included in the `Authorization` header of the
   * request.
   *
   * Revoking a User Access Token will remove your access to **all** of a user's connected
   * account data including transactions.
   *
   * > ℹ️
   * >
   * > Users can re-authorize your application's access to their accounts via the [📚
   * authorisation flow](/docs/authorizing-with-oauth2).
   *
   * @summary Revoke a Token
   * @throws FetchError<400, types.DeleteTokenResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.DeleteTokenResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.DeleteTokenResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.DeleteTokenResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  deleteToken(metadata: types.DeleteTokenMetadataParam): Promise<FetchResponse<200, types.DeleteTokenResponse200>> {
    return this.core.fetch('/token', 'delete', metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Gets a list of all connected financial institutions that users can connect to your Akahu
   * application.
   *
   * - [📚 Supported Integrations List](/docs/integrations#supported-integrations)
   *
   * @summary Get All Connections
   * @throws FetchError<400, types.GetConnectionsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetConnectionsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetConnectionsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetConnectionsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getConnections(): Promise<FetchResponse<200, types.GetConnectionsResponse200>> {
    return this.core.fetch('/connections', 'get');
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Get an individual financial institution connection.
   *
   * - [📚 Supported Integrations List](/docs/integrations#supported-integrations)
   *
   * @summary Get a Connection
   * @throws FetchError<400, types.GetConnectionsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetConnectionsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetConnectionsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetConnectionsIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetConnectionsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getConnectionsId(metadata: types.GetConnectionsIdMetadataParam): Promise<FetchResponse<200, types.GetConnectionsIdResponse200>> {
    return this.core.fetch('/connections/{id}', 'get', metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Gets a list of all NZFCC categories that may be returned on a transaction.
   *
   * - [📚 Explore NZFCC Categories](https://nzfcc.org)
   *
   * @summary Get All Categories
   * @throws FetchError<400, types.GetCategoriesResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetCategoriesResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetCategoriesResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetCategoriesResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getCategories(): Promise<FetchResponse<200, types.GetCategoriesResponse200>> {
    return this.core.fetch('/categories', 'get');
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Get an individual NZFCC Category.
   *
   * - [📚 Explore NZFCC Categories](https://nzfcc.org)
   *
   * @summary Get a Category
   * @throws FetchError<400, types.GetCategoriesIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetCategoriesIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetCategoriesIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetCategoriesIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetCategoriesIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getCategoriesId(metadata: types.GetCategoriesIdMetadataParam): Promise<FetchResponse<200, types.GetCategoriesIdResponse200>> {
    return this.core.fetch('/categories/{id}', 'get', metadata);
  }

  /**
   * This endpoint requests a data refresh for all accounts that the user has connected to
   * your application.
   *
   * Account data such as balance and transactions are periodically refreshed by Akahu and
   * enriched **asynchronously**, providing clean and consistent data across financial
   * institutions.
   *
   * However, there may be certain times that your app requires the most up-to-date account
   * data possible, this endpoint allows you to request a refresh on-demand for these cases.
   *
   * For more details see:
   * - [📚 Data Refreshes guide](/docs/data-refreshes)
   *
   * @summary Refresh All Accounts
   * @throws FetchError<400, types.PostRefreshResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostRefreshResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostRefreshResponse403> You are not allowed to access this content.
   * @throws FetchError<429, types.PostRefreshResponse429> You have been rate limited on this endpoint.
   * @throws FetchError<500, types.PostRefreshResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postRefresh(metadata: types.PostRefreshMetadataParam): Promise<FetchResponse<200, types.PostRefreshResponse200>> {
    return this.core.fetch('/refresh', 'post', metadata);
  }

  /**
   * This endpoint requests a data refresh for a specific financial institution or a specific
   * account that the user has connected to your application.
   *
   * #### Connection ID
   *
   * Calling this endpoint with a **Connection** ID will request that Akahu performs a data
   * refresh for all of the user's connected accounts that are held at the financial
   * institution corresponding to that Connection.
   *
   * #### Account ID
   *
   * Calling this endpoint with an **Account** ID will request that Akahu performs a data
   * refresh for that specific connected account and any other connected accounts that are
   * associated with the same login credentials.
   *
   * For example, if the user has shared three ASB accounts from a single set of login
   * credentials and you request a refresh for one, the other two accounts will also be
   * refreshed.
   *
   * For more details see:
   * - [📚 Data Refreshes guide](/docs/data-refreshes)
   *
   * @summary Refresh Individual Accounts or Connections
   * @throws FetchError<400, types.PostRefreshIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostRefreshIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostRefreshIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.PostRefreshIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<429, types.PostRefreshIdResponse429> You have been rate limited on this endpoint.
   * @throws FetchError<500, types.PostRefreshIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postRefreshId(metadata: types.PostRefreshIdMetadataParam): Promise<FetchResponse<200, types.PostRefreshIdResponse200>> {
    return this.core.fetch('/refresh/{id}', 'post', metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Get the results of an Identity OAuth result using the authorization `code` provided upon
   * redirection to your `redirect_uri` after the user's successful completion of the
   * authorisation flow.
   *
   * This can be used to verify a user's identity using the data that is held about them by
   * their financial institution.
   *
   * For more information about our Identity OAuth flow see our:
   *   - [📚 One-off Identity guide](/docs/oneoff-identity-verification)
   *   - [📚 Identity verification guide](/docs/identity-verification)
   *   - [📖 Identity model](/docs/the-oneoff-identity-result-model)
   *
   * @summary [One-off access] Get Identity Result
   * @throws FetchError<400, types.GetIdentityIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetIdentityIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetIdentityIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetIdentityIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetIdentityIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getIdentityId(metadata: types.GetIdentityIdMetadataParam): Promise<FetchResponse<200, types.GetIdentityIdResponse200>> {
    return this.core.fetch('/identity/{id}', 'get', metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * To verify your user's identity, you may wish to match the name that you have on file
   * against an official record such as the bank account holder name or Party name, returned
   * via the Identity Response.
   *
   * For more details about the data returned, see:
   *   - [📚 One-Off Verify Name](/docs/oneoff-verify-name)
   *   - [📖 Identity model](/docs/the-oneoff-identity-result-model)
   *
   * @summary [One-off access] Verify a name
   * @throws FetchError<400, types.PostIdentityIdVerifyNameResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostIdentityIdVerifyNameResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostIdentityIdVerifyNameResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.PostIdentityIdVerifyNameResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.PostIdentityIdVerifyNameResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postIdentityIdVerifyName(body: types.PostIdentityIdVerifyNameBodyParam, metadata: types.PostIdentityIdVerifyNameMetadataParam): Promise<FetchResponse<200, types.PostIdentityIdVerifyNameResponse200>> {
    return this.core.fetch('/identity/{id}/verify/name', 'post', body, metadata);
  }

  /**
   * To verify your user's identity, you may wish to match the name that you have on file
   * against an official record such as the bank account holder name or Party name.
   *
   * This will match against all available sources from all accounts that the user has
   * connected to your app.
   *
   * For more details about the data returned, see:
   *   - [📚 Enduring Verify Name](/docs/enduring-verify-name)
   *
   * @summary [Enduring access] Verify a name
   * @throws FetchError<400, types.PostVerifyNameResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostVerifyNameResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostVerifyNameResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.PostVerifyNameResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.PostVerifyNameResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postVerifyName(body: types.PostVerifyNameBodyParam, metadata: types.PostVerifyNameMetadataParam): Promise<FetchResponse<200, types.PostVerifyNameResponse200>> {
    return this.core.fetch('/verify/name', 'post', body, metadata);
  }

  /**
   * To verify your user's identity, you may wish to match the name that you have on file
   * against an official record such as the bank account holder name or Party name.
   *
   * This will only use identity sources derived from the specified account, rather than all
   * accounts.
   *
   * For more details about the data returned, see:
   *   - [📚 Enduring Verify Name](/docs/enduring-verify-name)
   *
   * @summary [Enduring access] Verify a name against an account
   * @throws FetchError<400, types.PostVerifyNameIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostVerifyNameIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostVerifyNameIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.PostVerifyNameIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.PostVerifyNameIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postVerifyNameId(body: types.PostVerifyNameIdBodyParam, metadata: types.PostVerifyNameIdMetadataParam): Promise<FetchResponse<200, types.PostVerifyNameIdResponse200>> {
    return this.core.fetch('/verify/name/{id}', 'post', body, metadata);
  }

  /**
   * Get a list of the parties who have authorised financial account connections with your
   * app. This data is sourced from the customer profile information held by the financial
   * institution rather than any specific account held within.
   *
   * > ⚠️
   * >
   * > This data relates to the party that authorised the account connection as reported by
   * the financial institution. Due to some quirks with the data held in bank systems, it is
   * possible in rare cases that company details are returned instead of an individual
   * person's. This can happen for small business bank accounts where a single shared login
   * is set up for the company (rather than a proper company setup where staff have separate
   * logins).
   *
   * @summary [Enduring access] Get User Identity Data
   * @throws FetchError<400, types.GetPartiesResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetPartiesResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetPartiesResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetPartiesResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getParties(metadata: types.GetPartiesMetadataParam): Promise<FetchResponse<200, types.GetPartiesResponse200>> {
    return this.core.fetch('/parties', 'get', metadata);
  }

  /**
   * Get a list of the payments that your application has initiated on behalf of the user
   * within the `start` and `end` time range.
   *
   * >️ ℹ️ Time range defaults to the last 30 days.
   *
   * For more details about payments see:
   *   - [📖 Making a payment guide](/docs/making-a-payment)
   *   - [📚 Payment lifecycle guide](/docs/making-a-payment#payment-lifecycle)
   *   - [📚 Payment webhooks](/docs/reference-webhooks#payment)
   *
   * @summary Get Payments
   * @throws FetchError<400, types.GetPaymentsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetPaymentsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetPaymentsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetPaymentsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getPayments(metadata: types.GetPaymentsMetadataParam): Promise<FetchResponse<200, types.GetPaymentsResponse200>> {
    return this.core.fetch('/payments', 'get', metadata);
  }

  /**
   * Initiate a payment from the user's connected bank account to another New Zealand bank
   * account.
   *
   * The payee bank account is not required to be connected to Akahu.
   *
   * For more details about payments see:
   *   - [📚 Making a payment guide](/docs/making-a-payment)
   *   - [📚 Payment lifecycle guide](/docs/making-a-payment#payment-lifecycle)
   *   - [📖 Payment webhooks](/docs/reference-webhooks#payment)
   *
   * @summary Make a Payment
   * @throws FetchError<400, types.PostPaymentsResponse400> Your request was malformed or otherwise unacceptable. The `message` key in the response
   * will give more details.
   * @throws FetchError<401, types.PostPaymentsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostPaymentsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostPaymentsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postPayments(body: types.PostPaymentsBodyParam, metadata: types.PostPaymentsMetadataParam): Promise<FetchResponse<200, types.PostPaymentsResponse200>> {
    return this.core.fetch('/payments', 'post', body, metadata);
  }

  /**
   * Initiate a tax payment from user's connected bank account to [🔗 Inland Revenue
   * Department](https://www.ird.govt.nz/).
   *
   * For more details about payments see:
   *   - [📚 Making a payment guide](/docs/making-a-payment)
   *   - [📚 Payment lifecycle guide](/docs/making-a-payment#payment-lifecycle)
   *   - [📖 Payment webhooks](/docs/reference-webhooks#payment)
   *
   * @summary Make a Payment to IRD
   * @throws FetchError<400, types.PostPaymentsIrdResponse400> Your request was malformed or otherwise unacceptable. The `message` key in the response
   * will give more details.
   * @throws FetchError<401, types.PostPaymentsIrdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostPaymentsIrdResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostPaymentsIrdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postPaymentsIrd(body: types.PostPaymentsIrdBodyParam, metadata: types.PostPaymentsIrdMetadataParam): Promise<FetchResponse<200, types.PostPaymentsIrdResponse200>> {
    return this.core.fetch('/payments/ird', 'post', body, metadata);
  }

  /**
   * Get an individual payment that your application has initiated on behalf of the user.
   *
   * For more details about payments see:
   *   - [📖 Making a payment guide](/docs/making-a-payment)
   *   - [📚 Payment lifecycle guide](/docs/making-a-payment#payment-lifecycle)
   *   - [📚 Payment webhooks](/docs/reference-webhooks#payment)
   *
   * @summary Get a Payment
   * @throws FetchError<400, types.GetPaymentsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetPaymentsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetPaymentsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetPaymentsIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetPaymentsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getPaymentsId(metadata: types.GetPaymentsIdMetadataParam): Promise<FetchResponse<200, types.GetPaymentsIdResponse200>> {
    return this.core.fetch('/payments/{id}', 'get', metadata);
  }

  /**
   * This endpoint cancels a user's payment that is in the `PENDING_APPROVAL` state.
   *
   * For more details about payments see:
   *   - [📚 Payment lifecycle guide](/docs/making-a-payment#payment-lifecycle)
   *   - [📚 Payment webhooks](/docs/reference-webhooks#payment)
   *   - [📖 Making a payment guide](/docs/making-a-payment)
   *
   * @summary Cancel a Payment
   * @throws FetchError<400, types.PutPaymentsIdCancelResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PutPaymentsIdCancelResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PutPaymentsIdCancelResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.PutPaymentsIdCancelResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.PutPaymentsIdCancelResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  putPaymentsIdCancel(metadata: types.PutPaymentsIdCancelMetadataParam): Promise<FetchResponse<200, types.PutPaymentsIdCancelResponse200>> {
    return this.core.fetch('/payments/{id}/cancel', 'put', metadata);
  }

  /**
   * Get a list of the user's transactions within the `start` and `end` time range.
   *
   * This endpoint returns **settled** transactions for all accounts that the user has
   * connected to your application. See [`GET
   * /transactions/pending`](/reference/get_transactions-pending) to also query **pending**
   * transactions.
   *
   * >️ ℹ️ Time range defaults to the entire range [accessible to your
   * app](/docs/accessing-transactional-data#getting-a-date-range).
   *
   * Some important things to know when querying transactions:
   * - Transactions will look different depending on your app's permissions.
   * - All transactions timestamps are in **UTC**.
   * - The `start` query parameter is **exclusive**.
   * - The `end` query parameter is **inclusive**.
   * - All Akahu timestamps use **millisecond** resolution (i.e. `2025-01-01T11:59:59.999Z`
   * is the instant before `2025-01-01T12:00:00.000Z`).
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📚 Pagination guide](/docs/accessing-transactional-data#pagination)
   * - [📖 Transaction model](/docs/the-transaction-model)
   * - [📖 Transaction webhooks](/docs/reference-webhooks#transaction)
   *
   * @summary Get Transactions
   * @throws FetchError<400, types.GetTransactionsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetTransactionsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetTransactionsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetTransactionsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getTransactions(metadata: types.GetTransactionsMetadataParam): Promise<FetchResponse<200, types.GetTransactionsResponse200>> {
    return this.core.fetch('/transactions', 'get', metadata);
  }

  /**
   * Get a list of pending transactions from a user's connected accounts.
   *
   * This endpoint returns pending transactions from all of a user's accounts that the user
   * has connected to your application.
   *
   * Pending transactions are not stable (eg. the date or description may change) due to the
   * unreliable nature of the underlying NZ bank data.
   *
   * >️ ℹ️ You can tell when we last fetched a transaction by looking at it's `updated_at`
   * key.
   *
   * - All transactions timestamps are in **UTC**.
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📚 Pending transactions
   * guide](/docs/accessing-transactional-data#pending-transactions)
   * - [📖 Transaction model](/docs/the-transaction-model)
   *
   * @summary Get Pending Transactions
   * @throws FetchError<400, types.GetTransactionsPendingResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetTransactionsPendingResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetTransactionsPendingResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetTransactionsPendingResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getTransactionsPending(metadata: types.GetTransactionsPendingMetadataParam): Promise<FetchResponse<200, types.GetTransactionsPendingResponse200>> {
    return this.core.fetch('/transactions/pending', 'get', metadata);
  }

  /**
   * Get a single transaction from one of the user's connected accounts.
   *
   * - Transactions will look different depending on your app's permissions.
   * - All times on the transaction are in **UTC**.
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📖 Transaction model](/docs/the-transaction-model)
   * - [📖 Transaction webhooks](/docs/reference-webhooks#transaction)
   *
   * @summary Get a Transaction by ID
   * @throws FetchError<400, types.GetTransactionsIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetTransactionsIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetTransactionsIdResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetTransactionsIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getTransactionsId(metadata: types.GetTransactionsIdMetadataParam): Promise<FetchResponse<200, types.GetTransactionsIdResponse200>> {
    return this.core.fetch('/transactions/{id}', 'get', metadata);
  }

  /**
   * Get a list of the user's transactions for a specific connected account within the
   * `start` and `end` time range.
   *
   * This endpoint returns **settled** transactions. See [`GET
   * /accounts/{id}/transactions/pending`](/reference/get_accounts-id-transactions) to also
   * query **pending** transactions for the account.
   *
   * >️ ℹ️ Time range defaults to the entire range [accessible to your
   * app](/docs/accessing-transactional-data#getting-a-date-range).
   *
   * Some important things to know when querying transactions:
   * - Transactions will look different depending on your app's permissions.
   * - All transactions timestamps are in **UTC**.
   * - The `start` query parameter is **exclusive**.
   * - The `end` query parameter is **inclusive**.
   * - All Akahu timestamps use **millisecond** resolution (i.e. `2025-01-01T11:59:59.999Z`
   * is the instant before `2025-01-01T12:00:00.000Z`).
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📚 Pagination guide](/docs/accessing-transactional-data#pagination)
   * - [📖 Transaction model](/docs/the-transaction-model)
   * - [📖 Transaction webhooks](/docs/reference-webhooks#transaction)
   *
   * @summary Get Transactions By Account
   * @throws FetchError<400, types.GetAccountsIdTransactionsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetAccountsIdTransactionsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetAccountsIdTransactionsResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetAccountsIdTransactionsResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetAccountsIdTransactionsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getAccountsIdTransactions(metadata: types.GetAccountsIdTransactionsMetadataParam): Promise<FetchResponse<200, types.GetAccountsIdTransactionsResponse200>> {
    return this.core.fetch('/accounts/{id}/transactions', 'get', metadata);
  }

  /**
   * Get a list of the user's pending transactions for a specific connected account.
   *
   * Pending transactions are not stable (eg. the date or description may change) due to the
   * unreliable nature of the underlying NZ bank data.
   *
   * >️ ℹ️ You can tell when we last fetched a transaction by looking at it's `updated_at`
   * key.
   *
   * - All transactions timestamps are in **UTC**.
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📚 Pending transactions
   * guide](/docs/accessing-transactional-data#pending-transactions)
   * - [📖 Transaction model](/docs/the-transaction-model)
   *
   * @summary Get Pending Transactions By Account
   * @throws FetchError<400, types.GetAccountsIdTransactionsPendingResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetAccountsIdTransactionsPendingResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetAccountsIdTransactionsPendingResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetAccountsIdTransactionsPendingResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetAccountsIdTransactionsPendingResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getAccountsIdTransactionsPending(metadata: types.GetAccountsIdTransactionsPendingMetadataParam): Promise<FetchResponse<200, types.GetAccountsIdTransactionsPendingResponse200>> {
    return this.core.fetch('/accounts/{id}/transactions/pending', 'get', metadata);
  }

  /**
   * Gets a list of the user's transactions that match the provided list of Akahu transaction
   * identifiers.
   *
   * The intended use for this endpoint is to assist in [📖 transaction
   * webhooks](/docs/reference-webhooks#transaction).
   * When a webhook arrives it contains a list of changed transaction identifiers, which you
   * can simply pass unchanged to this endpoint to retrieve the full transactions.
   *
   * This endpoint is unusual, in that it is really a `GET`, dressed up as a `POST`.
   * The reason we do this is to avoid having to put all of the IDs in query parameters,
   * which could potentially come up against maximum URL length constraints.
   *
   * - Transactions will look different depending on your app's permissions.
   * - All times on the transaction are in **UTC**.
   *
   * For more details see:
   * - [📚 Accessing transactional data guide](/docs/accessing-transactional-data)
   * - [📖 Transaction model](/docs/the-transaction-model)
   * - [📖 Transaction webhooks](/docs/reference-webhooks#transaction)
   *
   * @summary Get Transactions By Ids
   * @throws FetchError<400, types.PostTransactionsIdsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostTransactionsIdsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostTransactionsIdsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostTransactionsIdsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postTransactionsIds(body: types.PostTransactionsIdsBodyParam, metadata: types.PostTransactionsIdsMetadataParam): Promise<FetchResponse<200, types.PostTransactionsIdsResponse200>> {
    return this.core.fetch('/transactions/ids', 'post', body, metadata);
  }

  /**
   * Get a list of the money transfers that your application has initiated between the user's
   * connected accounts within the `start` and `end` time range.
   *
   * >️ ℹ️ Time range defaults to the last 30 days.
   *
   * For more details about transfers see:
   *   - [📚 Making a Transfer guide](/docs/making-a-transfer)
   *   - [📖 Transfer webhook events](/docs/reference-webhooks#transfer)
   *
   * @summary Get Transfers
   * @throws FetchError<400, types.GetTransfersResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetTransfersResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetTransfersResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetTransfersResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getTransfers(metadata: types.GetTransfersMetadataParam): Promise<FetchResponse<200, types.GetTransfersResponse200>> {
    return this.core.fetch('/transfers', 'get', metadata);
  }

  /**
   * Initiate a transfer between two of the user's connected accounts.
   *
   * For more details see:
   *   - [📚 Making a Transfer guide](/docs/making-a-transfer)
   *   - [📖 Transfer webhook events](/docs/reference-webhooks#transfer)
   *
   * @summary Make a Transfer
   * @throws FetchError<400, types.PostTransfersResponse400> Your request was malformed or otherwise unacceptable. The `message` key in the response
   * will give more details.
   * @throws FetchError<401, types.PostTransfersResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostTransfersResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostTransfersResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postTransfers(body: types.PostTransfersBodyParam, metadata: types.PostTransfersMetadataParam): Promise<FetchResponse<200, types.PostTransfersResponse200>> {
    return this.core.fetch('/transfers', 'post', body, metadata);
  }

  /**
   * Get the record of an individual money transfer that your application has initiated
   * between two of the user's connected accounts.
   *
   * For more details about transfers see:
   *   - [📚 Making a Transfer guide](/docs/making-a-transfer)
   *   - [📖 Transfer webhook events](/docs/reference-webhooks#transfer)
   *
   * @summary Get a Transfer
   * @throws FetchError<400, types.GetTransfersIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetTransfersIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetTransfersIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetTransfersIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetTransfersIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getTransfersId(metadata: types.GetTransfersIdMetadataParam): Promise<FetchResponse<200, types.GetTransfersIdResponse200>> {
    return this.core.fetch('/transfers/{id}', 'get', metadata);
  }

  /**
   * Get information about the Akahu user and the access they have provided.
   *
   * > ℹ️
   * >
   * > The `email` and `mobile` keys will be visible if you have the required permissions.
   *
   * @summary Get Current User
   * @throws FetchError<400, types.GetMeResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetMeResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetMeResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetMeResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getMe(metadata: types.GetMeMetadataParam): Promise<FetchResponse<200, types.GetMeResponse200>> {
    return this.core.fetch('/me', 'get', metadata);
  }

  /**
   * Gets the active webhook subscriptions that your app has created for the user.
   *
   * For more details about webhooks see:
   *   - [📖 Webhooks reference](/docs/reference-webhooks)
   *   - [📖 Webhooks events](/reference-webhooks#token)
   *
   * @summary Get All Webhooks
   * @throws FetchError<400, types.GetWebhooksResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetWebhooksResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetWebhooksResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetWebhooksResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getWebhooks(metadata: types.GetWebhooksMetadataParam): Promise<FetchResponse<200, types.GetWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'get', metadata);
  }

  /**
   * > ℹ️
   * >
   * > Akahu's webhooks are unusual in that they need to be initialised **per user**,
   * requiring a new webhook subscription for each event type you wish to receive for each
   * user.
   *
   * Register a new webhook subscription for the user, allowing your application to receive
   * events on the following webhook types:
   *
   *   - `TOKEN`
   *   - `ACCOUNT`
   *   - `TRANSACTION`
   *   - `PAYMENT`
   *   - `TRANSFER`
   *
   * > ℹ️
   * >
   * > It is a good idea to use the `state` field to store a unique identifier related to
   * your end user, allowing you to determine on an arrival of a webhook event which user of
   * your application needs to be updated or notified.
   *
   *
   * For more details about webhooks see:
   *   - [📖 Webhooks reference](/docs/reference-webhooks)
   *   - [📖 Webhooks events](/reference-webhooks#token)
   *
   * @summary Subscribe to Webhook
   * @throws FetchError<400, types.PostWebhooksResponse400> Your request was malformed or otherwise unacceptable. The `message` key in the response
   * will give more details.
   * @throws FetchError<401, types.PostWebhooksResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostWebhooksResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostWebhooksResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postWebhooks(body: types.PostWebhooksBodyParam, metadata: types.PostWebhooksMetadataParam): Promise<FetchResponse<200, types.PostWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'post', body, metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Get one of the public keys that Akahu uses to sign webhooks.
   *
   * @summary Get Public Key
   * @throws FetchError<400, types.GetKeysIdResponse400> Your request was malformed or otherwise unacceptable. The `message` key in the response
   * will give more details.
   * @throws FetchError<401, types.GetKeysIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetKeysIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.GetKeysIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.GetKeysIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getKeysId(metadata: types.GetKeysIdMetadataParam): Promise<FetchResponse<200, types.GetKeysIdResponse200>> {
    return this.core.fetch('/keys/{id}', 'get', metadata);
  }

  /**
   * Delete a webhook subscription that your application has previously created for the user.
   *
   * For more details about webhooks see:
   *   - [📖 Webhooks reference](/docs/reference-webhooks)
   *   - [📖 Webhooks events](/reference-webhooks#token)
   *
   * @summary Unsubscribe from Webhook
   * @throws FetchError<400, types.DeleteWebhooksIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.DeleteWebhooksIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.DeleteWebhooksIdResponse403> You are not allowed to access this content.
   * @throws FetchError<404, types.DeleteWebhooksIdResponse404> The item you are trying to access doesn't exist.
   * @throws FetchError<500, types.DeleteWebhooksIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  deleteWebhooksId(metadata: types.DeleteWebhooksIdMetadataParam): Promise<FetchResponse<200, types.DeleteWebhooksIdResponse200>> {
    return this.core.fetch('/webhooks/{id}', 'delete', metadata);
  }

  /**
   * > ⚠️
   * >
   * > **Authentication**
   * > This endpoint requires
   * [app-scoped](/reference/api-akahu-io-authentication#app-scoped-endpoints)
   * authentication.
   *
   * Returns a list of webhook events that have been published to your application by Akahu
   * within the `start` and `end` time range.
   *
   * >️ ℹ️ Time range defaults to the last 30 days.
   *
   * For more details about webhooks see:
   *   - [📖 Webhooks reference](/docs/reference-webhooks)
   *   - [📖 Webhooks events](/reference-webhooks#token)
   *
   * @summary Get Webhook Events
   * @throws FetchError<400, types.GetWebhookEventsResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.GetWebhookEventsResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.GetWebhookEventsResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.GetWebhookEventsResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  getWebhookEvents(metadata: types.GetWebhookEventsMetadataParam): Promise<FetchResponse<200, types.GetWebhookEventsResponse200>> {
    return this.core.fetch('/webhook-events', 'get', metadata);
  }

  /**
   * Let us know when we get something wrong 🙏.
   * The request body should match the type of request you are making:
   *
   * ### Notify Us Of A Duplicate ###
   *
   * | Parameter  | Example                             | Description                        
   *                                                    |
   * |:-----------|:------------------------------------|:---------------------------------------------------------------------------------------|
   * | `type`     | `"DUPLICATE"`                       | Let us know that two Akahu
   * transactions are actually the same transaction in the bank. |
   * | `other_id` | `"trans_1111111111111111111111111"` | The duplicate transaction ID.      
   *                                                    |
   *
   * ### Notify Us Of An Enrichment Error ###
   *
   * | Parameter  | Example                              | Description                       
   *                    |
   * |:-----------|:-------------------------------------|:------------------------------------------------------|
   * | `type`     | `"ENRICHMENT_ERROR"`                 | Let us know when we get something
   * wrong.              |
   * | `fields`   | `[ "merchant.name"]`                 | A list of dot-separated paths to
   * the incorrect values |
   * | `comment`  | `"X should be Y"`                    | Additional info you want to
   * include.                  |
   *
   * ### Suggest An Improvement To Enrichment Data ###
   *
   * | Parameter  | Example                        | Description                             
   *                                                              |
   * |:-----------|:-------------------------------|:------------------------------------------------------------------------------------------------------|
   * | `type`     | `"ENRICHMENT_SUGGESTION"`      | Let us know about further enrichment
   * that can be applied to this transaction transaction in the bank. |
   * | `comment`  | `"Can you please add X to Y?"` | The enrichment information you want to
   * tell us about.                                                 |
   *
   * @summary Transaction Support
   * @throws FetchError<400, types.PostSupportTransactionIdResponse400> Your request was malformed or otherwise unacceptable. More details are provided under
   * the `message` key in the response.
   * @throws FetchError<401, types.PostSupportTransactionIdResponse401> You are not authorised to access this content.
   * @throws FetchError<403, types.PostSupportTransactionIdResponse403> You are not allowed to access this content.
   * @throws FetchError<500, types.PostSupportTransactionIdResponse500> An internal error has prevented us from processing the request. More detail may be
   * supplied in the `message` key.
   */
  postSupportTransaction_id(body: types.PostSupportTransactionIdBodyParam, metadata: types.PostSupportTransactionIdMetadataParam): Promise<FetchResponse<200, types.PostSupportTransactionIdResponse200>> {
    return this.core.fetch('/support/{transaction_id}', 'post', body, metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { DeleteAccountsIdMetadataParam, DeleteAccountsIdResponse200, DeleteAccountsIdResponse400, DeleteAccountsIdResponse401, DeleteAccountsIdResponse403, DeleteAccountsIdResponse404, DeleteAccountsIdResponse500, DeleteAuthorisationsIdMetadataParam, DeleteAuthorisationsIdResponse200, DeleteAuthorisationsIdResponse400, DeleteAuthorisationsIdResponse401, DeleteAuthorisationsIdResponse403, DeleteAuthorisationsIdResponse404, DeleteAuthorisationsIdResponse500, DeleteTokenMetadataParam, DeleteTokenResponse200, DeleteTokenResponse400, DeleteTokenResponse401, DeleteTokenResponse403, DeleteTokenResponse500, DeleteWebhooksIdMetadataParam, DeleteWebhooksIdResponse200, DeleteWebhooksIdResponse400, DeleteWebhooksIdResponse401, DeleteWebhooksIdResponse403, DeleteWebhooksIdResponse404, DeleteWebhooksIdResponse500, GetAccountsIdMetadataParam, GetAccountsIdResponse200, GetAccountsIdResponse400, GetAccountsIdResponse401, GetAccountsIdResponse403, GetAccountsIdResponse404, GetAccountsIdResponse500, GetAccountsIdTransactionsMetadataParam, GetAccountsIdTransactionsPendingMetadataParam, GetAccountsIdTransactionsPendingResponse200, GetAccountsIdTransactionsPendingResponse400, GetAccountsIdTransactionsPendingResponse401, GetAccountsIdTransactionsPendingResponse403, GetAccountsIdTransactionsPendingResponse404, GetAccountsIdTransactionsPendingResponse500, GetAccountsIdTransactionsResponse200, GetAccountsIdTransactionsResponse400, GetAccountsIdTransactionsResponse401, GetAccountsIdTransactionsResponse403, GetAccountsIdTransactionsResponse404, GetAccountsIdTransactionsResponse500, GetAccountsMetadataParam, GetAccountsResponse200, GetAccountsResponse400, GetAccountsResponse401, GetAccountsResponse403, GetAccountsResponse500, GetCategoriesIdMetadataParam, GetCategoriesIdResponse200, GetCategoriesIdResponse400, GetCategoriesIdResponse401, GetCategoriesIdResponse403, GetCategoriesIdResponse404, GetCategoriesIdResponse500, GetCategoriesResponse200, GetCategoriesResponse400, GetCategoriesResponse401, GetCategoriesResponse403, GetCategoriesResponse500, GetConnectionsIdMetadataParam, GetConnectionsIdResponse200, GetConnectionsIdResponse400, GetConnectionsIdResponse401, GetConnectionsIdResponse403, GetConnectionsIdResponse404, GetConnectionsIdResponse500, GetConnectionsResponse200, GetConnectionsResponse400, GetConnectionsResponse401, GetConnectionsResponse403, GetConnectionsResponse500, GetIdentityIdMetadataParam, GetIdentityIdResponse200, GetIdentityIdResponse400, GetIdentityIdResponse401, GetIdentityIdResponse403, GetIdentityIdResponse404, GetIdentityIdResponse500, GetKeysIdMetadataParam, GetKeysIdResponse200, GetKeysIdResponse400, GetKeysIdResponse401, GetKeysIdResponse403, GetKeysIdResponse404, GetKeysIdResponse500, GetMeMetadataParam, GetMeResponse200, GetMeResponse400, GetMeResponse401, GetMeResponse403, GetMeResponse500, GetPartiesMetadataParam, GetPartiesResponse200, GetPartiesResponse400, GetPartiesResponse401, GetPartiesResponse403, GetPartiesResponse500, GetPaymentsIdMetadataParam, GetPaymentsIdResponse200, GetPaymentsIdResponse400, GetPaymentsIdResponse401, GetPaymentsIdResponse403, GetPaymentsIdResponse404, GetPaymentsIdResponse500, GetPaymentsMetadataParam, GetPaymentsResponse200, GetPaymentsResponse400, GetPaymentsResponse401, GetPaymentsResponse403, GetPaymentsResponse500, GetTransactionsIdMetadataParam, GetTransactionsIdResponse200, GetTransactionsIdResponse400, GetTransactionsIdResponse401, GetTransactionsIdResponse403, GetTransactionsIdResponse500, GetTransactionsMetadataParam, GetTransactionsPendingMetadataParam, GetTransactionsPendingResponse200, GetTransactionsPendingResponse400, GetTransactionsPendingResponse401, GetTransactionsPendingResponse403, GetTransactionsPendingResponse500, GetTransactionsResponse200, GetTransactionsResponse400, GetTransactionsResponse401, GetTransactionsResponse403, GetTransactionsResponse500, GetTransfersIdMetadataParam, GetTransfersIdResponse200, GetTransfersIdResponse400, GetTransfersIdResponse401, GetTransfersIdResponse403, GetTransfersIdResponse404, GetTransfersIdResponse500, GetTransfersMetadataParam, GetTransfersResponse200, GetTransfersResponse400, GetTransfersResponse401, GetTransfersResponse403, GetTransfersResponse500, GetWebhookEventsMetadataParam, GetWebhookEventsResponse200, GetWebhookEventsResponse400, GetWebhookEventsResponse401, GetWebhookEventsResponse403, GetWebhookEventsResponse500, GetWebhooksMetadataParam, GetWebhooksResponse200, GetWebhooksResponse400, GetWebhooksResponse401, GetWebhooksResponse403, GetWebhooksResponse500, PostIdentityIdVerifyNameBodyParam, PostIdentityIdVerifyNameMetadataParam, PostIdentityIdVerifyNameResponse200, PostIdentityIdVerifyNameResponse400, PostIdentityIdVerifyNameResponse401, PostIdentityIdVerifyNameResponse403, PostIdentityIdVerifyNameResponse404, PostIdentityIdVerifyNameResponse500, PostPaymentsBodyParam, PostPaymentsIrdBodyParam, PostPaymentsIrdMetadataParam, PostPaymentsIrdResponse200, PostPaymentsIrdResponse400, PostPaymentsIrdResponse401, PostPaymentsIrdResponse403, PostPaymentsIrdResponse500, PostPaymentsMetadataParam, PostPaymentsResponse200, PostPaymentsResponse400, PostPaymentsResponse401, PostPaymentsResponse403, PostPaymentsResponse500, PostRefreshIdMetadataParam, PostRefreshIdResponse200, PostRefreshIdResponse400, PostRefreshIdResponse401, PostRefreshIdResponse403, PostRefreshIdResponse404, PostRefreshIdResponse429, PostRefreshIdResponse500, PostRefreshMetadataParam, PostRefreshResponse200, PostRefreshResponse400, PostRefreshResponse401, PostRefreshResponse403, PostRefreshResponse429, PostRefreshResponse500, PostSupportTransactionIdBodyParam, PostSupportTransactionIdMetadataParam, PostSupportTransactionIdResponse200, PostSupportTransactionIdResponse400, PostSupportTransactionIdResponse401, PostSupportTransactionIdResponse403, PostSupportTransactionIdResponse500, PostTokenBodyParam, PostTokenResponse200, PostTokenResponse400, PostTokenResponse500, PostTransactionsIdsBodyParam, PostTransactionsIdsMetadataParam, PostTransactionsIdsResponse200, PostTransactionsIdsResponse400, PostTransactionsIdsResponse401, PostTransactionsIdsResponse403, PostTransactionsIdsResponse500, PostTransfersBodyParam, PostTransfersMetadataParam, PostTransfersResponse200, PostTransfersResponse400, PostTransfersResponse401, PostTransfersResponse403, PostTransfersResponse500, PostVerifyNameBodyParam, PostVerifyNameIdBodyParam, PostVerifyNameIdMetadataParam, PostVerifyNameIdResponse200, PostVerifyNameIdResponse400, PostVerifyNameIdResponse401, PostVerifyNameIdResponse403, PostVerifyNameIdResponse404, PostVerifyNameIdResponse500, PostVerifyNameMetadataParam, PostVerifyNameResponse200, PostVerifyNameResponse400, PostVerifyNameResponse401, PostVerifyNameResponse403, PostVerifyNameResponse404, PostVerifyNameResponse500, PostWebhooksBodyParam, PostWebhooksMetadataParam, PostWebhooksResponse200, PostWebhooksResponse400, PostWebhooksResponse401, PostWebhooksResponse403, PostWebhooksResponse500, PutPaymentsIdCancelMetadataParam, PutPaymentsIdCancelResponse200, PutPaymentsIdCancelResponse400, PutPaymentsIdCancelResponse401, PutPaymentsIdCancelResponse403, PutPaymentsIdCancelResponse404, PutPaymentsIdCancelResponse500 } from './types';
