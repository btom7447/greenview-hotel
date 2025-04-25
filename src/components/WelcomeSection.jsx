import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
    return (
        <section
            className="bg-white py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 lg:pt-50"
            aria-labelledby="welcome-heading"
        >
            <div className="flex flex-col items-center text-center">
                <p className="text-[#E4BF3B] text-2xl md:text-3xl uppercase">Welcome to</p>
                <h2
                    id="welcome-heading"
                    className="text-black text-5xl md:text-7xl"
                >
                    Greenview Hotels Ltd.
                </h2>
            </div>

            <div className="mt-20 grid gap-10 4xl:gap-20 grid-cols-1 md:grid-cols-2 items-center">
                <div className="grid gap-2 grid-cols-2 grid-rows-2 w-full h-[350px] relative">
                    <div className="col-start-1 row-start-1 grid grid-cols-[1.3fr_1.4fr_1.2fr] grid-rows-3 relative">
                        <div className="col-span-3 row-start-2 row-span-2 relative">
                            <Image
                                src="/images/welcome-one.jpg"
                                alt="VIP Lounge at Greenview Hotel"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                unoptimized
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-start-2 row-start-1 grid grid-cols-3 grid-rows-3 relative">
                        <div className="col-span-2 row-span-3 relative">
                            <Image
                                src="/images/welcome-two.jpg"
                                alt="Reception area at Greenview Hotel"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-start-1 row-start-2 grid grid-cols-3 grid-rows-3 relative">
                        <div className="col-start-2 col-span-2 row-span-3 relative">
                            <Image
                                src="/images/welcome-three.jpg"
                                alt="Luxury suite at Greenview Hotel"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-start-2 row-start-2 grid grid-cols-3 grid-rows-3 relative">
                        <div className="col-span-3 row-span-2 relative">
                            <Image
                                src="/images/welcome-four.jpg"
                                alt="Greenview Hotel front view"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="mb-5 text-2xl text-black font-light leading-loose">
                        Welcome to Greenview Hotel Ltd, Uyo's premier luxury destination,
                        where sophistication meets elegance and exceptional service is our
                        hallmark. Our lavish accommodations are designed to provide the
                        ultimate retreat, offering plush beds, spacious living areas, and
                        stunning views of the city.
                    </p>
                    <p className="mb-5 text-2xl text-black font-light leading-loose">
                        At Greenview Hotel Ltd, we pride ourselves on delivering
                        personalized service that exceeds your every expectation. Whether
                        you're visiting Uyo for business or leisure, our hotel is the
                        perfect haven, offering a unique blend of luxury, comfort, and
                        hospitality that will make your stay truly unforgettable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;