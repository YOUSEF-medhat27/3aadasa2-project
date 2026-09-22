
import Navbar from "./../Navbar/Navbar.jsx"
import Footer from "./../Footer/Footer.jsx"
import Test from "../category/test.jsx"
import Form from "./../Form/Form.jsx"
import Header from "./../Header/Header.jsx"
import PageHeader from "../page header/Pageheader.jsx";
import { NavLink } from "react-router-dom";
import { cards } from "../Data/Data.jsx";

export default function Home() {


    return <>
        <Navbar />
        <Header
            badge={"مرحباً بك في عدسة"}
            title={"اكتشف"}
            highlight={"فن"}
            semititle={"التصوير الفوتوغرافي"}
            description="اغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير"
            discovery={"اكتشف المقالات"}
            known={"اعرف المزيد"}
            showCards={true}
            icon1={<i className="fa-solid fa-newspaper  text-2xl text-orange-500"></i>}
            icon2={<i className="fa-solid fa-users text-2xl text-orange-500"></i>}
            icon3={<i className="fa-solid fa-folder-open text-2xl text-orange-500"></i>}
            icon4={<i className="fa-solid fa-pen-nib text-2xl"></i>}
            num1={"+50"}
            num2={"+10ألف"}
            num3={"4"}
            num4={"6"}
            sub1={"مقالة"}
            sub2={"قارئ"}
            sub3={"تصنيفات"}
            sub4={"كاتب"}

        />
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

                    <div>
                        <span className="section-label mb-4 inline-flex justify-start items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            مميز
                        </span>

                        <h2 className="section-title text-white text-6xl font-bold">
                            مقالات مختارة
                        </h2>

                        <p className="section-subtitle max-w-lg text-2xl pt-3 text-white">
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>
                    </div>

                    <NavLink className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
                        to="/blog">
                        عرض الكل

                        <svg
                            className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </NavLink>
                </div>

                <div className="space-y-8">


                    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">

                        <NavLink className="block"
                            to="/blog/mastering-golden-hour-photography">
                            <div className="grid md:grid-cols-2 gap-0">

                                <div className="relative h-72 md:h-100 overflow-hidden">

                                    <img
                                        alt="إتقان تصوير الساعة الذهبية: دليل شامل"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        src={cards[0].src}

                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                                            مميز
                                        </span>
                                    </div>

                                </div>

                                <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                            إضاءة
                                        </span>

                                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                                            8 دقائق للقراءة
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                        إتقان تصوير الساعة الذهبية: دليل شامل
                                    </h2>

                                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                                        تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                                        احترافية حول الإضاءة والتكوين.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">

                                        <div className="flex items-center gap-3">
                                            <div className="relative">

                                                <img
                                                    alt="سالم أحمد"
                                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                                    src="./src/assets/images/photo-1507003211169-0a1dd7228f2d.jfif"

                                                />

                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    سالم أحمد
                                                </p>

                                                <p className="text-xs text-neutral-500">
                                                    ١٥ يناير ٢٠٢٦
                                                </p>
                                            </div>
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            اقرأ المقال
                                        </span>

                                    </div>

                                </div>

                            </div>
                        </NavLink>

                    </article>


                    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">

                        <NavLink className="block"
                            to="/blog/portrait-photography-secrets">
                            <div className="grid md:grid-cols-2 gap-0">

                                <div className="relative h-72 md:h-100 overflow-hidden">

                                    <img
                                        alt="أسرار تصوير البورتريه: كيف تلتقط روح الشخصية"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        src={cards[1].src}

                                    />

                                </div>

                                <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">

                                    <div className="flex items-center gap-3 mb-4">

                                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                            بورتريه
                                        </span>

                                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                                            6 دقائق للقراءة
                                        </span>

                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                        أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                                    </h2>

                                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                                        اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                                        الموضوع الحقيقية.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">

                                        <div className="flex items-center gap-3">

                                            <img
                                                alt="محمد علي"
                                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                                src="./src/assets/images/photo-1500648767791-00dcc994a43e.jfif"

                                            />

                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    محمد علي
                                                </p>

                                                <p className="text-xs text-neutral-500">
                                                    ١٢ يناير ٢٠٢٦
                                                </p>
                                            </div>

                                        </div>

                                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            اقرأ المقال
                                        </span>

                                    </div>

                                </div>

                            </div>
                        </NavLink>

                    </article>


                    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">

                        <NavLink className="block"
                            to="/blog/landscape-photography-guide">
                            <div className="grid md:grid-cols-2 gap-0">

                                <div className="relative h-72 md:h-100 overflow-hidden">

                                    <img
                                        alt="دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        src={cards[2].src}

                                    />

                                </div>

                                <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">

                                    <div className="flex items-center gap-3 mb-4">

                                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                            مناظر طبيعية
                                        </span>

                                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                                            10 دقائق للقراءة
                                        </span>

                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                        دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
                                    </h2>

                                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                                        استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط
                                        جمال الطبيعة بعدستك.
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">

                                        <div className="flex items-center gap-3">

                                            <img
                                                alt="إبراهيم حسن"
                                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                                src="./src/assets/images/photo-1472099645785-5658abf4ff4e.jfif"

                                            />

                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    إبراهيم حسن
                                                </p>

                                                <p className="text-xs text-neutral-500">
                                                    ١٠ يناير ٢٠٢٦
                                                </p>
                                            </div>

                                        </div>

                                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            اقرأ المقال
                                        </span>

                                    </div>

                                </div>

                            </div>
                        </NavLink>

                    </article>

                </div>
            </div>
        </section>
        <Test />
        <section className="py-10 bg-[#0a0a0a] relative overflow-hidden">
            <div
                className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"
            ></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <PageHeader
                        badge="الأحدث"
                        title="أحدث المقالات"
                        description="محتوى جديد طازج من المطبعة"
                    />
                    <NavLink className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                        to="/blog">
                        عرض جميع المقالات

                        <svg
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </NavLink>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article
                        className="group card overflow-hidden border border-[#262626] rounded-2xl"
                        style={{ animationDelay: "0ms" }}
                    >
                        <NavLink className="block"
                            to="/blog/camera-settings-basics"
                            data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    src={cards[3].src}

                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                ></div>
                                <div className="absolute top-4 right-4">
                                    <span
                                        className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]"
                                    >تقنيات</span
                                    >
                                </div>
                            </div>
                            <div className="p-6">
                                <div
                                    className="flex items-center gap-3 text-sm text-neutral-500 mb-3"
                                >
                                    <span className="flex items-center gap-1"
                                    ><svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path></svg
                                        >7 دقائق للقراءة</span
                                    ><span className="w-1 h-1 bg-neutral-600 rounded-full"></span
                                    ><span>٨ يناير ٢٠٢٦</span>
                                </div>
                                <h3
                                    className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight"
                                >
                                    أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                                </h3>
                                <p
                                    className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed"
                                >
                                    افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم
                                    الكامل في صورك.
                                </p>
                                <div
                                    className="flex items-center justify-between pt-4 border-t border-[#262626]"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            alt="داود خالد"
                                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                            src={cards[20].src}
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-white">داود خالد</p>
                                            <p className="text-xs text-neutral-500">مدرب تصوير</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"
                                    >
                                        <svg
                                            className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </div>
                                </div></div>
                        </NavLink>
                    </article>
                    <article
                        className="group card overflow-hidden border border-[#262626] rounded-2xl"
                        style={{ animationDelay: "100ms" }}
                    >
                        <NavLink className="block"
                            to="/blog/photo-composition-rules"
                            data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    src={cards[4].src}
                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                ></div>
                                <div className="absolute top-4 right-4">
                                    <span
                                        className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]"
                                    >تقنيات</span
                                    >
                                </div>
                            </div>
                            <div className="p-6">
                                <div
                                    className="flex items-center gap-3 text-sm text-neutral-500 mb-3"
                                >
                                    <span className="flex items-center gap-1"
                                    ><svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path></svg
                                        >9 دقائق للقراءة</span
                                    ><span className="w-1 h-1 bg-neutral-600 rounded-full"></span
                                    ><span>٥ يناير ٢٠٢٦</span>
                                </div>
                                <h3
                                    className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight"
                                >
                                    قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                                </h3>
                                <p
                                    className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed"
                                >
                                    تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون
                                    لإنشاء صور مؤثرة بصرياً.
                                </p>
                                <div
                                    className="flex items-center justify-between pt-4 border-t border-[#262626]"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            alt="ليث محمود"
                                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                            src={cards[10].src}
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-white">ليث محمود</p>
                                            <p className="text-xs text-neutral-500">فنان بصري</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"
                                    >
                                        <svg
                                            className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </div>
                                </div></div
                            >
                        </NavLink>
                    </article>
                    <article
                        className="group card overflow-hidden border border-[#262626] rounded-2xl"
                        style={{ animationDelay: "200ms" }}
                    >
                        <NavLink className="block"
                            to="/blog/mobile-photography-tips"
                            data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    alt="تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    src={cards[5].src}
                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                ></div>
                                <div className="absolute top-4 right-4">
                                    <span
                                        className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]"
                                    >معدات</span
                                    >
                                </div>
                            </div>
                            <div className="p-6">
                                <div
                                    className="flex items-center gap-3 text-sm text-neutral-500 mb-3"
                                >
                                    <span className="flex items-center gap-1"
                                    ><svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path></svg
                                        >8 دقائق للقراءة</span
                                    ><span className="w-1 h-1 bg-neutral-600 rounded-full"></span
                                    ><span>٣ يناير ٢٠٢٦</span>
                                </div>
                                <h3
                                    className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight"
                                >
                                    تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك
                                </h3>
                                <p
                                    className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed"
                                >
                                    اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح
                                    والتقنيات.
                                </p>
                                <div
                                    className="flex items-center justify-between pt-4 border-t border-[#262626]"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            alt="جمال عبدالله"
                                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                            src={cards[6].src}
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-white">جمال عبدالله</p>
                                            <p className="text-xs text-neutral-500">مصور ومراجع تقني</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent"
                                    >
                                        <svg
                                            className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokelinecap="round"
                                                strokelinejoin="round"
                                                strokewidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div >
                        </NavLink>
                    </article>
                </div>
            </div>
        </section>

        <Form />
        <Footer />


    </>


}


