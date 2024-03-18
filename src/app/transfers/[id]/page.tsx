import { gql } from "@/__generated__";
import Layout from "@/components/layout";
import TransfersDetail from "@/components/transfers-detail";
import client from "@/model";

export default async function Page({
  searchParams, params
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { data } = await client.query({
    query: GET_TRANSFER,
    variables: {
      where: {
        id: params.id
      }
    }
  })

  return (
    <Layout>
      <main className="">
        <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />
        <TransfersDetail data={data} />
      </main>
    </Layout>

  );
}
const GET_TRANSFER = gql(/*GraphQL*/`
  query getContainer($where: ContainerWhereUniqueInput!){
    container(where: $where) {
      id
      name
      qty_due_in
      dueDate
      inventoryItems {
        product {
          name
          sku
        }
        qty
        remaining_qty
      }
    }
  }
`);

