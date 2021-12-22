
import 'primereact/resources/themes/tailwind-light/theme.css' //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'                                  //icons
import 'primeflex/primeflex.css';
import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import NextNProgress from "nextjs-progressbar";




function MyApp({ Component, pageProps }) {

  

  return (<><Head>
    <title>Real Estate</title>
  </Head>
  <NextNProgress height={6} color="#4338C9" />
    <header>
      <div className="p-d-flex p-jc-center p-mt-3">
        <Navbar />
      </div>
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer className="p-mt-3 p-mb-3">
      <div className="p-d-flex p-jc-center">Miracle Realtor 2021, Inc</div>
    </footer>
  </>)
}

export default MyApp
