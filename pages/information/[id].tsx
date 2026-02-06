import Heads from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import dayjs from "dayjs";
import blogStyle from "../../styles/pages/blog.module.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { getAllNews, getNewsById } from "../../libs/markdown";

export default function BlogId({ blog }) {
  return (
    <>
      <Heads child={blog.title} />
      <>
        <Header />
        <main>
          <section className={blogStyle.header}>
            <div>
              <time dateTime={dayjs(blog.publishedAt).format("YYYY-MM-DD")}>
                {dayjs(blog.publishedAt).format("YYYY.MM.DD")}
              </time>
              <h1>{blog.title}</h1>
            </div>
          </section>
          <section className={blogStyle.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content ? `${blog.content}` : "本文はありません",
              }}
            />

            {blog.link && (
              <p className={blogStyle.link}>
                関連リンク:
                <a href={blog.link}> {blog.link}</a>
              </p>
            )}
            <div className={blogStyle.sns}>
              <p>Share: </p>
              <FacebookShareButton
                url={"https://newcreator.org/information/${blog.id}"}
                quote={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${blog.title}"
                }
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://newcreator.org/information/${blog.id}"}
                title={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${blog.title}"
                }
                via={"nC_org"}
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
            </div>
            <a href="/">
              <p className={blogStyle.top}>TOPに戻る</p>
            </a>
          </section>
        </main>
        <Footer />
      </>
    </>
  );
}

export const getStaticPaths = async () => {
  const allNews = getAllNews();
  const paths = allNews.map((news) => `/information/${news.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const newsPost = getNewsById(id);

  if (!newsPost) {
    return {
      notFound: true,
    };
  }

  // MarkdownをシンプルなHTMLに変換
  const htmlContent = newsPost.content
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
    .join('');

  return {
    props: {
      blog: {
        ...newsPost,
        content: htmlContent,
      },
    },
  };
};
