import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { Layout } from '../components/layout';

import { ContextProvider } from '../contexts/context-provider';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default App;
