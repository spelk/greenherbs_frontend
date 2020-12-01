import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/apollo";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  console.log(client);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
