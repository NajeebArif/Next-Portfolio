
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: '<AUTH0_DOMAIN>',
  clientId: '<AUTH0_CLIENT_ID>',
  clientSecret: '<AUTH0_CLIENT_SECRET>',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: '<RANDOMLY_GENERATED_SECRET>'
  }
});