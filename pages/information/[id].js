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

export default function BlogId ({ blog }) {
  return (
    <>
      <Heads child={blog.title} />
      <>
        <Header />
        <main>
          <section className={blogStyle.header}>
            <div>
              <time
                dateTime={dayjs(blog.publishedAt).format(
                  "YYYY-MM-DD"
                )}
              >
                {dayjs(blog.publishedAt).format("YYYY.MM.DD")}
              </time>
              <h1>{blog.title}</h1>
            </div>
          </section>
          <section className={blogStyle.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content
                  ? `${blog.content}`
                  : "本文はありません",
              }}
            />

            {
              blog.link && (
                <p className={blogStyle.link}>
                  関連リンク:
                  <a href={blog.link}> {blog.link}</a>
                </p>
              )
            }
            <div className={blogStyle.sns}>
              <p>Share: </p>
              <FacebookShareButton
                url={[
                  `https://newcreator.org/information/${blog.id}`,
                ]}
                quote={[
                  `特定非営利活動法人ニュークリエイター・オルグ｜${blog.title}`,
                ]}
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={[
                  `https://newcreator.org/information/${blog.id}`,
                ]}
                title={[
                  `特定非営利活動法人ニュークリエイター・オルグ｜${blog.title}`,
                ]}
                via={"nC_org"}
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
              <LineShareButton
                url={[
                  `https://newcreator.org/information/${blog.id}`,
                ]}
                quote={[
                  `特定非営利活動法人ニュークリエイター・オルグ｜${blog.title}`,
                ]}
              >
                <LineIcon size={28} round />
              </LineShareButton>
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

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://newcreator-org.microcms.io/api/v1/news",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/information/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://newcreator-org.microcms.io/api/v1/news/" + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
