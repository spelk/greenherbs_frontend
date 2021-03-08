import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { useMemo } from "react";
import getConfig from "next/config";
import { setContext } from '@apollo/client/link/context';

const { publicRuntimeConfig } = getConfig();

let apolloClient;

function createIsomorphLinkServer() {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: publicRuntimeConfig.API_ENDPOINT,
    credentials: 'same-origin',
  });
}

function createIsomorphLinkClient() {
  return createHttpLink({
    uri: publicRuntimeConfig.API_ENDPOINT,
    credentials: 'same-origin',
  });
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('AUTH_TOKEN');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // window allowed only in browser. if it is server ssr will equals "true".
    link: typeof window === "undefined" ? createIsomorphLinkServer() : authLink.concat(createIsomorphLinkClient()), // variable from next.config.js
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
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
