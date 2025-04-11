import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";


const Breadcrumb = ({ title }) => {
    return (
        <section
            className="relative h-[30dvh] md:h-[50dvh] w-full mt-90 xl:mt-80"
            aria-label="Breadcrumb Navigation"
        >
            <div
                className="absolute inset-0 bg-cover bg-bottom"
                style={{
                    backgroundImage: "url('/images/breadcrumb-image.jpg')",
                }}
                role="presentation"
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                <nav
                    className="flex items-center gap-2 text-2xl"
                    aria-label="Breadcrumb"
                >
                    <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                        Home
                    </Link>
                    <ChevronRight size={24} />
                    <span aria-current="page">{title}</span>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;