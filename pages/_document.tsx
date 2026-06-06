import { GoogleTagManager } from "@next/third-parties/google";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>
          特定非営利活動法人ニュークリエイター・オルグ｜newCreator.org
        </title>
        <meta
          name="description"
          content="地域格差・不登校・ジェンダーギャップ——教育の届かないをなくすために。NPO法人ニュークリエイター・オルグは、全国の子どもたちにSTEAM教育を格差なく届けるため、学校向け出張授業・AI導入支援・オンラインスクールを展開しています。"
        />
        <meta
          name="keywords"
          content="特定非営利活動法人,ニュークリエイター・オルグ,STEAM教育,不登校支援,ジェンダーギャップ,AI教育,プログラミング教育,教育格差,NPO,子ども"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
        var w = window;
        if (w.ChannelIO) {
          return w.console.error("ChannelIO script included twice.");
        }
        var ch = function () {
          ch.c(arguments);
        };
        ch.q = [];
        ch.c = function (args) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
          if (w.ChannelIOInitialized) {
            return;
          }
          w.ChannelIOInitialized = true;
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
          var x = document.getElementsByTagName("script")[0];
          if (x.parentNode) {
            x.parentNode.insertBefore(s, x);
          }
        }
        if (document.readyState === "complete") {
          l();
        } else {
          w.addEventListener("DOMContentLoaded", l);
          w.addEventListener("load", l);
        }
      })();
      ChannelIO("boot", {
        pluginKey: "d94f9342-88bd-43da-86e1-7c4b93246474",
      });`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <GoogleTagManager gtmId={
          process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as `GTM-${string}`
        } /> */}
    </Html>
  );
}
