import { ReactStaticSite, use } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";
import { AuthStack } from "./AuthStack";

export function FrontendStack({ stack, app }) { 
  const { api } = use(ApiStack);
  const { auth } = use(AuthStack);
  const { bucket } = use(StorageStack);

  // Define our React app 
  const site = new ReactStaticSite(stack, "Site", {
    customDomain:
      app.stage === "prod"
        ? {
            domainName: "noinformation.net",
            domainAlias: "www.noinformation.net",
          }
        : undefined,
    path: "frontend",
    // Pass in our environment variables
    environment: {
      REACT_APP_API_URL: api.customDomainUrl || api.url,
      REACT_APP_REGION: app.region,
      REACT_APP_BUCKET: bucket.bucketName,
      REACT_APP_USER_POOL_ID: auth.userPoolId,
      REACT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId,
      REACT_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    },
  });

  stack.addOutputs({
    SiteUrl: site.customDomainUrl || site.url,
  });
}
