import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // console.log("Desde _app.js");
  return(
    <>
      <Head>
          <title>Administracion de Restaurantes</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
