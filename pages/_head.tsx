import Head from "next/head";

export default function Heads({ child }) {
    const title =
            "特定非営利活動法人ニュークリエイター・オルグ｜newCreator.org",
        description =
            "2019年1月に発足した次世代の学びをオープンに制作・提供するNPO法人です。誰でも自由に使用や改変を行うことができ、無料で使える「オープンソース」という形で提供される教材の開発およびそれらを利用したイベントの開催を行っています。",
        image = "/ogp.png",
        url = "https://newcreator.org",
        twitter = "@nC_org",
        color = "#53B1F0";
    return (
        <Head>
            <title>{child ? `${child}｜${title}` : title}</title>
            <meta name="description" content={description} />
            <meta
                property="og:title"
                content={child ? `${child}｜${title}` : title}
            />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="blog" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={url + image} />
            <meta
                property="og:site_name"
                content={child ? `${child}｜${title}` : title}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:url" content={url} />
            <meta
                name="twitter:title"
                content={child ? `${child}｜${title}` : title}
            />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={url + image} />
            <link rel="canonical" href={url} />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon.png"
            />
            {/* <link rel="manifest" href="/site.webmanifest" /> */}
            <meta name="msapplication-TileColor" content={color} />
            <meta name="theme-color" content={color} />
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-159919918-4"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-159919918-4");
    `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "d94f9342-88bd-43da-86e1-7c4b93246474"
  });
    `,
                }}
            />
        </Head>
    );
}
