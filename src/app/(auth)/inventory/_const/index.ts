import { gql } from "@/__generated__";

export const GET_LOCATIONS = gql(/*GraphQL*/`
query getLocations {
  locations {
    id
    inventoryItemsCount
    name
  }
}
`);
export const GET_INVENTORY_PRODUCTS = gql(/*GraphQL*/`
query getInventoryProducts($take: Int, $skip: Int!, $where: LocationWhereUniqueInput!) {
  location(where: $where) {
    id
    name
    inventoryItemsCount
    inventoryItems(take: $take,skip: $skip) {
      id
      allocated_qty
      container {
        id
        name
      }
      qty
      remaining_qty
      eta
      product {
        category {
          name
        }
        cbm
        finish
        id
        sku
        supplierSku
        price
        name
      }
    }
  }
}
`);