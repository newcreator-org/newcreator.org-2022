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
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "IT教育":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "キャリア教育":
      return "bg-[#EDF6FB] text-[#1476A6]";
    default:
      return "bg-[#EDF6FB] text-[#2D3748]";
  }
};

const MediaPage: NextPage<{ media: MediaType[] }> = ({ media }) => {
  return (
    <>
      <Heads child="メディア" />
      <Header />
      <main className="mx-auto">
        {/* ヒーローセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-blue-50 to-blue-50">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-[#1A202C] animate-fade-in-up">
                メディア
              </h1>
              <p className="mb-8 leading-7 text-lg text-[#2D3748] animate-fade-in-up-delay">
                AI教育・IT教育・キャリア教育に関するコラムをお届けします
              </p>
            </div>
          </div>
        </section>

        <ScrollFadeIn>
          <section className="text-[#2D3748] body-font overflow-hidden">
            <div className="container px-5 py-20 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h2 className="text-xs tracking-[0.2em] font-medium title-font mb-1" style={{ color: '#1476A6' }}>
                  MEDIA
                </h2>
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#1A202C]">
                  記事一覧
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {media &&
                  media.map((post) => (
                    <div className="w-full xl:w-1/3 md:w-1/2 p-4" key={post.id}>
                      <a href={`/media/${post.id}`}>
                        <div className="bg-white overflow-hidden group h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                          <div className="p-6">
                            <span
                              className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${categoryColor(
                                post.category
                              )}`}
                            >
                              {post.category}
                            </span>
                            <h2 className="text-lg text-[#1A202C] font-bold title-font mb-2 group-hover:transition-colors" style={{ color: '#1476A6' }}>
                              {post.title}
                            </h2>
                            <p className="text-sm text-[#718096] mb-3">
                              {dayjs(post.date).format("YYYY.MM.DD")}
                            </p>
                            <p className="leading-relaxed text-sm text-[#4A5568]">
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
        <section className="text-white body-font" style={{ background: '#1476A6' }}>
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
                  className="btn-white text-base" style={{ color: '#1476A6' }}
                >
                  寄付で支援
                </a>
                <a
                  href="/#contact"
                  className="inline-flex border-0 py-3 px-8 focus:outline-none rounded text-lg font-bold transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.6)' }}
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
