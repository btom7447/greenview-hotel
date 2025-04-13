"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';

const guestOptions = [1, 2, 3, 4, 5];

const DetailsAvailabilityForm = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);
    const [guests, setGuests] = useState(1);

    return (
        <form
            aria-label="Check Availability Form"
            className="w-full gap-10 flex flex-col items-stretch bg-gray-100 p-10"
        >
            {/* Check-in */}
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="check-in" className="text-black text-2xl font-light mb-2">
                    Check In
                </label>
                <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    id="check-in"
                    name="check-in"
                    aria-label="Select check-in date"
                    className="cursor-pointer w-full p-5 focus:outline-none text-xl text-black bg-white"
                />
            </div>

            {/* Check-out */}
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
                    Check Out
                </label>
                <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn}
                    id="check-out"
                    name="check-out"
                    aria-label="Select check-out date"
                    className="cursor-pointer w-full p-5 focus:outline-none text-xl text-black bg-white"
                />
            </div>

            {/* Guests Dropdown */}
            <div className="w-full">
                <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
                    Guests
                </label>
                <Listbox value={guests} onChange={setGuests}>
                    <div className="relative" id="guests" role="listbox" aria-label="Select number of guests">
                        <Listbox.Button
                            className="cursor-pointer w-full text-left p-5 focus:outline-none text-xl text-black flex items-center bg-white"
                            aria-labelledby="guests"
                        >
                            {guests} Guest{guests > 1 ? 's' : ''}
                            <ChevronsUpDown className="w-5 h-5 absolute right-2 top-6 text-gray-500" />
                                </Listbox.Button>
                            <Listbox.Options className="absolute mt-6 w-full bg-white border border-gray-300 shadow-md z-10">
                            {guestOptions.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    value={option}
                                    className={({ active }) =>
                                        `cursor-pointer p-5 text-xl ${active ? 'bg-[#E4BF3B] text-white' : 'text-black'}`
                                    } 
                                >
                                    {({ selected }) => (
                                        <div className="flex justify-between items-center">
                                            {option} Guest{option > 1 ? 's' : ''}
                                            {selected && <CheckIcon className="w-4 h-4 text-white" />}
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Submit Button */}
            <div className="w-full">
                <button
                type="submit"
                className="w-full h-full bg-[#E4BF3B] hover:bg-black hover:text-white text-black text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer"
                aria-label="Submit reservation request"
                >
                Make Reservation
                </button>
            </div>
        </form>
    )
}

export default DetailsAvailabilityForm