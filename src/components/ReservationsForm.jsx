'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDateRange } from '@/store/reservationSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';

const roomOptions = ['Royal', 'Deluxe', 'Castle'];

const ReservationsForm = ({ 
    checkIn, 
    checkOut, 
    selectedRoom, 
    setCheckIn, 
    setCheckOut, 
    setSelectedRoom 
}) => {
    const dispatch = useDispatch();
    const [localCheckIn, setLocalCheckIn] = useState(checkIn);
    const [localCheckOut, setLocalCheckOut] = useState(checkOut);
    const [localSelectedRoom, setLocalSelectedRoom] = useState(selectedRoom);

    useEffect(() => {
        setLocalCheckIn(checkIn);
        setLocalCheckOut(checkOut);
        setLocalSelectedRoom(selectedRoom);
    }, [checkIn, checkOut, selectedRoom]);

    // Update Redux when form inputs change
    useEffect(() => {
        dispatch(setDateRange({ 
        check_in: localCheckIn?.toISOString(), 
        check_out: localCheckOut?.toISOString() 
        }));
    }, [localCheckIn, localCheckOut, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckIn(localCheckIn);
        setCheckOut(localCheckOut);
        setSelectedRoom(localSelectedRoom);
    };

    return (
        <form
            onSubmit={handleSubmit}
            aria-label="Check Availability Form"
            className="w-full flex flex-wrap items-stretch bg-gray-100"
        >
            {/* Check-in */}
            <div className="w-full md:w-[25%] p-6 flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
                <label htmlFor="check-in" className="text-black text-2xl font-light mb-2">
                    Check In
                </label>
                <DatePicker
                    selected={localCheckIn}
                    onChange={(date) => setLocalCheckIn(date)}
                    selectsStart
                    startDate={localCheckIn}
                    endDate={localCheckOut}
                    minDate={new Date()}
                    className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
                />
            </div>

            {/* Check-out */}
            <div className="w-full md:w-[25%] p-6 flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
                <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
                    Check Out
                </label>
                <DatePicker
                    selected={localCheckOut}
                    onChange={(date) => setLocalCheckOut(date)}
                    selectsEnd
                    startDate={localCheckIn}
                    endDate={localCheckOut}
                    minDate={localCheckIn}
                    className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
                />
            </div>

            {/* Room Type Dropdown */}
            <div className="w-full md:w-[25%] p-6">
                <label htmlFor="room-type" className="text-black text-2xl font-light mb-2">
                    Room Type
                </label>
                <Listbox value={localSelectedRoom} onChange={setLocalSelectedRoom}>
                    <div className="relative">
                        <Listbox.Button
                            className="cursor-pointer w-full text-left py-3 focus:outline-none text-xl text-gray-700 flex items-center"
                            aria-labelledby="Room type dropdown"
                        >
                            {localSelectedRoom}
                            <ChevronsUpDown className="w-5 h-5 absolute right-2 top-2.5 text-gray-500" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-6 w-full bg-white border border-gray-300 shadow-md z-10">
                            {roomOptions.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    value={option}
                                    className={({ active }) =>
                                        `cursor-pointer p-5 text-xl ${active ? 'bg-gray-700 text-white' : 'text-black'}`
                                    }
                                >
                                    {({ selected }) => (
                                        <div className="flex justify-between items-center">
                                            {option}
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
            <div className="w-full md:w-[25%]">
                <button
                    type="submit"
                    className="w-full h-full bg-[#E4BF3B] hover:bg-black hover:text-white text-black text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer"
                    aria-label="Submit reservation request"
                >
                    Check Availability
                </button>
            </div>
        </form>
    );
};

export default ReservationsForm;
