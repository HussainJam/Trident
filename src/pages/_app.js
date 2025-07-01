import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



export default function App({ Component, pageProps }) {
  return <>

       <Head>
        {/* Website Title */}
        <title>Trident</title>        
        <link rel="icon" href="/favicon.ico" />                
        <meta name="description" content="Trident" />
      </Head>

  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}
