import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import wrapper from "../redux/store/configureStore";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="naver-site-verification" content="3261dbf8d9a42cb634c194cdde9def3cd111a56d" />
        <title>예발자닷컴</title>
        <link rel="icon" type="image/x-icon" href={require("./favicon.ico")} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172016762-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-172016762-1');
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

// This default export is required in a new `pages/_app.js` file.

//redux를 사용하기 위한 wrapper
export default wrapper.withRedux(MyApp);
