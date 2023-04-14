import Layout from "@/components/Nav/Layout";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
