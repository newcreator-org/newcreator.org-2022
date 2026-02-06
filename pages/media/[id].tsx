import Heads from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import dayjs from "dayjs";
import blogStyle from "../../styles/pages/blog.module.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { getAllMedia, getMediaById } from "../../libs/markdown";

const categoryColor = (category: string) => {
  switch (category) {
    case "AI教育":
      return "bg-blue-100 text-blue-700";
    case "IT教育":
      return "bg-green-100 text-green-700";
    case "キャリア教育":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function MediaId({ media }) {
  return (
    <>
      <Heads child={media.title} />
      <>
        <Header />
        <main>
          <section className={blogStyle.header}>
            <div>
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 ${categoryColor(
                  media.category
                )}`}
              >
                {media.category}
              </span>
              <time dateTime={dayjs(media.date).format("YYYY-MM-DD")}>
                {dayjs(media.date).format("YYYY.MM.DD")}
              </time>
              <h1>{media.title}</h1>
            </div>
          </section>
          <section className={blogStyle.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: media.content ? `${media.content}` : "本文はありません",
              }}
            />

            <div className={blogStyle.sns}>
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
              <p className={blogStyle.top}>メディア一覧に戻る</p>
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
    .map(para => {
      // 見出し処理
      if (para.startsWith('### ')) {
        return `<h3>${para.replace('### ', '').replace(/\n/g, '<br>')}</h3>`;
      }
      if (para.startsWith('## ')) {
        return `<h2>${para.replace('## ', '').replace(/\n/g, '<br>')}</h2>`;
      }
      if (para.startsWith('# ')) {
        return `<h1>${para.replace('# ', '').replace(/\n/g, '<br>')}</h1>`;
      }
      // リスト処理
      if (para.match(/^- /m)) {
        const items = para.split('\n').map(line => {
          const cleaned = line.replace(/^- /, '');
          // **太字** 処理
          const withBold = cleaned.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
          return `<li>${withBold}</li>`;
        }).join('');
        return `<ul>${items}</ul>`;
      }
      // 番号付きリスト処理
      if (para.match(/^\d+\. /m)) {
        const items = para.split('\n').map(line => {
          const cleaned = line.replace(/^\d+\. /, '');
          const withBold = cleaned.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
          return `<li>${withBold}</li>`;
        }).join('');
        return `<ol>${items}</ol>`;
      }
      // 通常段落（太字処理込み）
      const withBold = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      return `<p>${withBold.replace(/\n/g, '<br>')}</p>`;
    })
    .join('');

  return {
    props: {
      media: {
        ...mediaPost,
        content: htmlContent,
      },
    },
  };
};
