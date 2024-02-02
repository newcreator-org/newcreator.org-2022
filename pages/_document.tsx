import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "../components/googleTagManager";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <GoogleTagManager gtmId={googleTagManagerId} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
