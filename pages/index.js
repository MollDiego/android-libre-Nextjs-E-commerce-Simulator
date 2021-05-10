import Head from 'next/head'
import { Fragment } from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Android Libre</title>
      </Head>
      <Header/>
    <div className="grid grid-cols-12 mb-60">
        <div className="col-start-3 col-span-6" id="products-container">
            <h1 className="text-xl mt-10 mb-10">¡Para empezar hace tu busqueda!</h1>
            <img height="500px" width="600px" src="/search.svg" alt="search"/>
        </div>
    </div>
    </Fragment>
      )
}
