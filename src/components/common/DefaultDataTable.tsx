"use client"
import type { IndexFiltersProps, PaginationProps, TabProps } from '@shopify/polaris';
import { IndexFilters, IndexFiltersMode, IndexTable, Text, useBreakpoints, useIndexResourceState, useSetIndexFiltersMode } from "@shopify/polaris";
import { IndexTableHeading } from "@shopify/polaris/build/ts/src/components/IndexTable";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from 'react';
export type DefaultTableProps = {
  lineItems: {
    [key: string]: any
  }[]
  extendEntites: {
    [key: string]: any
  }
  pagination: PaginationProps
  columns?: IndexTableHeading[]
}
function DefaultDataTable({ pagination, lineItems, columns }: DefaultTableProps) {
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
    useIndexResourceState(lineItems || []);


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
  let headings = ((columns && mode !== IndexFiltersMode.EditingColumns) ? columns : getHeadings())
  const rowMarkup = lineItems?.map(
    (
      item,
      index,
    ) => {

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
              return <IndexTable.Cell key={heading.id}>
                <Text variant="bodyMd" fontWeight="bold" as="span">
                  {item[heading.id + '']}
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
        selectable={false}
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

export default DefaultDataTable