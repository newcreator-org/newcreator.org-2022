import { NextPage } from "next";
import dayjs from "dayjs";
import Heads from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAllMedia } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";

type MediaType = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
};

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

const MediaPage: NextPage<{ media: MediaType[] }> = ({ media }) => {
  return (
    <>
      <Heads child="メディア" />
      <Header />
      <main className="mx-auto">
        {/* ヒーローセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 animate-fade-in-up">
                メディア
              </h1>
              <p className="mb-8 leading-7 text-lg text-gray-700 animate-fade-in-up-delay">
                AI教育・IT教育・キャリア教育に関するコラムをお届けします
              </p>
            </div>
          </div>
        </section>

        <ScrollFadeIn>
          <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-20 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h2 className="text-xs text-orange-500 tracking-[0.2em] font-medium title-font mb-1">
                  MEDIA
                </h2>
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                  記事一覧
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {media &&
                  media.map((post) => (
                    <div className="w-full xl:w-1/3 md:w-1/2 p-4" key={post.id}>
                      <a href={`/media/${post.id}`}>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden group h-full">
                          <div className="p-6">
                            <span
                              className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${categoryColor(
                                post.category
                              )}`}
                            >
                              {post.category}
                            </span>
                            <h2 className="text-lg text-gray-900 font-bold title-font mb-2 group-hover:text-orange-500 transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-3">
                              {dayjs(post.date).format("YYYY.MM.DD")}
                            </p>
                            <p className="leading-relaxed text-sm text-gray-600">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* CTAセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-500 to-orange-400">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
                一緒に子どもたちの未来を創りませんか?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-7 text-base text-white mb-8">
                寄付やボランティアなど、様々な形でご支援いただけます
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://syncable.biz/associate/newcreator-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-orange-500 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 rounded-full text-lg font-bold shadow-lg transition-all duration-200"
                >
                  寄付で支援
                </a>
                <a
                  href="/#contact"
                  className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 hover:-translate-y-0.5 active:translate-y-0 rounded-full text-lg font-bold shadow-lg transition-all duration-200"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;

export const getStaticProps = async () => {
  const media = getAllMedia();
  return {
    props: {
      media: media,
    },
  };
};
