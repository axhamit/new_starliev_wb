import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Nunito_Sans, Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "@/store";
import { setProducts } from "@/store/slices/product-slice";
import products from "@/data/products.json";
import Preloader from "@/components/preloader";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "@/assets/sass/style.scss";
import "@/assets/responsive.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppin = Poppins({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    store.dispatch(setProducts(products));
  }, [store]); // Add store to dependency array

  return (
    <Fragment>
      <Head>
        <title>Best co-living PG in Bangalore</title>
        <meta name="description" content="best pg for co-living in Bangalore " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        html, body {
          font-family: ${nunito.style.fontFamily}, sans-serif; /* Added fallback */
          margin: 0; /* Ensure no default margins */
          padding: 0; /* Ensure no default padding */
          box-sizing: border-box; /* Use border-box model */
        }

        *, *::before, *::after {
          box-sizing: inherit; /* Set box-sizing for all elements */
        }

        h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
          font-family: ${poppin.style.fontFamily}, sans-serif; /* Added fallback */
        }
      `}</style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader />}>
        <SpeedInsights />
        <Analytics />
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
