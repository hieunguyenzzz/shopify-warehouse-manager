"use client"
import client, { ApolloProvider } from '@/model';
import { AppProvider, AppProviderProps } from '@shopify/polaris'
import { PropsWithChildren } from 'react'


export default function RootProvider({ children, ...props }: PropsWithChildren<AppProviderProps>) {
  return <AppProvider {...props} >
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  </AppProvider>
}