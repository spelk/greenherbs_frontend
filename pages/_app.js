import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: publicRuntimeConfig.API_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
