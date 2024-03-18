"use client"

import { GetContainerQuery } from "@/__generated__/graphql"
import { BlockStack, Box, Card, InlineStack, Page, ProgressBar, Text } from "@shopify/polaris"
import { BlockList } from "net"

export default function TransfersDetail({
  data: { container }
}: {
  data: GetContainerQuery
}) {
  if (!container) return <div>loading...</div>
  return (
    <Page title={"#" + container?.name} backAction={{
      content: 'Back',
      onAction: () => window.history.back()

    }}>
      <Card padding={"0"}
      >
        <InlineStack >
          <div className="flex-1">
            <Box padding={"600"}>
              <BlockStack gap={"300"}>
                <Text as="h3" variant="headingSm">Origin</Text>
                <Text as="p" variant="headingLg">{'In Manufacture'}</Text>
              </BlockStack>
            </Box>
          </div>
          <div className="flex-1">
            <Box padding={"600"} borderInlineStartWidth="0165" borderColor="border-secondary">
              <BlockStack gap={"300"}>
                <Text as="h3" variant="headingSm">Destination</Text>
                <div>
                  <Text as="p" variant="headingLg">{'Marone Warehouse'}</Text>
                  <p>Purfleet Industrial Park, South Ockendon, England</p>
                </div>
              </BlockStack>
            </Box>
          </div>
        </InlineStack>
        <Box padding={"600"} borderBlockStartWidth="0165" borderColor="border-secondary">
          <BlockStack gap={"100"} align="end">
            <ProgressBar progress={40} size="small" />
            <Text as="p" alignment="end">Total received:0 of {container?.inventoryItems?.length || 0}</Text>
          </BlockStack>
        </Box>
      </Card>
      <div>
        <h1>Container: {container.name}</h1>
        <h2>Due Date: {container.dueDate}</h2>
        <h2>Qty Due In: {container.qty_due_in}</h2>
        <h2>Inventory Items</h2>
        <ul>
          {container?.inventoryItems?.map((item, index) => (
            <li key={index}>
              <h3>Product: {item.product?.name}</h3>
              <h4>SKU: {item.product?.sku}</h4>
              <h4>Qty: {item.qty}</h4>
              <h4>Remaining Qty: {item.remaining_qty}</h4>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  )
}