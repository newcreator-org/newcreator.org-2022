import { NextPage } from "next";
import Link from "next/link";
import dayjs from "dayjs";
import Heads from "../../components/customHead";
import Header from "../../components/header";
import { client } from "../../libs/client";
import Footer from "../../components/footer";

const AchivePage: NextPage = ({ achieves }) => {
  return (
    <>
      <Heads child={undefined} />
      <Header />
      <main>
        <section
          className="text-gray-700 body-font overflow-hidden"
          id="information"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                Achieves
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                活動アーカイブ
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {achieves &&
                achieves.map((achieve) => (
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src="/ogp.png"
                        alt="content"
                      />
                      <h2 className="text-lg text-gray-900 font-medium title-fon mb-2">
                        {achieve.title}
                      </h2>
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {dayjs(achieve.publishedAt).format("YYYY.MM.DD")}
                      </h3>
                      <p className="leading-relaxed text-base">
                        {achieve.description}
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
  const data = await client.get({
    endpoint: "achieve", queries: { limit: 1000, orders: "-create_at" },
  });
  return {
    props: {
      achieves: data.contents,
    },
  };
};
