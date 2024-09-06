
require('dotenv').config();

export const schema = `http://${process.env.GQL_CODEGEN_HOST}:${process.env.GQL_CODEGEN_PORT}/graphql`;
export const baseTypesName = 'graph-ql.client.types.d.ts';
export const baseTypesRootPath = `shared/utils/graphql-client-schema/src/lib/__generated__`;
export const baseTypesPath = `${baseTypesRootPath}/${baseTypesName}`;
export const commonSchemaTypesPath = `libs/${baseTypesPath}`;
export const libsFolder = 'libs/';
