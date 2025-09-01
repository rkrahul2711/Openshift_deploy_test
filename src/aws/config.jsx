const awsconfig = {
  aws_project_region: import.meta.env.VITE_AWS_REGION,
  aws_cognito_region: import.meta.env.VITE_AWS_REGION,
  aws_user_pools_id: import.meta.env.VITE_USER_POOL_ID,
  aws_user_pools_web_client_id: import.meta.env.VITE_USER_POOL_CLIENT_ID,
  oauth: {
    domain: import.meta.env.VITE_COGNITO_DOMAIN,
    scope: ['email', 'openid', 'profile', 'iris.apis/campaign'],
    redirectSignIn: import.meta.env.VITE_COGNITO_REDIRECT_SIGNIN,
    redirectSignOut:  import.meta.env.VITE_COGNITO_REDIRECT_SIGNOUT,
    responseType: 'code',
    auth0_identity_provider: 'Azure-SSO',
  },
};

export default awsconfig;