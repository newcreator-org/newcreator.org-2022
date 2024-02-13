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
import { client } from "../../libs/client";

export default function AchieveId({ archives }) {
  return (
    <>
      <Heads child={archives.title} />
      <>
        <Header />
        <main>
          <section className={blogStyle.header}>
            <div>
              <time dateTime={dayjs(archives.publishedAt).format("YYYY-MM-DD")}>
                {dayjs(archives.publishedAt).format("YYYY.MM.DD")}
              </time>
              <h1>{archives.title}</h1>
            </div>
          </section>
          <section className={blogStyle.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: archives.content ? `${archives.content}` : "本文はありません",
              }}
            />

            {archives.link && (
              <p className={blogStyle.link}>
                関連リンク:
                <a href={archives.link}> {archives.link}</a>
              </p>
            )}
            <div className={blogStyle.sns}>
              <p>Share: </p>
              <FacebookShareButton
                url={"https://newcreator.org/information/${archives.id}"}
                quote={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${archives.title}"
                }
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://newcreator.org/information/${archives.id}"}
                title={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${archives.title}"
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
  const data = await client.get({ endpoint: "archive" });
  const paths = data.contents.map((content) => `/archives/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "archive", contentId: id });

  return {
    props: {
      archives: data,
    },
  };
};
