export type ActivityCategory = "student" | "teacher" | "special";

export type Activity = { category: ActivityCategory; title: string; school: string; date: string };

export const CATEGORY_LABELS: Record<ActivityCategory, string> = {
    student: "生徒向け研修",
    teacher: "教員向け研修",
    special: "特別プログラム",
};

/** 生成AI活用研修の実施一覧（新しい順） */
export const ACTIVITIES: Activity[] = [
    {
        category: "student",
        title: "生成AI×キャリア教育プログラム「社会問題をAIで解決」",
        school: "名古屋市立名古屋商業高等学校",
        date: "2024年2月",
    },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "芝浦工業大学柏中学高等学校", date: "2024年2月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "聖パウロ学園高等学校", date: "2024年1月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "聖パウロ学園高等学校", date: "2024年1月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "和歌山市立伏虎義務教育学校", date: "2024年1月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "和歌山市教育委員会", date: "2024年1月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "兵庫県太子町教育委員会", date: "2024年1月" },
    { category: "special", title: "生成AI活用研修 特別講師", school: "福岡県宗像市 MunaTechX", date: "2023年12月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "昭和女子大学附属昭和中学校", date: "2023年12月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "大妻中学高等学校", date: "2023年12月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "愛知県立春日井泉高等学校", date: "2023年10月" },
    { category: "special", title: "生成AI活用研修 特別講師", school: "a.school", date: "2023年10月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "東海大学菅生高等学校中等部", date: "2023年10月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "大妻中学高等学校", date: "2023年9月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "綾羽高校", date: "2023年8月" },
    { category: "teacher", title: "生成AI活用研修（教員向け研修会）", school: "昭和女子大学附属昭和中学校", date: "2023年8月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "新潟県立新潟商業高等学校", date: "2023年7月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "長崎県立佐世保北高等学校", date: "2023年7月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "昭和女子大学附属昭和中学校", date: "2023年7月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "兵庫県たつの市立龍野西中学校", date: "2023年6月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "茨城県立竜ヶ崎第一高等学校", date: "2023年5月" },
    { category: "student", title: "生成AI活用研修（生徒向け研修会）", school: "二松學舍大学附属柏高等学校", date: "2023年5月" },
];
