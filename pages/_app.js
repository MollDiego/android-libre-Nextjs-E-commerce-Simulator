import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { Fragment } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta
            name="description"
            content="Aplicacion web que permite buscar items de android en la API de mercadolibre"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main id="android-libre" className="main-margin">
          <Component {...pageProps} />
        </main>
        <Footer/>
      </Fragment>
  )
}

export default MyApp
