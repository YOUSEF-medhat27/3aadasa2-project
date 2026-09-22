import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import { cards } from "../Data/Data.jsx";

export default function Blog() {

    let [currentPage, setCurrentPage] = useState(1);

    let [search, setSearch] = useState("");
    let [selectedType, setSelectedType] = useState("all");

    let cardsPerPage = 6;

    let filteredCards = cards.filter((card) => {

        let matchesSearch =
            card.title.toLowerCase().includes(search.toLowerCase()) ||
            card.sectitle.toLowerCase().includes(search.toLowerCase());

        let matchesType =
            selectedType === "all" ||
            card.type === selectedType;

        return matchesSearch && matchesType;
    });

    let totalPages = Math.max(
        1,
        Math.ceil(filteredCards.length / cardsPerPage)
    );

    let firstCard = (currentPage - 1) * cardsPerPage;
    let lastCard = firstCard + cardsPerPage;

    let currentCards = filteredCards.slice(firstCard, lastCard);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedType]);

    let [view, setView] = useState("grid");

    return <>
        <Navbar />
        <Header
            badge="مدونتنا"
            title="استكشف "
            highlight="مقالاتنا"
            semititle=""
            description="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
            discovery={"اكتشف المقالات"}
            known={"اعرف المزيد"}
            showCards={false}
            showbtn={false}
        />
        <Search
            search={search}
            setSearch={setSearch}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
        />

        <section className="container-fluid bg-black px-6 md:px-10 lg:px-16 py-12 max-w-350 mx-auto" >
            <div className=" mb-8 flex items-center justify-between bg-black">
                <p className="text-neutral-400">
                    عرض <span className="font-bold text-white">{filteredCards.length}</span> مقالات
                </p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">

                        <button
                            onClick={() => setView("grid")}
                            className={`p-2 rounded-lg transition-all duration-300 ${view === "grid"
                                ? "bg-orange-500 text-white"
                                : "text-neutral-400 hover:text-white"
                                }`}
                            title="عرض شبكي"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 01 2 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={() => setView("list")}
                            className={`p-2 rounded-lg transition-all duration-300 ${view === "list"
                                ? "bg-orange-500 text-white"
                                : "text-neutral-400 hover:text-white"
                                }`}
                            title="عرض قائمة"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>

            <div
                className={
                    view === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "flex flex-col gap-6"
                }
            >
                {currentCards.map((item) => (
                    <Cards
                        key={item.link}
                        {...item}
                    />
                ))}
            </div>
        </section>
        <div className="flex justify-center items-center gap-2 bg-black">

            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === 1
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50"
                    }`}
            >
                <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <div className="flex items-center gap-1">

                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === page
                                ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                                : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

            </div>

            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === totalPages
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50"
                    }`}
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

        </div>
        <p className="text-center text-neutral-500 text-sm py-4 bg-black">
            صفحة {currentPage} من {totalPages}
        </p>


        <Footer />





    </>
}
