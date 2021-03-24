import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://idsvr4.azurewebsites.net', // ADFS, KeyCloak, Okta, Auth0, Azrue AD

    redirectUri: window.location.origin + '/index.html',
    clientId: 'spa',

    responseType: 'code',
    scope: 'openid profile email offline_access api',
};