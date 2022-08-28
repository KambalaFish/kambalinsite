/*
https://stackoverflow.com/a/53981706/13500204
*/

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLOUD_NAME: string;
      NEXT_PUBLIC_RAINDROP_AUTH_TOKEN: string;
      RAINDROP_COLLECTION_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
