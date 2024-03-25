"use client"

import { GetContainerQuery } from "@/__generated__/graphql"
import { getTransferProcess } from "@/helpers"
import { Badge, BlockStack, Box, Button, Card, Form, IndexTable, InlineStack, Layout, Page, SkeletonThumbnail, Text, TextField } from "@shopify/polaris"
import { useEffect, useState } from "react"

export default function TransfersDetail({
  data: { container }
}: {
  data: GetContainerQuery
}) {
  if (!container) return <div>loading...</div>

  const {
    qty,
    received_qty: received,
    process
  } = getTransferProcess({
    inventoryItems: container.inventoryItems?.map(item => ({
      qty: Number(item.qty),
      remaining_qty: Number(item.remaining_qty)
    })) || []
  })
  return (
    <Page fullWidth title={"#" + container?.name} backAction={{
      content: 'Back',
      onAction: () => window.history.back()

    }}>
      <Layout >
        <Layout.Section>
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

          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card padding={"0"} >
            <Box padding={"600"}>
              <BlockStack gap={"300"}>
                <Text as="h3" variant="headingSm">Ordered products</Text>
              </BlockStack>
            </Box>
            <Box borderBlockStartWidth="0165" borderColor="border-secondary">
              <IndexTable
                resourceName={{
                  plural: 'products',
                  singular: 'product'
                }}
                itemCount={container.inventoryItems?.length || 0}
                selectable={false}
                headings={[
                  { title: 'Product' },
                  { title: 'SKU' },
                  { title: 'remaining qty' },
                  { title: 'qty' },
                ]}
              >
                {
                  container?.inventoryItems?.map((item, index) => (
                    <IndexTable.Row
                      id={item.product?.sku + ''}
                      key={item.product?.sku + ''}
                      position={index}
                    >
                      <IndexTable.Cell>
                        <InlineStack gap={"400"} blockAlign="center">
                          <SkeletonThumbnail size="small" />
                          <BlockStack>
                            <Text variant="bodyMd" as="span">
                              {item.product?.name}
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </IndexTable.Cell>
                      <IndexTable.Cell>{item.product?.sku}</IndexTable.Cell>
                      <IndexTable.Cell>{item.remaining_qty}</IndexTable.Cell>
                      <IndexTable.Cell>{item.qty}</IndexTable.Cell>
                    </IndexTable.Row>))
                }
              </IndexTable>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card padding={"0"}
          >
            <InlineStack >
              <div className="flex-1">
                <Box padding={"600"}>
                  <BlockStack gap={"300"} >
                    <Text as="h3" variant="headingSm">Shipment details</Text>
                    {
                      [["Estimated arrival",
                        "Feb 21, 2024",],
                      ["Shipping carrier",
                        "Other",],
                      ["Tracking number",
                        "None",]].map(([label, value], index) => {
                          return <BlockStack key={index} gap={"100"}>
                            <Text as="p" >{label}</Text>
                            <Text as="p" fontWeight="medium" variant="bodyMd">{value}</Text>
                          </BlockStack>
                        })
                    }
                  </BlockStack>
                </Box>
              </div>
              <div className="flex-1">
                <Box padding={"600"} borderInlineStartWidth="0165" borderColor="border-secondary">
                  <BlockStack gap={"300"}>
                    <Text as="h3" variant="headingSm">Additional details</Text>
                    {
                      [["Reference number",
                        "C277",],
                      ["Tags",
                        "None",],
                      ].map(([label, value], index) => {
                        return <BlockStack key={index} gap={"100"}>
                          <Text as="p" >{label}</Text>
                          <Text as="p" fontWeight="medium" variant="bodyMd">{value}</Text>
                        </BlockStack>
                      })
                    }
                  </BlockStack>
                </Box>
              </div>
            </InlineStack>
          </Card>
        </Layout.Section>
        <Layout.Section >
          <TimeLine id="" />
        </Layout.Section>
      </Layout>

    </Page>
  )
}

const TimeLine = ({ id }: { id: string }) => {
  let [update, setUpdate] = useState('');
  let [comments, setComments] = useState([]);
  let [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`/api/quote/comment/all`, {
      body: JSON.stringify({
        quoteId: id,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      })
      .then(() => {
        setComment("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [update]);
  return (
    <>
      <Box paddingInline={"600"} paddingBlock={"300"}>
        <Text as="h3" fontWeight="bold" variant="headingMd">
          Timeline
        </Text>
      </Box>
      <Card background="bg-surface-secondary">
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            if (comment.trim() === '') return;
            setLoading(true);
            fetch(`/api/quote/comment/create`, {
              body: JSON.stringify({
                quoteId: id,
                message: comment,
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                setComment("");
              })
              .then(() => {
                setComment("");
                setUpdate(Date.now() + "");
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <BlockStack gap={"400"}>
            <TextField
              label=""
              value={comment}
              onChange={setComment}
              placeholder="Leave a comment"
              multiline={4}
              autoComplete="off"
            />
            <InlineStack gap="300" align="space-between">
              <div></div>
              <Button submit loading={loading} variant="primary">
                Submit
              </Button>
            </InlineStack>
          </BlockStack>
        </Form>
      </Card>
      <Box padding={"600"}></Box>
      <BlockStack gap="600">
        {comments.map((comment: any,) => {
          return (
            <Box key={comment.id} >
              <div style={{ animation: '1s cubic-bezier(0.25, 0.1, 0.25, 1) 0s  normal both running var(--p-motion-keyframes-appear-below)' }}>
                <InlineStack>
                  <div style={{ width: "80px", position: "relative", }}>
                    <div
                      style={{
                        backgroundColor: "var(--p-color-border)",
                        border:
                          "var(--p-border-width-100) solid var(--p-color-border)",
                        borderRadius: "var(--p-border-radius-100)",
                        flexShrink: 0,
                        height: "var(--p-space-400)",
                        margin: "auto",
                        marginBottom: "var(--p-space-050)",
                        marginTop: "var(--p-space-050)",
                        outline:
                          "var(--p-border-width-100) solid var(--p-color-bg)",
                        width: "var(--p-space-400)",
                      }}
                    >
                      <div style={{ backgroundColor: 'var(--p-color-icon)', borderRadius: '0.1875rem', content: '', display: "block", height: "calc(var(--p-space-400)*.5)", width: "calc(var(--p-space-400)*.5)" }} />
                    </div>
                  </div>
                  <BlockStack gap={"200"}>
                    <Text as="span" variant="bodySm">
                      {new Date(comment.createdAt).toLocaleTimeString()} -{" "}
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </Text>
                    <Text as="span" fontWeight="bold">
                      {comment.message}
                    </Text>
                  </BlockStack>
                </InlineStack>
              </div>
            </Box>
          );
        })}
        <Box >
          <InlineStack>
            <div style={{ width: "80px", position: "relative" }}>
              <div
                style={{
                  backgroundColor: "var(--p-color-border)",
                  border:
                    "var(--p-border-width-100) solid var(--p-color-border)",
                  borderRadius: "var(--p-border-radius-100)",
                  flexShrink: 0,
                  height: "var(--p-space-400)",
                  margin: "auto",
                  marginBottom: "var(--p-space-050)",
                  marginTop: "var(--p-space-050)",
                  outline:
                    "var(--p-border-width-100) solid var(--p-color-bg)",
                  width: "var(--p-space-400)",
                }}
              >
                <div style={{ backgroundColor: 'var(--p-color-icon)', borderRadius: '0.1875rem', content: '', display: "block", height: "calc(var(--p-space-400)*.5)", width: "calc(var(--p-space-400)*.5)" }} />
              </div>
            </div>
            <BlockStack gap={"200"}>
              <Text as="span" fontWeight="bold">
                <Badge tone="success" >Created</Badge>
              </Text>
            </BlockStack>
          </InlineStack>
        </Box>
      </BlockStack>

    </>
  );
};
