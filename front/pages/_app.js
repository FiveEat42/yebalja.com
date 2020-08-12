//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
const MyApp = ({ Component, pageProps}) => {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>예발자닷컴</title>
          <link rel="icon" type="image/x-icon" href={require("./favicon.ico")} />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-172016762-1"
          />
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
    )
}

// This default export is required in a new `pages/_app.js` file.
export default MyApp;

