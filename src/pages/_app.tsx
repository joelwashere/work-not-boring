import type { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';

import { Layout } from '../components/layout';
import { ContextProvider } from '../contexts/context-provider';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Layout>
        <IconContext.Provider value={{ className: "react-icons" }} />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default App;
