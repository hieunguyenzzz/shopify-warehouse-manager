import client from "@/model";
import { redirect } from "next/navigation";
import { GET_LOCATIONS } from "./_const";
import DefaultTable from "@/components/common/DefaultTable";
import { flatten } from "@/utils/flatten";
import BaseLayout from "@/components/layout";

export default async function Page({
}: {
  }) {
  const { data: locationsRes } = await client.query({
    query: GET_LOCATIONS,
    variables: {

    }
  })
  let id = locationsRes.locations?.[0].id + ''
  return <BaseLayout>
    <main className="">
      <script type="json/data" id="transfers-data" dangerouslySetInnerHTML={{ __html: JSON.stringify({ locationsRes }, null, 2) }} />
      <DefaultTable
        tabs={[
          {
            id: 'locations',
            content: 'Locations',
            url: '/inventory',
            isLocked: true
          }
        ]}
        extendEntites={{}} columns={[
          {
            id: 'id',
            title: 'ID',
          },
          {
            id: 'name',
            title: 'Name',
          },
          {
            id: 'inventoryItemsCount',
            title: 'Inventory Items Count',
          }
        ]} lineItems={locationsRes.locations?.map(item => {
          return {
            ...item,
            url: `/inventory/${item.id}`
          }

        }).map(flatten) || []} pagination={{}} />
    </main>
  </BaseLayout>
}


