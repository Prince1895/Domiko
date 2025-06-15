// api.js
import serverlessExpress from '@vendia/serverless-express';
import app from './index.js'; // import your Express app

export const handler = serverlessExpress({ app });
