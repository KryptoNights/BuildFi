import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { useStore } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { wrapper } from "./../store/index";

export  function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <link
          rel="preload"
          crossOrigin=""
          href="href=https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Outfit:wght@100..900&family=Yeseva+One&family=Zen+Dots&display=swap"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <div style={{ zIndex: "99999999999999", position: "fixed", top: "0px" }}>
        <NextNProgress color="#9FF6DF" />
      </div>

      <div
        className="flex justify-center"
        style={{
          maxInlineSize: "1408px",
          margin: "auto",
        }}
      >
        <div className="w-full bg-black">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div>
    </main>
  );
}

export default wrapper.withRedux(App);
