import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";


const Breadcrumb = ({ title, subTitle, link }) => {
    return (
        <section
            className="relative h-[30dvh] md:h-[50dvh] w-full mt-90 xl:mt-80 px-7"
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
                    className="flex flex-wrap items-center justify-center gap-2 text-2xl"
                    aria-label="Breadcrumb"
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" className="">
                            Home
                        </Link>
                        <ChevronRight size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-2xl">
                        {subTitle && (
                            <div className="flex items-center gap-2">
                                <Link href={link && link.startsWith("/") ? link : "#"}>
                                    {subTitle}
                                </Link>
                                <ChevronRight size={24} />
                            </div>
                        )}
                        <span aria-current="page">{title}</span>
                        
                    </div>
                    
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;