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

export default function AchieveId({ achieves }) {
  return (
    <>
      <Heads child={achieves.title} />
      <>
        <Header />
        <main>
          <section className={blogStyle.header}>
            <div>
              <time dateTime={dayjs(achieves.publishedAt).format("YYYY-MM-DD")}>
                {dayjs(achieves.publishedAt).format("YYYY.MM.DD")}
              </time>
              <h1>{achieves.title}</h1>
            </div>
          </section>
          <section className={blogStyle.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: achieves.content ? `${achieves.content}` : "本文はありません",
              }}
            />

            {achieves.link && (
              <p className={blogStyle.link}>
                関連リンク:
                <a href={achieves.link}> {achieves.link}</a>
              </p>
            )}
            <div className={blogStyle.sns}>
              <p>Share: </p>
              <FacebookShareButton
                url={"https://newcreator.org/information/${achieves.id}"}
                quote={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${achieves.title}"
                }
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://newcreator.org/information/${achieves.id}"}
                title={
                  "特定非営利活動法人ニュークリエイター・オルグ｜${achieves.title}"
                }
                via={"nC_org"}
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
              <LineShareButton
                url={[`https://newcreator.org/information/${achieves.id}`]}
                quote={[
                  `特定非営利活動法人ニュークリエイター・オルグ｜${achieves.title}`,
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

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "achieve" });
  const paths = data.contents.map((content) => `/achieves/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "achieve", contentId: id });

  return {
    props: {
      achieves: data,
    },
  };
};
