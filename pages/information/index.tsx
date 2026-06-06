import { NextPage } from "next";
import Link from "next/link";
import dayjs from "dayjs";
import Heads from "../../components/customHead";
import Header from "../../components/header";
import { getAllNews } from "../../libs/markdown";
import Footer from "../../components/footer";

interface News {
  id: string;
  title: string;
  create_at: string;
}

interface InformationPageProps {
  news: News[];
}

const InformationPage: NextPage<InformationPageProps> = ({ news }) => {
  return (
    <>
      <Heads child={undefined} />
      <Header />
      <main>
        <section
          className="text-[#2D3748] body-font overflow-hidden"
          id="information"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-[#1476A6] tracking-widest font-medium title-font mb-1">
                Information
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#1A202C]">
                お知らせ
              </h1>
            </div>
            <div className=" mx-auto">
              {news &&
                news.map((news) => (
                  <a
                    className="p-4 flex flex-col md:flex-no-wrap border-b-2 "
                    key={news.id}
                    href={"/information/" + news.id}
                  >
                    <div className="md:w-64">
                      <span className="mt-1 text-[#718096] text-sm">
                        {dayjs(news.create_at).format("YYYY.MM.DD")}
                      </span>
                    </div>
                    <div className="mt-1">
                      <h2 className="text-md text-[#1A202C] title-font mb-2 leading-relaxed font-medium">
                        {news.title}
                      </h2>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default InformationPage;

export const getStaticProps = async () => {
  const news = getAllNews();
  return {
    props: {
      news: news,
    },
  };
};
