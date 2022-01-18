import * as path from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = path.join(__dirname, './*.gql');

export default typesArray;