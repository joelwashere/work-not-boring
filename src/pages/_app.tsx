import type { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { ToastContainer } from 'react-toastify';

import { Layout } from '../components/layout';

import 'react-toastify/dist/ReactToastify.css';

// Use require instead of import since order matters
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <IconContext.Provider value={{ className: "react-icons" }} />
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
