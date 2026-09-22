import { NavLink, useParams } from "react-router-dom";
import { cards } from "../Data/Data.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Cards from "../Cards/Cards.jsx";


const defaultSections = [
    {
        id: "sec-1",
        icon: "fa-comments",
        title: "التواصل مع الموضوع",
        text: "قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة، الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع."
    },
    {
        id: "sec-2",
        icon: "fa-camera-retro",
        title: "اختيار العدسة المناسبة",
        text: "عدسات 85mm و50mm هي الكلاسيكيات لتصوير هذا النوع، توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة."
    },
    {
        id: "sec-3",
        icon: "fa-sun",
        title: "الإضاءة الطبيعية",
        text: "الإضاءة الجانبية الناعمة بجانب نافذة تخلق تدرجات لونية طبيعية وتُبرز ملامح الوجه دون قسوة."
    },
    {
        id: "sec-4",
        icon: "fa-eye",
        title: "التركيز على العيون",
        text: "العيون هي نافذة الروح، تأكد دائماً من أن العين الأقرب للكاميرا حادة وممركزة باستخدام نقطة تركيز واحدة."
    },
    {
        id: "sec-5",
        icon: "fa-layer-group",
        title: "الخلفية والتكوين",
        text: "اختر خلفية بسيطة لا تشتت الانتباه، واستخدم قاعدة الأثلاث لوضع العين في النقاط القوية للصورة."
    },
    {
        id: "sec-6",
        icon: "fa-flag-checkered",
        title: "الخلاصة",
        text: "المقال الناجح يحكي قصة، عندما تجمع بين التقنية والتواصل الإنساني تخلق صوراً خالدة."
    }
];

export default function Details() {

    const { slug } = useParams();


    const card = cards.find((item) => {
        return item.link === `/blog/${slug}`;
    });

    const sections = card.sections || defaultSections;


    const tags = card.tags || [
        card.type,
        "تصوير",
        "فوتوغرافيا"
    ];

    const related = cards
        .filter((item) => {
            return item.type === card.type && item.link !== card.link;
        })
        .slice(0, 3);

    return (
        <>
            <Navbar />

            <main className="grow pt-20">

                <article className="bg-[#0a0a0a] min-h-screen">


                    <div className="relative h-[60vh] min-h-125 overflow-hidden">

                        <img
                            src={card.src}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">

                            <div className="max-w-5xl mx-auto">


                                <div className="flex flex-wrap items-center gap-3 mb-6">

                                    <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                                        {card.type}
                                    </span>

                                    <div className="flex items-center gap-4 text-white/70 text-sm">

                                        <span className="flex items-center gap-2">
                                            <i className="fa-regular fa-calendar"></i>
                                            {card.time}
                                        </span>

                                        <span className="flex items-center gap-2">
                                            <i className="fa-regular fa-clock"></i>
                                            {card.min} دقائق للقراءة
                                        </span>

                                    </div>

                                </div>


                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                                    {card.title}
                                </h1>


                                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">

                                    <img
                                        src={card.peopleimg}
                                        alt={card.people}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                                    />

                                    <div>

                                        <p className="font-bold text-white">
                                            {card.people}
                                        </p>

                                        <p className="text-sm text-white/60">
                                            {card.job}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                        <div className="grid lg:grid-cols-[1fr_300px] gap-12">


                            <div>


                                <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">

                                    <p className="text-lg text-neutral-200 leading-relaxed italic">
                                        "{card.sectitle}"
                                    </p>

                                </div>



                                <div className="prose-custom">

                                    {sections.map((sec) => (

                                        <div
                                            key={sec.id}
                                            id={sec.id}
                                            className="scroll-mt-28"
                                        >

                                            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mt-14 mb-6">

                                                <span className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg shrink-0">

                                                    <i
                                                        className={`fa-solid ${sec.icon} text-white text-sm`}
                                                    ></i>

                                                </span>

                                                {sec.title}

                                            </h2>

                                            <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                                                {sec.text}
                                            </p>

                                        </div>

                                    ))}

                                </div>



                                <div className="flex flex-wrap items-center gap-3 mt-14 pt-8 border-t border-[#262626]">

                                    <span className="flex items-center gap-2 text-white font-bold">

                                        <i className="fa-solid fa-tag text-orange-500"></i>

                                        الوسوم

                                    </span>

                                    {tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-300"
                                        >
                                            #{tag}
                                        </span>

                                    ))}

                                </div>



                                <div className="flex items-center justify-between flex-wrap gap-4 mt-8 pt-8 border-t border-[#262626]">

                                    <span className="flex items-center gap-2 text-white font-bold">

                                        <i className="fa-solid fa-share-nodes text-orange-500"></i>

                                        شارك المقال

                                    </span>

                                    <div className="flex items-center gap-3">

                                        {[
                                            "fa-link",
                                            "fa-whatsapp",
                                            "fa-linkedin-in",
                                            "fa-x-twitter"
                                        ].map((icon) => (

                                            <button
                                                key={icon}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161616] border border-[#262626] text-white hover:bg-orange-500 hover:border-transparent transition-colors"
                                            >

                                                <i
                                                    className={`fa-${icon.startsWith("fa-link")
                                                        ? "solid"
                                                        : "brands"
                                                        } ${icon}`}
                                                ></i>

                                            </button>

                                        ))}

                                    </div>

                                </div>



                                <div className="flex items-center gap-4 mt-8 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                                    <img
                                        src={card.peopleimg}
                                        alt={card.people}
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500/50"
                                    />

                                    <div>

                                        <p className="text-xs text-orange-500 font-bold mb-1">
                                            كاتب المقال
                                        </p>

                                        <p className="font-bold text-white">
                                            {card.people}
                                        </p>

                                        <p className="text-sm text-neutral-500">
                                            {card.job}
                                        </p>

                                        <p className="text-sm text-neutral-400 mt-2">
                                            مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                        </p>

                                    </div>

                                </div>

                            </div>



                            <aside>

                                <div className="lg:sticky lg:top-24 space-y-6">

                                    {/* Table of Contents */}

                                    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                                        <p className="flex items-center gap-2 text-white font-bold mb-4">

                                            <span className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-lg">

                                                <i className="fa-solid fa-list text-white text-xs"></i>

                                            </span>

                                            محتويات المقال

                                        </p>

                                        <ul className="space-y-3">

                                            {sections.map((sec, i) => (

                                                <li key={sec.id}>

                                                    <NavLink to={`#${sec.id}`}
                                                        className="flex items-center justify-between text-sm text-neutral-400 hover:text-orange-500 transition-colors"
                                                    >
                                                        {sec.title}

                                                        <span className="w-5 h-5 flex items-center justify-center text-xs bg-[#0a0a0a] rounded-full">
                                                            {i + 1}
                                                        </span>
                                                    </NavLink>

                                                </li>

                                            ))}

                                        </ul>

                                    </div>

                                    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                                        <div className="grid grid-cols-2 gap-4">

                                            <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                                                <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>

                                                <p className="text-white font-bold">
                                                    {card.min} دقائق
                                                </p>

                                                <p className="text-neutral-500 text-xs">
                                                    وقت القراءة
                                                </p>

                                            </div>


                                            <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                                                <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>

                                                <p className="text-white font-bold text-sm">
                                                    {card.time}
                                                </p>

                                                <p className="text-neutral-500 text-xs">
                                                    تاريخ النشر
                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="p-6 bg-linear-to-br from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20 text-center">

                                        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-orange-500 rounded-xl mb-4">

                                            <i className="fa-regular fa-envelope text-white"></i>

                                        </div>

                                        <p className="text-white font-bold mb-1">
                                            لا تفوّت جديدنا
                                        </p>

                                        <p className="text-neutral-400 text-sm mb-4">
                                            اشترك للحصول على أحدث المقالات
                                        </p>

                                        <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded-xl">
                                            تصفح المزيد
                                        </button>

                                    </div>

                                </div>

                            </aside>

                        </div>

                    </div>

                    {related.length > 0 && (

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

                            <div className="flex items-center justify-between mb-8">

                                <NavLink to="/blog"
                                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>

                                    عرض الكل

                                </NavLink>

                                <div className="flex items-center gap-3 text-right">

                                    <div>

                                        <p className="text-white font-bold text-lg">
                                            مقالات قد تعجبك
                                        </p>

                                        <p className="text-neutral-500 text-sm">
                                            استكشف المزيد من المحتوى المميز
                                        </p>

                                    </div>

                                    <span className="w-10 h-10 flex items-center justify-center bg-[#161616] border border-[#262626] rounded-xl">

                                        <i className="fa-regular fa-images text-orange-500"></i>

                                    </span>

                                </div>

                            </div>


                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                {related.map((item) => (
                                    <Cards
                                        key={item.link}
                                        {...item}
                                    />
                                ))}

                            </div>

                        </div>

                    )}

                </article>

            </main>

            <Footer />
        </>
    );
}