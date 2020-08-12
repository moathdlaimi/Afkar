import App from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

const  MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
    <title>Afkar</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
    </Head>
    <Header />
    <Component {...pageProps} />
    </>
  )
}


export default MyApp
