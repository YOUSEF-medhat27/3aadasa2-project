export default function Search({ search, setSearch, selectedType, setSelectedType }) {

    const types = [
        "إضاءة",
        "بورتريه",
        "مناظر طبيعية",
        "تقنيات",
        "معدات"
    ];

    return (
        <>
            <div className="sticky top-20 z-40 bg-black backdrop-blur-xl border-b border-[#262626]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Search */}
                        <div className="relative w-full md:w-80 text-white">

                            <input
                                placeholder="ابحث في المقالات..."
                                className="input-dark w-full px-5 py-3 pr-12 bg-[#0A0A0A]/90 border border-[#262626] rounded-2xl"
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-2">

                            <button
                                onClick={() => setSelectedType("all")}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    selectedType === "all"
                                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                }`}
                            >
                                جميع المقالات
                            </button>

                            {types.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        selectedType === type
                                            ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                                            : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}