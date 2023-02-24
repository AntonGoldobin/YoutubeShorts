import 'express';


// **** Declaration Merging **** //

declare module 'express' {
  export * from '@types/express'
  export interface Request {
    signedCookies: Record<string, string>;
  }
}
