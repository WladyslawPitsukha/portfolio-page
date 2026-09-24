"use client";

import Image from "next/image";

import Logo from "@/assets/img/unnamed.png";
import NavFuncItems from '@/components/NavFuncItems';
import { HandleScroll } from "@/utils/handleScroll";
import { arrayNavItems } from "@/constants/arrFuncItem";

export default function NavBar() {
    const activeSection = HandleScroll();

    return (
        <nav className="sticky top-0 z-20 flex h-screen w-[76px] shrink-0 flex-col border-r border-white/10 bg-[#111513]/90 backdrop-blur md:w-56 transition-all duration-300">
            <section className="flex h-28 items-center justify-center gap-3 border-b border-white/10 px-3 transition-all duration-300 md:justify-start md:px-6">
                <Image
                    className='transform transition-all duration-300 hover:scale-110 rounded-full' 
                    src={Logo}
                    alt='My logo'
                    width={52}
                    height={52}
                />
                <h1 className="hidden uppercase text-lg font-bold tracking-[0.25em] text-[var(--accent)] transition-all duration-300 md:block">
                    Me
                </h1>
            </section>
            <section className="flex h-full w-full flex-col items-start justify-between overflow-y-auto py-9 transition-all duration-300">
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