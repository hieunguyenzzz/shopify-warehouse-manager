"use client"
import { GetContainersQuery } from "@/__generated__/graphql";
import { getTransferProcess } from "@/helpers";
import type { IndexFiltersProps, PaginationProps, TabProps } from '@shopify/polaris';
import { Badge, BlockStack, Card, ChoiceList, IndexFilters, IndexTable, Page, ProgressBar, RangeSlider, Text, TextField, useBreakpoints, useIndexResourceState, useSetIndexFiltersMode } from "@shopify/polaris";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from 'react';
import DefaultTable from "./common/DefaultTable";
import { flatten } from "@/utils/flatten";
export type TransfersTableProps = {
  containerLineItems: GetContainersQuery['containers'],
  extendEntites: {
    [key: string]: {
      status: 'pending' | 'received'
    }
  }
  pagination: PaginationProps
}
function TransfersTable({ pagination, containerLineItems: items = [], extendEntites }: TransfersTableProps) {
  let lineItems = items || []
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
    'Pending',
    'Received',
  ]);
  const deleteView = (index: number) => {
    const newItemStrings = [...itemStrings];
    newItemStrings.splice(index, 1);
    setItemStrings(newItemStrings);
    setSelected(0);
  };

  const duplicateView = async (name: string) => {
    setItemStrings([...itemStrings, name]);
    setSelected(itemStrings.length);
    await sleep(1);
    return true;
  };
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
  const [accountStatus, setAccountStatus] = useState<string[] | undefined>(
    undefined,
  );
  const [moneySpent, setMoneySpent] = useState<[number, number] | undefined>(
    undefined,
  );
  const [taggedWith, setTaggedWith] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const handleAccountStatusChange = useCallback(
    (value: string[]) => setAccountStatus(value),
    [],
  );
  const handleMoneySpentChange = useCallback(
    (value: [number, number]) => setMoneySpent(value),
    [],
  );
  const handleTaggedWithChange = useCallback(
    (value: string) => setTaggedWith(value),
    [],
  );
  const handleFiltersQueryChange = useCallback(
    (value: string) => setQueryValue(value),
    [],
  );
  const handleAccountStatusRemove = useCallback(
    () => setAccountStatus(undefined),
    [],
  );
  const handleMoneySpentRemove = useCallback(
    () => setMoneySpent(undefined),
    [],
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(''), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = useCallback(() => {
    handleAccountStatusRemove();
    handleMoneySpentRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleAccountStatusRemove,
    handleMoneySpentRemove,
    handleQueryValueRemove,
    handleTaggedWithRemove,
  ]);

  const filters = [
    {
      key: 'accountStatus',
      label: 'Account status',
      filter: (
        <ChoiceList
          title="Account status"
          titleHidden
          choices={[
            { label: 'Enabled', value: 'enabled' },
            { label: 'Not invited', value: 'not invited' },
            { label: 'Invited', value: 'invited' },
            { label: 'Declined', value: 'declined' },
          ]}
          selected={accountStatus || []}
          onChange={handleAccountStatusChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
    {
      key: 'taggedWith',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
    {
      key: 'moneySpent',
      label: 'Money spent',
      filter: (
        <RangeSlider
          label="Money spent is between"
          labelHidden
          value={moneySpent || [0, 500]}
          prefix="$"
          output
          min={0}
          max={2000}
          step={1}
          onChange={handleMoneySpentChange}
        />
      ),
    },
  ];

  const appliedFilters: IndexFiltersProps['appliedFilters'] = [];
  if (accountStatus && !isEmpty(accountStatus)) {
    const key = 'accountStatus';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, accountStatus),
      onRemove: handleAccountStatusRemove,
    });
  }
  if (moneySpent) {
    const key = 'moneySpent';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, moneySpent),
      onRemove: handleMoneySpentRemove,
    });
  }
  if (!isEmpty(taggedWith)) {
    const key = 'taggedWith';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, taggedWith),
      onRemove: handleTaggedWithRemove,
    });
  }


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
          return { title: key }
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
  let headings = getHeadings()
  const rowMarkup = items?.map(
    (
      item,
      index,
    ) => {
      const {
        qty,
        received_qty: received,
        process
      } = getTransferProcess({
        inventoryItems: item.inventoryItems?.map(item => ({
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
            headings.map((heading, index) => {
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
                  {item[heading.title]}
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
        filters={filters}
        hideFilters={true}
        appliedFilters={appliedFilters}
        onClearAll={handleFiltersClearAll}
        mode={mode}
        setMode={setMode}
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

  function disambiguateLabel(key: string, value: string | any[]): string {
    switch (key) {
      case 'moneySpent':
        return `Money spent is between $${value[0]} and $${value[1]}`;
      case 'taggedWith':
        return `Tagged with ${value}`;
      case 'accountStatus':
        return (value as string[]).map((val) => `Customer ${val}`).join(', ');
      default:
        return value as string;
    }
  }

  function isEmpty(value: string | string[]): boolean {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}
export default function Transfers(props: TransfersTableProps) {
  return (
    <Page fullWidth title="Transfers" primaryAction={{
      content: 'Add transfer',
      onAction: () => console.log('clicked'),

    }}>
      <Card padding={"0"}>
        <TransfersTable {...props} />
        <DefaultTable
          {
          ...{
            extendEntites: {},
            pagination: props.pagination,
            lineItems: props.containerLineItems?.map(item => ({
              ...item,
              url: `/transfers/${item.id}`,
              ...getTransferProcess({
                inventoryItems: item.inventoryItems?.map(item => ({
                  qty: Number(item.qty),
                  remaining_qty: Number(item.remaining_qty)
                })) || []
              })
            })).map(flatten) || [],
            columns: [
              {
                id: 'id',
                title: 'ID',
              },
              {
                id: 'name',
                title: 'Name'
              },
              {
                id: 'dueDate',
                title: 'Due Date'
              },
              {
                id: 'remaining_qty',
                title: 'Remaining Qty'
              },
              {
                id: 'qty',
                title: 'Qty'
              }
            ]

          }
          }

        />
      </Card>
    </Page>
  );
}

