import client from "@/model";
import { redirect } from "next/navigation";
import { GET_LOCATIONS } from "./_const";

export default async function Page({
}: {
  }) {
  const { data: locationsRes } = await client.query({
    query: GET_LOCATIONS,
    variables: {

    }
  })
  let id = locationsRes.locations?.[0].id + ''

  return redirect(`/inventory/${id}`)
}


