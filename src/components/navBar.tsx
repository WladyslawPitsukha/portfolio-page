"use client";

import Image from "next/image";

import Logo from "@/assets/img/unnamed.png";
import NavFuncItems from '@/components/NavFuncItems';
import { HandleScroll } from "@/utils/handleScroll";
import { arrayNavItems } from "@/constants/arrFuncItem";

export default function NavBar() {
    const activeSection = HandleScroll();

    return (
        <nav className="flex flex-col sticky top-0 h-screen transition-all duration-300 hover:shadow-xl">
            <section className="flex items-center justify-center h-28 gap-5 bg-black transition-all duration-300 hover:bg-gray-900">
                <Image
                    className='transform transition-all duration-300 hover:scale-110 rounded-full' 
                    src={Logo}
                    alt='My logo'
                    width={70}
                    height={70}
                />
                <h1 className="uppercase text-white font-bold text-xl tracking-wider transition-all duration-300 hover:text-blue-500">
                    Me
                </h1>
            </section>
            <section className="flex flex-col items-start justify-between h-full py-9 w-13 bg-gray-800 overflow-y-auto transition-all duration-300">
                <div className="flex flex-col w-full">
                    {arrayNavItems.map((item, index) => (
                        <NavFuncItems
                            key={index}
                            {...item}
                            isActive={activeSection === item.text}
                        />
                    ))}
                </div>
            </section>
        </nav>
    );
}