import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta title="Estelle Grésillon - Développeur Front-end & UI Designer" />
          <meta
            name="description"
            content="Estelle Grésillon Portfolio - Developer Front-End & UI Designer in Paris"
          />
          <meta name="keywords" content="développeur front-end, designer ui, react, reactjs, redux, design"/>
          <meta name="language" content="en" />
          <meta name="author" content="Estelle Grésillon" />
          <meta name="publisher" content="Estelle Grésillon" />
          <meta name="category" content="Portfolio, Développeur, Designer" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta property="og:site_name" content="Estelle Grésillon - Creative Developer" />
          <meta property="og:title" content="Estelle Grésillon - Creative Developer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.estellegresillon.fr" />
          <meta property="og:image" content="og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:site" content="Estelle Grésillon - Creative Developer" />
          <meta property="twitter:title" content="Estelle Grésillon - Creative Developer" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="Estelle Grésillon" />
          <meta 
            property="twitter:description"
            content="Estelle Grésillon Portfolio - Developer Front-End & UI Designer in Paris"
          />
          <meta property="twitter:image" content="og-image.png" />
          <meta name="google" content="noimageindex" />
          <meta name="theme-color" content="black" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="Estelle Grésillon" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
            integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous" />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
