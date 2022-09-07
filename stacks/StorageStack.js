import { Table, Bucket } from "@serverless-stack/resources"

export function StorageStack({ stack, app }) {
  //Create an S3 bucket 
  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        max10age: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["PUT", "POST", "DELETE", "GET", "HEAD"],
      },
    ],
  });
  //Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket
  }
}