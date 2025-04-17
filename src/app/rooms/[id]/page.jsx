"use client";

import { use, useMemo } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import roomsData from '../../../data/rooms.json';
import Breadcrumb from '@/components/Breadcrumb';
import RoomCarousel from '@/components/RoomCarousel';
import DetailsAvailabilityForm from '@/components/DetailsAvailabilityForm';
import CompareRooms from '@/components/CompareRooms';

const RoomDetailsPage = ({ params: asyncParams }) => {
    const params = use(asyncParams);
    const id = useMemo(() => Number(params?.id), [params?.id]);

    const room = useMemo(() => {
        return roomsData.find((room) => room.id === id);
    }, [id]);

    if (!room) return notFound();

    return (
        <main className="bg-white">
            <Breadcrumb title={room.type} subTitle="Rooms & Suites" link="/rooms" />

            <section className="py-10 md:py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 grid gap-10 grid-cols-1 xl:grid-cols-3 items-start">
                {/* Main content */}
                <article className="col-span-1 xl:col-span-2">
                    <RoomCarousel room={room} />

                    <header className="mt-10">
                        <h1 className="text-4xl font-bold text-black">
                            {room.type}
                            <span className="ml-5 text-[#E4BF3B]">
                                ₦{room.rate.toLocaleString()}
                            </span>
                        </h1>
                        <p className="mt-5 text-2xl font-light leading-loose text-gray-700">
                            {room.description}
                        </p>
                        <p className="mt-5 text-2xl font-light leading-loose text-gray-700">
                            {room.more_details?.[0]}
                        </p>
                    </header>

                    {/* Amenities */}
                    {room.amenities?.length > 0 && (
                        <section
                            aria-labelledby="amenities-heading"
                            className="w-full mt-10 border border-gray-300 p-10"
                        >
                            <h2 id="amenities-heading" className="sr-only">
                                Amenities
                            </h2>
                            <ul
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"
                                role="list"
                            >
                                {room.amenities.map((amenity, index) => (
                                    <li key={index} className="flex items-start gap-3" role="listitem">
                                        <span
                                            className="w-5 h-5 p-3 rounded-full bg-[#E4BF3B] text-white flex items-center justify-center text-xs mt-1"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                        <span className="text-xl text-gray-700">{amenity}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    <p className="mt-5 text-2xl font-light leading-loose text-gray-700">
                        {room.more_details?.[1]}
                    </p>

                    {/* Guest Access */}
                    {room.privilages?.length > 0 && (
                        <section aria-labelledby="guest-access-heading" className="mt-10">
                            <h2 id="guest-access-heading" className="text-3xl font-semibold text-black">
                                Guest Access
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                                {room.privilages.map((privilege, index) => (
                                    <figure
                                        key={index}
                                        className="flex flex-col items-center text-center"
                                    >
                                        <Image
                                            src={privilege.image}
                                            alt={privilege.title}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                            loading="lazy"
                                            unoptimized
                                        />
                                        <figcaption className="text-xl font-light text-black mt-2">
                                            {privilege.title}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>
                    )}
                    <p className="mt-5 text-2xl font-light leading-loose text-gray-700">
                        {room.more_details?.[2]}
                    </p>
                </article>

                {/* Sidebar */}
                <aside className="col-span-1 flex flex-col gap-10">
                    <DetailsAvailabilityForm />
                    <CompareRooms room={room} id={id} />
                </aside>
            </section>
        </main>
    );
};

export default RoomDetailsPage;