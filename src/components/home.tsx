"use client"
import { Button } from "@shopify/polaris";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button url="/transfers">Login</Button>
    </main>
  );
}
