import Head from 'next/head';

type HeadsProps = {
  child?: string;
  description?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalPath?: string; // e.g. "/about" or "/archives/my-post"
};

export default function Heads({
  child,
  description,
  ogImage,
  ogType = "website",
  canonicalPath,
}: HeadsProps) {
  const siteName =
    "特定非営利活動法人ニュークリエイター・オルグ｜newCreator.org";
  const defaultDescription =
    "地域格差・不登校・ジェンダーギャップ——教育の「届かない」をなくすために。特定非営利活動法人ニュークリエイター・オルグは、全国の子どもたちにSTEAM教育を格差なく届けるため、学校向け出張授業・AI導入支援・オンラインスクールを展開しています。";
  const baseUrl = "https://newcreator.org";
  const twitter = "@nC_org";
  const color = "#53B1F0";

  const title = child ? `${child}｜${siteName}` : siteName;
  const desc = description || defaultDescription;
  const image = `${baseUrl}${ogImage || "/ogp.png"}`;
  const canonical = `${baseUrl}${canonicalPath || ""}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />

      {/* OGP */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {/* canonical */}
      <link rel="canonical" href={canonical} />

      {/* Icons */}
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="msapplication-TileColor" content={color} />
      <meta name="theme-color" content={color} />
    </Head>
  );
}
