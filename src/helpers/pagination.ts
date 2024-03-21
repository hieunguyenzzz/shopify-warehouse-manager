import { PaginationProps } from "@shopify/polaris"

export const getPagination = ({
  searchParams, pathname, total, limit, page
}: {
  limit: number
  page: number
  total: number
  pathname: string
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  let pagination: PaginationProps = {
    hasNext: total > limit * page,
    hasPrevious: page > 1,
    nextURL: `${pathname}?${new URLSearchParams({
      ...searchParams,
      page: String(page + 1),
      limit: String(limit)
    }).toString()}`,
    previousURL: `${pathname}?${new URLSearchParams({
      ...searchParams,
      page: String(page - 1),
      limit: String(limit)
    }).toString()}`,
  }
  return pagination

}

export const getPaginationVariables = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  let limit = Number(searchParams.limit || 10)
  let page = Number(searchParams.page || 1)
  let take = Number(limit)
  let skip = page > 1 ? (page - 1) * limit : 0
  return {
    limit,
    page,
    variables: {
      take,
      skip
    }
  }
}