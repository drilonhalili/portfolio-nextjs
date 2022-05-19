import Navbar from '../components/Navbar';
import { usePanelbear } from '../lib/analytics';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  usePanelbear('https://www.drilonhalili.com', process.env.NEXT_PUBLIC_FATHOM_SITE_ID)
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
