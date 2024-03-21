"use client"
import { GetInventoryProductsQuery, GetLocationsQuery } from "@/__generated__/graphql";
import { getTransferProcess } from "@/helpers";
import { flatten } from "@/utils/flatten";
import type { IndexFiltersProps, PaginationProps, TabProps } from '@shopify/polaris';
import { ActionList, Badge, BlockStack, Box, Button, Card, IndexFilters, IndexFiltersMode, IndexTable, Page, Popover, ProgressBar, Text, useBreakpoints, useIndexResourceState, useSetIndexFiltersMode } from "@shopify/polaris";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from 'react';
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
function InventoryTable({ pagination, location }: TransfersTableProps) {
  let items = location?.inventoryItems || []
  let lineItems: {
    [key: string]: any
  }[] = items.map(flatten)
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
    'Incoming',
  ]);

  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  let status = searchParams.get('status')
  const createQueryString = useCallback(
    (name: string, value: string, clear?: boolean) => {
      const params = new URLSearchParams(clear ? '' : searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const tabs: TabProps[] = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => {
      setLoading(true)
      if (item === 'All') return router.push(pathname)
      router.push(pathname + '?' + createQueryString('status', item.toLowerCase(), true))
    },
    id: `${item}-${index}`,
    isLocked: true,
  }));
  const [_, setSelected] = useState(0);
  const selected = Math.max(0, itemStrings.findIndex((item) => item.toLowerCase() === status))
  const onCreateNewView = async (value: string) => {
    await sleep(500);
    setItemStrings([...itemStrings, value]);
    setSelected(itemStrings.length);
    return true;
  };
  const sortOptions: IndexFiltersProps['sortOptions'] = [

    { label: 'Date', value: 'date asc', directionLabel: 'date asc' },
    { label: 'Date', value: 'date desc', directionLabel: 'date desc' },

  ];
  const [sortSelected, setSortSelected] = useState(['order asc']);
  const { mode, setMode } = useSetIndexFiltersMode();
  const onHandleCancel = () => { };

  const onHandleSave = async () => {
    await sleep(1);
    return true;
  };

  const primaryAction: IndexFiltersProps['primaryAction'] =
    selected === 0
      ? {
        type: 'save-as',
        onAction: onCreateNewView,
        disabled: false,
        loading: false,
      }
      : {
        type: 'save',
        onAction: onHandleSave,
        disabled: false,
        loading: false,
      };

  const [queryValue, setQueryValue] = useState('');

  const handleFiltersQueryChange = useCallback(
    (value: string) => setQueryValue(value),
    [],
  );
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [
    handleQueryValueRemove,
  ]);

  const appliedFilters: IndexFiltersProps['appliedFilters'] = [];



  const resourceName = {
    singular: 'item',
    plural: 'items',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(items || []);


  const getHeadings = (): {
    id: string
    title: string
    alignment?: any
  }[] => {
    let item: any = lineItems?.[0]
    if (!item) {
      return [

      ]
    }
    let headings = [
      ...Object.keys(item).map((key) => {
        if (key === '__typename') return null

        let value = item[key]
        if (typeof value === 'string' || typeof value === 'number') {
          return { title: key.replaceAll('.', ' '), id: key }
        }
        return null
      })
    ] as {
      id: string
      title: string
      alignment?: any
    }[]
    headings = headings.filter(Boolean)
    headings.push({
      id: 'status',
      title: 'Status',
      alignment: 'end'
    })
    headings.map((heading) => {
      if (!heading?.id) {
        heading.id = heading.title
      }
      return heading
    })
    return headings
  }
  let headings = mode !== IndexFiltersMode.EditingColumns ? [
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

  ] : getHeadings()
  const rowMarkup = lineItems?.map(
    (
      item,
      index,
    ) => {
      const {
        qty,
        received_qty: received,
        process
      } = getTransferProcess({
        inventoryItems: items?.map(item => ({
          qty: Number(item.qty),
          remaining_qty: Number(item.remaining_qty)
        })) || []
      })
      return (
        <IndexTable.Row
          id={item.id}
          key={item.id}
          selected={selectedResources.includes(item.id)}
          position={index}
        >
          {
            headings.map((heading) => {
              if (!heading) return null
              if (heading.id === 'id') return null
              if (heading.id === 'name') return <IndexTable.Cell key={heading.id}>
                <Link href={`/transfers/${item.id}`}>
                  <Text variant="bodyMd" fontWeight="bold" as="span">
                    {item[heading.id]}
                  </Text>
                </Link>
              </IndexTable.Cell>

              if (heading.id === 'status') {
                return <IndexTable.Cell key={heading.id}>
                  <BlockStack gap={"300"}>
                    <Text variant="bodyMd" fontWeight="bold" as="span" alignment="end">
                      {
                        received === 0 ? <Badge progress="incomplete" >Pending</Badge>
                          : received === qty ? <Badge progress="complete" tone="success">Received</Badge>
                            : <Badge progress="partiallyComplete">Partially received</Badge>
                      }
                    </Text>
                    <BlockStack gap={"100"} align="end">
                      <ProgressBar progress={process} size="small" />
                      <Text as="p" alignment="end">Total received:{received} of {qty}</Text>
                    </BlockStack>
                  </BlockStack>

                </IndexTable.Cell>
              }
              return <IndexTable.Cell key={heading.id}>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {item[heading.id]}
                </Text>
              </IndexTable.Cell>
            })
          }


        </IndexTable.Row>
      )
    },
  );
  useEffect(() => {
    setLoading(false)
  }, [pathname, searchParams])
  return (
    <>
      <IndexFilters
        loading={loading}
        sortOptions={sortOptions}
        sortSelected={sortSelected}
        queryValue={queryValue}
        queryPlaceholder="Searching in all"
        onQueryChange={handleFiltersQueryChange}
        onQueryClear={() => setQueryValue('')}
        onSort={setSortSelected}
        primaryAction={primaryAction}
        cancelAction={{
          onAction: onHandleCancel,
          disabled: false,
          loading: false,
        }}
        tabs={tabs}
        selected={selected}
        onSelect={setSelected}
        canCreateNewView={false}
        onCreateNewView={onCreateNewView}
        filters={[]}
        hideFilters={true}
        appliedFilters={appliedFilters}
        onClearAll={handleFiltersClearAll}
        mode={mode}
        setMode={setMode}
        showEditColumnsButton
      />
      <IndexTable
        condensed={useBreakpoints().smDown}
        resourceName={resourceName}
        itemCount={lineItems.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={headings?.length ? headings.filter(h => h.id !== 'id') : [
          {
            title: 'Name',
          }
        ]}
        pagination={{
          ...pagination,
          onNext() {
            setLoading(true)
          },
          onPrevious() {
            setLoading(true)
          },
        }}
      >
        {rowMarkup}
      </IndexTable>
    </>
  );
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
        <InventoryTable {...props} />
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