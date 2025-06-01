"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const Breadcrumb = ({ title, subTitle, link }) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/`
            },
            subTitle && link && {
                "@type": "ListItem",
                "position": 2,
                "name": subTitle,
                "item": `${baseUrl}${link}`
            },
            {
                "@type": "ListItem",
                "position": subTitle ? 3 : 2,
                "name": title,
                "item": `${baseUrl}${link || ''}`
            }
        ].filter(Boolean)
    };

    return (
        <section
            className="relative h-[30dvh] md:h-[50dvh] w-full mt-90 xl:mt-80 px-7"
            aria-label="Breadcrumb Navigation"
        >
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            </Head>

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
                        <Link href="/" aria-label="Go to Home Page">Home</Link>
                        <ChevronRight size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-base lg:text-2xl">
                        {subTitle && (
                            <div className="flex items-center gap-2">
                                <Link href={link && link.startsWith("/") ? link : "#"} aria-label={`Go to ${subTitle} Page`}>
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
