import { gql } from "@/__generated__";
import Layout from "@/components/layout";
import Transfers from "@/components/transfers";
import { getPagination, getPaginationVariables } from "@/helpers/pagination";
import client from "@/model";
import { PaginationProps } from "@shopify/polaris";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let status = searchParams.status
  const {
    limit,
    page,
    variables
  } = getPaginationVariables({ searchParams })
  let cursor = null
  const { data, error } = await client.query({
    query: GET_TRANSFERS,
    variables: {
      ...variables,
      where: status ? {
        dueDate: status === 'pending' ? {
          gt: new Date().toISOString().split('T')[0]
        } : status === 'received' ? {
          lte: new Date().toISOString().split('T')[0]
        } : null
      } : {},
      cursor
    }
  })
  let count = data.containersCount ? data.containersCount : 0
  let items = data.containers || []
  let total = count
  let pagination: PaginationProps = getPagination({
    limit,
    page,
    pathname: `/transfers`,
    searchParams,
    total
  })
  let extendEntites: {
    [key: string]: {
      status: any
    }
  } = {}
  let dateNow = Date.now()
  items.forEach((item) => {
    let dueDateTime = new Date(item.dueDate).getTime()
    extendEntites[String(item.id)] = {
      status: dueDateTime > dateNow ? 'pending' : 'received'
    }
  }
  )
  return (
    <Layout>
      <main className="">
        <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />
        <Transfers containerLineItems={items} extendEntites={extendEntites} pagination={pagination} />
      </main>
    </Layout>

  );
}
const GET_TRANSFERS = gql(/*GraphQL*/`
query getContainers($take: Int, $skip: Int!, $cursor: ContainerWhereUniqueInput, $where: ContainerWhereInput!) {
  containersCount
  containers(take: $take,skip: $skip,cursor: $cursor,where: $where) {
    id
    name
    qty_due_in
    dueDate
    inventoryItems {
      product {
        name
      }
      qty
      remaining_qty
    }
  }
}
`);

