import client from "@/model";
import { redirect } from "next/navigation";
import { GET_LOCATIONS } from "./_const";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let status = searchParams.status
  let limit = Number(searchParams.limit || 10)
  let page = Number(searchParams.page || 1)
  let take = Number(limit)
  let skip = page > 1 ? (page - 1) * limit : 0
  let cursor = null
  const { data: locationsRes } = await client.query({
    query: GET_LOCATIONS,
    variables: {

    }
  })
  let id = locationsRes.locations?.[0].id + ''

  return redirect(`/inventory/${id}`)
}


