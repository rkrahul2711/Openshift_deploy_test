{/*import { Auth } from 'aws-amplify';
import axios from 'axios';
import { domoInstance } from '../services/axios';
import awsconfig from '../aws/config';
import { toast } from "sonner";
import {
  CognitoUserSession,
  CognitoAccessToken,
  CognitoIdToken,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js';
 
export const redirectToOAuth = async () => {
  const {
    oauth: { domain, scope, responseType, auth0_identity_provider, redirectSignIn },
    aws_user_pools_web_client_id,
  } = awsconfig;
 
  const url = new URL(
    `https://${domain}/oauth2/authorize?identity_provider=${auth0_identity_provider}&redirect_uri=${redirectSignIn}&response_type=${responseType.toUpperCase()}&client_id=${aws_user_pools_web_client_id}&scope=${scope.join(' ')}`
  );
 
  window.location.assign(url.toString());
};
 
export const getExpiration = async (setExpiration) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const { iat, exp } = user.signInUserSession.accessToken.payload;
    const expirationTime = ((exp - iat) - 30 * 60) * 1000;
    setExpiration(expirationTime);
  } catch (error) {
    if (error === 'The user is not authenticated') {
      console.log("Error getting expiration time", error);
      redirectToOAuth();
    }
  }
};
 
async function manualRefreshToken(clientId, refreshToken) {
  const customDomain = process.env.REACT_APP_COGNITO_DOMAIN;
  const url = `https://${customDomain}/oauth2/token`;
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: clientId,
    refresh_token: refreshToken,
  });
 
  console.log("Manual refresh token request to:", refreshToken);
 
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
 
  if (!response.ok) {
    console.error(`Refresh token request failed or expired with status ${response.status}`);
    redirectToOAuth();
  }
 
  return response.json(); // returns new tokens
}
 
export const checkUser = (setUser, caller) => {
  Auth.currentAuthenticatedUser()
    .then(async user => {
      if (user) {
        try {
          const session = user.signInUserSession;
          let jwtToken = session.getAccessToken().getJwtToken();
          const currentTime = Math.floor(Date.now() / 1000);
          const expiration = session.getAccessToken().getExpiration();
 
          if (caller === 'interval' || (caller === 'mount' && (expiration - currentTime) <= 30 * 60)) {
            console.log("Token Expired Calling Refresh");
 
            const clientId = process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID;
            const username = localStorage.getItem(`CognitoIdentityServiceProvider.${clientId}.LastAuthUser`);
            const key = `CognitoIdentityServiceProvider.${clientId}.${username}.refreshToken`;
            const refreshToken = localStorage.getItem(key);
 
            if (!refreshToken) {
              throw new Error('Refresh token not found in localStorage.');
            }
 
            const response = await manualRefreshToken(clientId, refreshToken);
            jwtToken = response.access_token;
            const idToken = response.id_token || session.getIdToken().getJwtToken();
 
            const newSession = new CognitoUserSession({
              IdToken: new CognitoIdToken({ IdToken: idToken }),
              AccessToken: new CognitoAccessToken({ AccessToken: jwtToken }),
              RefreshToken: new CognitoRefreshToken({ RefreshToken: refreshToken }),
            });
 
            user.setSignInUserSession(newSession);
 
            localStorage.setItem(`CognitoIdentityServiceProvider.${clientId}.${username}.accessToken`, jwtToken);
          }
 
          user.attributes = { email: user.username.slice(10) };
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
          domoInstance.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
          setUser({ ...user });
          toast.success("Successfully signed in!");
        } catch (error) {
          console.log("Unable to get the user");
          redirectToOAuth();
        }
      }
    })
    .catch(error => {
      console.log("Error getting current authenticated user", error);
      if (error === 'The user is not authenticated') {
        const email = localStorage.getItem("email");
        const isInformaUser = email?.endsWith("@informa.com");
        if (isInformaUser) {
          redirectToOAuth();
        } else {
          window.location.assign("/signin");
        }
      }
    });
};
 
export const logout = async () => {
  const {
    oauth: { domain, scope, responseType, redirectSignOut },
    aws_user_pools_web_client_id,
  } = awsconfig;
 
  try {
    const user = await Auth.currentAuthenticatedUser();
    const emailDomain = user.attributes?.email?.split('@')[1] || user.username?.split('@')[1];
 
    localStorage.removeItem('audienceApiCalled');
    const items = { ...localStorage };
 
    for (const a in items) {
      localStorage.removeItem('email');
      if (a.startsWith('CognitoIdentityServiceProvider') || a.includes('amplify')) {
        localStorage.removeItem(a);
        localStorage.removeItem('userLoggedForFirstTime');
      }
    }
 
    if (emailDomain === 'lilly.com') {
      const url = new URL(
        `https://${domain}/logout?response_type=${responseType}&client_id=${aws_user_pools_web_client_id}&redirect_uri=${redirectSignOut}&state=STATE&scope=${scope.join(' ')}`
      );
      window.location.assign(url.toString());
    } else {
      Auth.signOut();
    }
 
  } catch (error) {
    // Do nothing
  }
};
 
export const getSessionData = async () => {
  const sessionData = await Auth.currentSession();
  return sessionData;
};*/}
 