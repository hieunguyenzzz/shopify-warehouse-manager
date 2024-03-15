import Transfers from "@/components/transfers";
import client, { gql } from "@/model";

export default async function Page() {
  const data = await client.query({
    query: GET_TRANSFERS,
    variables: {
      take: 10,
      skip: 0,
      cursor: null
    }
  })
  return (
    <main className="">
      <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />
      <Transfers />
    </main>
  );
}
const GET_TRANSFERS = gql`
query getContainers($take: Int, $skip: Int!, $cursor: ContainerWhereUniqueInput) {
  containersCount
  containers(take: $take,skip: $skip,cursor: $cursor) {
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
`;

