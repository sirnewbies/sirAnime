import Link from "next/link";
import * as React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return(
        <div className="bg-sky-700">
            <div className="container mx-auto px-4">
                <nav>
                    <div className="sm:flex justify-between items-center flex-wrap block">
                        <div className="brand py-4">
                            <a href="/" className="text-white text-2xl font-bold underline">
                                sirAnimeIndo
                            </a>
                        </div>
                        <InputSearch/>
                    </div>
                    <div className="flex justify-center items-center">
                        <ul className="grid text-white lg:grid-cols-8 gap-4 mlg:grid-cols-6 grid-cols-3 py-4">
                            <li>
                                <Link href="/" className="navbar-list">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/ongoing" className="navbar-list">
                                    Ongoing
                                </Link>
                            </li>
                            <li>
                                <Link href="/completed" className="navbar-list">
                                    Tamat
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/anime" className="navbar-list">
                                    Semua
                                </Link>
                            </li>
                            <li>
                                <Link href="/movie" className="navbar-list">
                                    Movie
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/genre" className="navbar-list">
                                    Genre
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar