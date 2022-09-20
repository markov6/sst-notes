const config = {
  SENTRY_DSN:
    "https://1c4956278ab340c0851b55eb9795e99d@o1419148.ingest.sentry.io/6762899",
  //Backend config

  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },

  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_HvjM1DUYQgvX0FrzPCwk11KJ00622k7x3F",
};

export default config;