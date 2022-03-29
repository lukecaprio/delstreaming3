// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Streaming } = initSchema(schema);

export {
  Streaming
};