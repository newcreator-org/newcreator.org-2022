import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

export default function Activities() {
  const [filter, setFilter] = useState("all");

  const activities = [
    {
      id: 1,
      category: "student",
      title: "生成AI×キャリア教育プログラム「社会問題をAIで解決」",
      school: "名古屋市立名古屋商業高等学校",
      date: "2024年2月",
    },
    {
      id: 2,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "芝浦工業大学柏中学高等学校",
      date: "2024年2月",
    },
    {
      id: 3,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "聖パウロ学園高等学校",
      date: "2024年1月",
    },
    {
      id: 4,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "聖パウロ学園高等学校",
      date: "2024年1月",
    },
    {
      id: 5,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "和歌山市立伏虎義務教育学校",
      date: "2024年1月",
    },
    {
      id: 6,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "和歌山市教育委員会",
      date: "2024年1月",
    },
    {
      id: 7,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "兵庫県太子町教育委員会",
      date: "2024年1月",
    },
    {
      id: 8,
      category: "special",
      title: "生成AI活用研修 特別講師",
      school: "福岡県宗像市 MunaTechX",
      date: "2023年12月",
    },
    {
      id: 9,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "昭和女子大学附属昭和中学校",
      date: "2023年12月",
    },
    {
      id: 10,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "大妻中学高等学校",
      date: "2023年12月",
    },
    {
      id: 11,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "愛知県立春日井泉高等学校",
      date: "2023年10月",
    },
    {
      id: 12,
      category: "special",
      title: "生成AI活用研修 特別講師",
      school: "a.school",
      date: "2023年10月",
    },
    {
      id: 13,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "東海大学菅生高等学校中等部",
      date: "2023年10月",
    },
    {
      id: 14,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "大妻中学高等学校",
      date: "2023年9月",
    },
    {
      id: 15,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "綾羽高校",
      date: "2023年8月",
    },
    {
      id: 16,
      category: "teacher",
      title: "生成AI活用研修（教員向け研修会）",
      school: "昭和女子大学附属昭和中学校",
      date: "2023年8月",
    },
    {
      id: 17,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "新潟県立新潟商業高等学校",
      date: "2023年7月",
    },
    {
      id: 18,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "長崎県立佐世保北高等学校",
      date: "2023年7月",
    },
    {
      id: 19,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "昭和女子大学附属昭和中学校",
      date: "2023年7月",
    },
    {
      id: 20,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "兵庫県たつの市立龍野西中学校",
      date: "2023年6月",
    },
    {
      id: 21,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "茨城県立竜ヶ崎第一高等学校",
      date: "2023年5月",
    },
    {
      id: 22,
      category: "student",
      title: "生成AI活用研修（生徒向け研修会）",
      school: "二松學舍大学附属柏高等学校",
      date: "2023年5月",
    },
  ];

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => activity.category === filter);

  return (
    <>
      <Heads child={null} />
      <Header />
      <main className="mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-[#1A202C] animate-fade-in-up">
                活動実績
              </h1>
              <p className="mb-8 leading-7 text-lg text-[#718096] animate-fade-in-up-delay">
                これまでの活動とイベントの記録
              </p>
            </div>
          </div>
        </section>

        <ScrollFadeIn>
          <section className="text-gray-600 body-font border-b border-[rgba(20,118,166,0.10)]">
            <div className="container px-5 py-16 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight">
                    22<span className="text-lg font-normal text-[#A0AEC0]">件</span>
                  </p>
                  <p className="mt-2 text-sm text-[#718096]">生成AI研修実施数</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight">
                    10<span className="text-lg font-normal text-[#A0AEC0]">+</span>
                  </p>
                  <p className="mt-2 text-sm text-[#718096]">都道府県</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight">
                    12<span className="text-lg font-normal text-[#A0AEC0]">件</span>
                  </p>
                  <p className="mt-2 text-sm text-[#718096]">生徒向け研修</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight">
                    7<span className="text-lg font-normal text-[#A0AEC0]">件</span>
                  </p>
                  <p className="mt-2 text-sm text-[#718096]">教員向け研修</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="text-gray-600 body-font bg-[#F8FCFF]">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#1A202C] mb-12 text-center">
                生成AI活用研修 実施一覧
              </h1>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  { key: "all", label: "すべて" },
                  { key: "student", label: "生徒向け研修" },
                  { key: "teacher", label: "教員向け研修" },
                  { key: "special", label: "特別プログラム" },
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setFilter(btn.key)}
                    className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors ${
                      filter === btn.key
                        ? "bg-[#1476A6] text-white"
                        : "bg-white text-[#4A5568] hover:bg-[#EDF6FB] border border-[#E2E8F0]"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="divide-y divide-[#E2E8F0]">
                {filteredActivities.map((activity) => (
                  <div key={activity.id} className="py-4 flex flex-col sm:flex-row sm:items-center sm:gap-6">
                    <p className="text-xs text-[#1476A6] font-medium w-28 shrink-0 mb-1 sm:mb-0">
                      {activity.date}
                    </p>
                    <p className="text-sm font-medium text-[#1A202C] flex-1">
                      {activity.title}
                    </p>
                    <p className="text-sm text-[#718096] w-48 shrink-0 mt-1 sm:mt-0 text-right">
                      {activity.school}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* CTA */}
        <section className="text-gray-600 body-font" style={{ background: '#1476A6' }}>
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
                研修・ワークショップのご依頼
              </h1>
              <p className="lg:w-2/3 mx-auto leading-7 text-base text-white opacity-80 mb-8">
                学校・教育委員会向けの生成AI活用研修を全国で実施しています
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="/#contact" className="btn-accent">
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
}
