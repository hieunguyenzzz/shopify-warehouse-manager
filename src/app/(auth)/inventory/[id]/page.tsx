import Inventory from "@/components/inventory";
import Layout from "@/components/layout";
import client from "@/model";
import { PaginationProps } from "@shopify/polaris";
import { GET_INVENTORY_PRODUCTS, GET_LOCATIONS } from "../_const";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let limit = Number(searchParams.limit || 10)
  let page = Number(searchParams.page || 1)
  let take = Number(limit)
  let skip = page > 1 ? (page - 1) * limit : 0
  const { data: locationsRes } = await client.query({
    query: GET_LOCATIONS,
    variables: {

    }
  })
  let id = params.id || locationsRes.locations?.[0].id + ''
  const { data: inventoryRes } = await client.query({
    query: GET_INVENTORY_PRODUCTS,
    variables: {
      take,
      skip,
      where: {
        id,
      }
    }
  })
  let location = inventoryRes.location
  let count = location?.inventoryItemsCount || 0
  let items = location?.inventoryItems
  let total = count
  let pagination: PaginationProps = {
    hasNext: total > limit * page,
    hasPrevious: page > 1,
    nextURL: `/inventory/${id}?${new URLSearchParams({
      ...searchParams,
      page: String(page + 1),
      limit: String(limit)
    }).toString()}`,
    previousURL: `/inventory/${id}?${new URLSearchParams({
      ...searchParams,
      page: String(page - 1),
      limit: String(limit)
    }).toString()}`,
  }
  return (
    <Layout>
      <main className="">
        <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify({ locationsRes, inventoryRes }, null, 2) }} />
        <Inventory location={location} locations={locationsRes.locations} extendEntites={{}} pagination={pagination} />
      </main>
    </Layout>

  );
}
