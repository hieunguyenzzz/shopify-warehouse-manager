"use client"
import { GetInventoryProductsQuery, GetLocationsQuery } from "@/__generated__/graphql";
import { flatten } from "@/utils/flatten";
import type { PaginationProps } from '@shopify/polaris';
import { ActionList, Box, Button, Card, Page, Popover } from "@shopify/polaris";
import { useRouter } from "next/navigation";
import { useCallback, useState } from 'react';
import DefaultTable from "./common/DefaultTable";
export type TransfersTableProps = {
  location: GetInventoryProductsQuery['location'],
  locations: GetLocationsQuery['locations'],
  extendEntites: {
    [key: string]: {
      status: 'any' | 'Incoming'
    }
  }
  pagination: PaginationProps
}

export default function Inventory(props: TransfersTableProps) {
  return (
    <Page fullWidth title={"Inventory"} primaryAction={{
      content: 'Add transfer',
      onAction: () => console.log('clicked'),
    }}
    >
      <Box paddingBlockEnd={'300'}>
        <PopoverWithLocations {...props} />
      </Box>
      <Card padding={"0"}>
        <DefaultTable {...{
          extendEntites: props.extendEntites,
          lineItems: props.location?.inventoryItems?.map(flatten) || [],
          pagination: props.pagination,
          columns: [
            {
              id: 'product.name',
              title: 'Product name'
            },
            {
              id: 'product.sku',
              title: 'Product Sku'
            },
            {
              id: 'remaining_qty',
              title: 'Remaining qty'
            },
            {
              id: 'qty',
              title: 'Qty'
            },

          ]
        }} />
      </Card>
    </Page>
  );
}

function PopoverWithLocations({
  locations,
  location
}: TransfersTableProps) {
  const [popoverActive, setPopoverActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );
  const activator = (
    <Button disabled={loading} loading={loading} onClick={togglePopoverActive} disclosure size="large">
      Location: {location?.name || "All locations"}
    </Button >
  );
  let items = locations?.map(location => ({
    content: location.name + '',
    onAction: () => {
      setLoading(true)
      router.push(`/inventory/${location.id}`)
    }
  }))
  const router = useRouter()
  if (loading) return <Button loading={loading}></Button>
  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      onClose={togglePopoverActive}
    >
      <ActionList
        actionRole="menuitem"
        items={
          items
        }
      />
    </Popover>
  );
}