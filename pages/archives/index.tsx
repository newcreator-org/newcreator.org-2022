import { NextPage } from "next";
import Link from "next/link";
import dayjs from "dayjs";
import Heads from "../../components/customHead";
import Header from "../../components/header";
import { getAllArchives } from "../../libs/markdown";
import Footer from "../../components/footer";

type AchieveType = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  date: string;
};

const AchivePage: NextPage<{ archives: AchieveType[] }> = ({ archives }) => {
  return (
    <>
      <Heads child={undefined} />
      <Header />
      <main>
        <section
          className="text-[#1A202C] body-font overflow-hidden"
          id="information"
        >
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="section-title text-[#1476A6] tracking-widest title-font mb-1">
                Archives
              </h2>
              <h1 className="page-title font-medium title-font text-[#1A202C]">
                活動アーカイブ
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {archives &&
                archives.map((archive) => (
                  <div className="w-full xl:w-1/4 md:w-1/2 p-6">
                    <div className="bg-[#EDF6FB] p-6 rounded-sm">
                      <img
                        className="h-40 rounded-sm w-full object-cover object-center mb-6"
                        src="/ogp.png"
                        alt="content"
                      />
                      <h2 className="section-title text-[#1A202C] title-fon mb-2">
                        {archive.title}
                      </h2>
                      <h3 className="card-title tracking-widest text-[#1476A6] title-font">
                        {dayjs(archive.date).format("YYYY.MM.DD")}
                      </h3>
                      <p className="leading-relaxed text-base">
                        {archive.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AchivePage;

export const getStaticProps = async () => {
  const archives = getAllArchives();
  return {
    props: {
      archives: archives,
    },
  };
};
