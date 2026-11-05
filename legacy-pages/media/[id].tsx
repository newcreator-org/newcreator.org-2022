import Heads from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import dayjs from "dayjs";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { getAllMedia, getMediaById } from "../../libs/markdown";

export default function MediaId({ media }) {
  return (
    <>
      <Heads child={media.title} canonicalPath={`/media/${media.id}`} ogType="article" />
      <>
        <Header />
        <main>
          <section className="blog-header">
            <div className="blog-header-inner">
              <time dateTime={dayjs(media.publishedAt).format("YYYY-MM-DD")}>
                {dayjs(media.publishedAt).format("YYYY.MM.DD")}
              </time>
              <h1>{media.title}</h1>
            </div>
          </section>
          <section className="blog-content">
            <div
              dangerouslySetInnerHTML={{
                __html: media.content ? `${media.content}` : "本文はありません",
              }}
            />

            <div className="blog-sns">
              <p>Share: </p>
              <FacebookShareButton
                url={`https://newcreator.org/media/${media.id}`}
                quote={`特定非営利活動法人ニュークリエイター・オルグ｜${media.title}`}
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`https://newcreator.org/media/${media.id}`}
                title={`特定非営利活動法人ニュークリエイター・オルグ｜${media.title}`}
                via={"nC_org"}
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
            </div>
            <a href="/media">
              <p className="blog-top">メディア一覧に戻る</p>
            </a>
          </section>
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export const getStaticPaths = async () => {
  const allMedia = getAllMedia();
  const paths = allMedia.map((post) => `/media/${post.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const mediaPost = getMediaById(id);

  if (!mediaPost) {
    return {
      notFound: true,
    };
  }

  // MarkdownをシンプルなHTMLに変換
  const htmlContent = mediaPost.content
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
    .join('');

  return {
    props: {
      media: {
        ...mediaPost,
        content: htmlContent,
        publishedAt: mediaPost.date,
      },
    },
  };
};
