import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@shopify/polaris";
import RootProvider from "@/components/context";
import "@shopify/polaris/build/esm/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundboxStore App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let i18n = await require(`@shopify/polaris/locales/en.json`)
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider i18n={i18n}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
