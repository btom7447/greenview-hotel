"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { addReservation, setDateRange } from "@/store/reservationSlice";

const guestOptions = [1, 2, 3, 4, 5];

const DetailsAvailabilityForm = ({ room }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);
    const [guests, setGuests] = useState(1);
    const [totalDays, setTotalDays] = useState(1);
    const [totalCost, setTotalCost] = useState(room.rate);

    const dispatch = useDispatch();
    const dateRange = useSelector(state => state.reservation.dateRange);

    useEffect(() => {
        if (dateRange?.check_in && dateRange?.check_out) {
            setCheckIn(new Date(dateRange.check_in));
            setCheckOut(new Date(dateRange.check_out));
        } else {
            setCheckIn(today);
            setCheckOut(tomorrow);
        }
    }, [dateRange]);

    useEffect(() => {
        const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
        setTotalDays(days);
        setTotalCost(days * room.rate);
    }, [checkIn, checkOut, room.rate]);

    const updateDateRange = (newCheckIn, newCheckOut) => {
        dispatch(setDateRange({
            check_in: newCheckIn.toISOString(),
            check_out: newCheckOut.toISOString(),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert Date objects to ISO strings before dispatching
        dispatch(addReservation({
            roomId: room.id,
            roomType: room.type,
            roomRate: room.rate,
            checkIn: checkIn.toISOString(),
            checkOut: checkOut.toISOString(),
            guests,
            totalCost, 
            totalDays
        }));
    };

    return (
        <form
            aria-label="Check Availability Form"
            className="w-full gap-10 flex flex-col items-stretch bg-gray-100 p-10"
            onSubmit={handleSubmit}
        >
            <p className='text-black text-2xl font-semibold'>Confirm Reservation Details</p>

            {/* Check-in */}
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="check-in" className="text-black text-2xl font-light mb-2">
                    Check In
                </label>
                <DatePicker
                    selected={checkIn}
                    onChange={(date) => {
                        setCheckIn(date);
                        updateDateRange(date, checkOut);
                    }}
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
                    onChange={(date) => {
                        setCheckOut(date);
                        updateDateRange(checkIn, date);
                    }}
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

            {/* Cost Per Night */}
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="totalCost" className="text-black text-2xl font-light mb-2 flex items-center space-x-3">
                    Total Stay Cost
                    <span className='ml-5 text-[#E4BF3B]'>
                        {totalDays} Night{totalDays > 1 ? 's' : ''}
                    </span>
                </label>
                <input 
                    type="text" 
                    name="totalCost" 
                    id="totalCost" 
                    value={`₦ ${totalCost.toLocaleString()}`} 
                    readOnly 
                    className='cursor-not-allowed w-full p-5 focus:outline-none text-xl text-black bg-white'
                />
            </div>

            {/* Submit Button */}
            <div className="w-full flex gap-10 items-stretch ">
                <input 
                    type="text" 
                    name="totalDays" 
                    id="totalDays" 
                    value={totalDays.toLocaleString()} 
                    readOnly 
                    className='cursor-pointer w-20 p-5 focus:outline-none text-xl text-black text-center bg-white border-1 border-[#E4BF3B]'
                />
                <button
                    type="submit"
                    className="w-full h-full bg-[#E4BF3B] uppercase hover:bg-black hover:text-white text-black text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer"
                    aria-label="Submit reservation request"
                >
                    Book
                </button>
            </div>
        </form>
    )
}

export default DetailsAvailabilityForm;
