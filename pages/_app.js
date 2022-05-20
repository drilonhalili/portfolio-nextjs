import Navbar from '../components/Navbar';
import { usePanelbear } from '../hooks/usePanelbear';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_FATHOM_SITE_ID)
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
