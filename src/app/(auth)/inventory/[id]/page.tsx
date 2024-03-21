import Inventory from "@/components/inventory";
import Layout from "@/components/layout";
import { getPagination, getPaginationVariables } from "@/helpers/pagination";
import client from "@/model";
import { GET_INVENTORY_PRODUCTS, GET_LOCATIONS } from "../_const";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const {
    limit,
    page,
    variables
  } = getPaginationVariables({ searchParams })
  const { data: locationsRes } = await client.query({
    query: GET_LOCATIONS,
    variables: {

    }
  })
  let id = params.id || locationsRes.locations?.[0].id + ''
  const { data: inventoryRes } = await client.query({
    query: GET_INVENTORY_PRODUCTS,
    variables: {
      ...variables,
      where: {
        id,
      }
    }
  })
  let location = inventoryRes.location
  let count = location?.inventoryItemsCount || 0
  let total = count
  let pagination = getPagination({
    limit,
    page,
    pathname: `/inventory/${id}`,
    searchParams,
    total
  })
  return (
    <Layout>
      <main className="">
        <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify({ locationsRes, inventoryRes }, null, 2) }} />
        <Inventory location={location} locations={locationsRes.locations} extendEntites={{}} pagination={pagination} />
      </main>
    </Layout>

  );
}
