import '@/styles/globals.css';
import '@mantine/core/styles.css';
import Layout from '@/components/Layout';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {
  
  return (
    <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </MantineProvider>
  );
}
