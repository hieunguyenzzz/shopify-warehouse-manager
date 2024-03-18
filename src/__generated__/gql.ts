/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getContainer($where: ContainerWhereUniqueInput!){\n    container(where: $where) {\n      id\n      name\n      qty_due_in\n      dueDate\n      inventoryItems {\n        product {\n          name\n          sku\n        }\n        qty\n        remaining_qty\n      }\n    }\n  }\n": types.GetContainerDocument,
    "\nquery getContainers($take: Int, $skip: Int!, $cursor: ContainerWhereUniqueInput, $where: ContainerWhereInput!) {\n  containersCount\n  containers(take: $take,skip: $skip,cursor: $cursor,where: $where) {\n    id\n    name\n    qty_due_in\n    dueDate\n    inventoryItems {\n      product {\n        name\n      }\n      qty\n      remaining_qty\n    }\n  }\n}\n": types.GetContainersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getContainer($where: ContainerWhereUniqueInput!){\n    container(where: $where) {\n      id\n      name\n      qty_due_in\n      dueDate\n      inventoryItems {\n        product {\n          name\n          sku\n        }\n        qty\n        remaining_qty\n      }\n    }\n  }\n"): (typeof documents)["\n  query getContainer($where: ContainerWhereUniqueInput!){\n    container(where: $where) {\n      id\n      name\n      qty_due_in\n      dueDate\n      inventoryItems {\n        product {\n          name\n          sku\n        }\n        qty\n        remaining_qty\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getContainers($take: Int, $skip: Int!, $cursor: ContainerWhereUniqueInput, $where: ContainerWhereInput!) {\n  containersCount\n  containers(take: $take,skip: $skip,cursor: $cursor,where: $where) {\n    id\n    name\n    qty_due_in\n    dueDate\n    inventoryItems {\n      product {\n        name\n      }\n      qty\n      remaining_qty\n    }\n  }\n}\n"): (typeof documents)["\nquery getContainers($take: Int, $skip: Int!, $cursor: ContainerWhereUniqueInput, $where: ContainerWhereInput!) {\n  containersCount\n  containers(take: $take,skip: $skip,cursor: $cursor,where: $where) {\n    id\n    name\n    qty_due_in\n    dueDate\n    inventoryItems {\n      product {\n        name\n      }\n      qty\n      remaining_qty\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;