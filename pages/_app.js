import { ApolloProvider } from "@apollo/client";
import apiClient from "../api/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apiClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
