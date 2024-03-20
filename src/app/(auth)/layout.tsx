import { cookies } from "next/headers";
import { redirect } from "next/navigation";
let data = {
  "variables": {},
  "query": `{
    keystone {
      adminMeta {
        lists {
          key
          isHidden
          fields {
            path
            createView {
              fieldMode
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    authenticatedItem {
      ... on User {
        id
        name
        __typename
      }
      __typename
    }
  }`
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = cookies().get("keystonejs-session");
  console.log({ session });
  let res = await fetch(
    "https://soundboxstore-inventory-ks.x67nf4.easypanel.host/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `keystonejs-session=${session?.value}`,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch(console.error);
  console.log({ res });
  if (!res?.data?.authenticatedItem) {
    return redirect("/login");
  }
  return children
}
