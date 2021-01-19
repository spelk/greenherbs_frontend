import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

let apolloClient;

function createIsomorphLink() {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: publicRuntimeConfig.API_ENDPOINT,
    credentials: "same-origin",
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // window allowed only in browser. if it is server ssr will equals "true".
    link: createIsomorphLink(), // variable from next.config.js
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  console.log(initialState);
  const _apolloClient = apolloClient ?? createApolloClient(); // if apolloClient === undefined || apolloClient === null we create ApolloClient.

  if (initialState) {
    // if we have initialState we do receive initialState
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient; // we return updated _apolloClient if it is server.

  apolloClient = apolloClient ?? _apolloClient;
  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]); // only if initialState change (not every time when app rerender).

  return store;
}
