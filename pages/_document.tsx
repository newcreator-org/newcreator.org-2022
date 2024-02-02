import { GoogleTagManager } from "@next/third-parties/google";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <GoogleTagManager gtmId={
          process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as `GTM-${string}`
        } />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
