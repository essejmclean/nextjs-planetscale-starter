import React from "react";
import type { ExtendedAppProps } from "@utils/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "inter-ui/inter.css";

import "@styles/index.css";
import WithAuth from "@utils/auth/WithAuth";

export const queryClient = new QueryClient();

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: ExtendedAppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={apolloClient}>
          {Component.auth ? (
            <WithAuth options={Component.auth}>
              <Component {...pageProps} />
            </WithAuth>
          ) : (
            <Component {...pageProps} />
          )}
        </ApolloProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
