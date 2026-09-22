import { NavLink } from "react-router-dom";
import Cardabout from "../cardabout/cardabout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import PageHeader from "../page header/Pageheader";
import { cards } from "../Data/Data.jsx";

export default function About() {
    return <>

        <Navbar />

        <Header
            badge="من نحن"
            title="مهمتنا هي "
            highlight="الإعلام والإلهام"
            semititle=" "
            description="مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة."
            discovery={"اكتشف المقالات"}
            known={"اعرف المزيد"}
            showbtn={false}
            showCards={true}
            icon1={<i className="fa-solid fa-users  text-2xl text-orange-500"></i>}
            icon2={<i className="fa-solid fa-newspaper  text-2xl text-orange-500"></i>}
            icon3={<i className="fa-solid fa-pen-nib text-2xl text-orange-500"></i>}
            icon4={<i className="fa-solid fa-book-open text-2xl"></i>}
            num1={"+2مليون"}
            num2={"+500"}
            num3={"+50"}
            num4={"+15"}
            sub1={"قارئ "}
            sub2={"مقالة منشورة"}
            sub3={"كاتب خبير"}
            sub4={"تصنيف"}
        />
        <section className="py-20 bg-[#111111] border-y border-[#262626]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3"
                    >
                        <span
                            className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"
                        ></span
                        >قيمنا<span
                            className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"
                        ></span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        المبادئ التي توجه كل ما نقوم بإنشائه
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        ></div>
                        <div className="relative">
                            <i
                                className="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 block"
                            ></i>
                            <h3
                                className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors"
                            >
                                الجودة أولاً
                            </h3>
                            <p className="text-neutral-400 text-sm">محتوى مدروس ومكتوب بخبرة</p>
                        </div>
                    </div>
                    <div
                        className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        ></div>
                        <div className="relative">
                            <i
                                className="fa-solid fa-bolt text-4xl text-orange-500 mb-4 block"
                            ></i>
                            <h3
                                className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors"
                            >
                                تركيز عملي
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                أمثلة واقعية يمكنك تطبيقها اليوم
                            </p>
                        </div>
                    </div>
                    <div
                        className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        ></div>
                        <div className="relative">
                            <i
                                className="fa-solid fa-handshake text-4xl text-orange-500 mb-4 block"
                            ></i>
                            <h3
                                className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors"
                            >
                                المجتمع
                            </h3>
                            <p className="text-neutral-400 text-sm">تعلم مع آلاف المصورين</p>
                        </div>
                    </div>
                    <div
                        className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        ></div>
                        <div className="relative">
                            <i
                                className="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 block"
                            ></i>
                            <h3
                                className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors"
                            >
                                دائماً محدث
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                أحدث الاتجاهات وأفضل الممارسات
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="mx-auto text-center bg-[#0a0a0a] py-16">
            <PageHeader
                badge=" فريقنا"
                title="تعرف على كتابنا"
                description="فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع."
            />
            <section className="bg-black px-6 md:px-10 lg:px-16 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    <Cardabout
                        src={cards[3].src}
                        name={"سالم أحمد"}
                        job={"مصور محترف"}
                    />
                    <Cardabout
                        src={cards[2].src}
                        name={" محمد علي"}
                        job={" مصور بورتريه"}
                    />
                    <Cardabout
                        src={cards[1].src}
                        name={"إبراهيم حسن "}
                        job={" مصور طبيعة"}
                    />
                    <Cardabout
                        src={cards[0].src}
                        name={"داود خالد"}
                        job={" مدرب تصوير"}
                    />
                    <Cardabout
                        src={cards[4].src}
                        name={" ليث محمود"}
                        job={" فنان بصري"}
                    />
                    <Cardabout
                        src={cards[5].src}
                        name={"جمال عبدالله"}
                        job={" مصور ومراجع تقني"}
                    />
                    <Cardabout
                        src={cards[6].src}
                        name={"خالد الفيصل "}
                        job={" مصور فلكي"}
                    />
                    <Cardabout
                        src={cards[7].src}
                        name={"نادر سعيد"}
                        job={" مصور شوارع"}
                    />
                    <Cardabout
                        src={cards[10].src}
                        name={"هاني الشمري"}
                        job={"مصور طعام "}
                    />
                    <Cardabout
                        src={cards[8].src}
                        name={"سامي الحربي"}
                        job={"خبير تعديل صور"}
                    />
                    <Cardabout
                        src={cards[9].src}
                        name={"فارس العلي"}
                        job={"فنان فوتوغرافي "}
                    />
                    <Cardabout
                        src={cards[11].src}
                        name={" عمر الراشد"}
                        job={"مصور حياة برية "}
                    />

                </div>
            </section>
        </div>
        <section
            className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"
                ></div>
                <div
                    className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"
                ></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    لديك أسئلة؟ دعنا نتحدث!
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
                    تريد فقط إلقاء التحية، لا تتردد في التواصل.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <NavLink to="mailto:hello@adasah.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokelinecap="round"
                                strokelinejoin="round"
                                strokewidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path></svg
                        >تواصل معنا
                    </NavLink>


                    <NavLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                        to="/blog"
                        data-discover="true">
                        تصفح المقالات
                    </NavLink>
                </div>
            </div>
        </section>

       
        <Footer />

    </>
}
