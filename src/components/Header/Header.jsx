import { NavLink } from "react-router-dom";
import PageHeader from "../page header/Pageheader";

export default function Header({ badge,title, highlight,semititle,description,showCards,showbtn, discovery, known, icon1, icon2, icon3, icon4, num1, num2, num3, num4, sub1, sub2, sub3, sub4 }) {
    return <>
        <section className="relative min-h-[90vh] flex items-center mt-5 overflow-hidden pt-10 bg-[#0a0a0a]">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>


            <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl blob"></div>

            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-150 bg-orange-500/5 rounded-full blur-3xl"></div>


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                <div className="text-center max-w-4xl mx-auto">


                    <PageHeader
                        badge={badge}
                        title={title}
                        highlight={ highlight}
                        semititle={semititle}
                        description={description}
                    />


               {showbtn &&     <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 mt-10">

                        <NavLink className="btn-primary inline-flex items-center justify-center gap-2 group bg-linear-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full text-white font-bold"
                            to="/blog">
                            <span> {discovery}</span>

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
                        <NavLink className="btn-secondary inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-white font-bold"
                            to="/about">
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
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <span> {known}</span>

                        </NavLink>

                    </div>}


                    {showCards && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

                            {/* Card 1 */}
                            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-xl flex items-center justify-center text-orange-500 mb-1">
                                    {icon1}
                                </div>

                                <span className="text-3xl font-bold text-orange-500">
                                    {num1}
                                </span>

                                <span className="text-sm text-neutral-400">
                                    {sub1}
                                </span>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-xl flex items-center justify-center text-orange-500 mb-1">
                                    {icon2}
                                </div>

                                <span className="text-3xl font-bold text-orange-500">
                                    {num2}
                                </span>

                                <span className="text-sm text-neutral-400">
                                    {sub2}
                                </span>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-xl flex items-center justify-center text-orange-500 mb-1">
                                    {icon3}
                                </div>

                                <span className="text-3xl font-bold text-orange-500">
                                    {num3}
                                </span>

                                <span className="text-sm text-neutral-400">
                                    {sub3}
                                </span>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-xl flex items-center justify-center text-orange-500 mb-1">
                                    {icon4}
                                </div>

                                <span className="text-3xl font-bold text-orange-500">
                                    {num4}
                                </span>

                                <span className="text-sm text-neutral-400">
                                    {sub4}
                                </span>
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </section>

    </>
}
