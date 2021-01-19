import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/apollo";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  console.log(pageProps.initialApolloState)
  const client = useApollo(pageProps.initialApolloState);
  console.log(pageProps.initialApolloState)


  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
