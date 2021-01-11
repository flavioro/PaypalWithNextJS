import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=AdqG-oPwTu_23AElVTHzMySceGeHNK2FmSOSq5Ozv2uVYPwoyUa4h8olLOChC5Ghve7G2SjTtunp9Bzv&currency=USD"></script>
        <title>Test Paypal</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
