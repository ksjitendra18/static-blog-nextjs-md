import "../../styles/globals.css";
import Layout from "../components/layout";
import {MDXProvider} from '@mdx-js/react'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
