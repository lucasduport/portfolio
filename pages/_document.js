import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Character encoding */}
        <meta charSet="utf-8" />
        
        {/* Prevent automatic telephone number detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Default meta tags (can be overridden by individual pages) */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
