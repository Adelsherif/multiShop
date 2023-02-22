import '../styles/globals.css';
import Head from 'next/head';
import { store } from '../components/redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>multiShop</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
  )
}

export default MyApp
