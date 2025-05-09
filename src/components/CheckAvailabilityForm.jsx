'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange } from '@/store/reservationSlice';

const roomOptions = ["Royal", "Deluxe", "Castle"];

const CheckAvailabilityForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Access dateRange from Redux store
  const dateRange = useSelector((state) => state.reservation.dateRange);

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // If dateRange is available, use it; otherwise, use today and tomorrow
    if (dateRange && dateRange.check_in && dateRange.check_out) {
      setCheckIn(new Date(dateRange.check_in));
      setCheckOut(new Date(dateRange.check_out));
    } else {
      setCheckIn(today);
      setCheckOut(tomorrow);
    }
  }, [dateRange]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save selected dates to Redux
    dispatch(setDateRange({
      check_in: checkIn.toISOString(),
      check_out: checkOut.toISOString(),
    }));

    // Navigate with query parameters
    const queryString = `?selectedRoom=${encodeURIComponent(selectedRoom)}&checkInDate=${encodeURIComponent(checkIn.toISOString())}&checkOutDate=${encodeURIComponent(checkOut.toISOString())}`;
    router.push(`/reservations${queryString}`);
  };

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    // Update Redux with the new check-in date
    dispatch(setDateRange({
      check_in: date.toISOString(),
      check_out: checkOut.toISOString(),
    }));
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
    // Update Redux with the new check-out date
    dispatch(setDateRange({
      check_in: checkIn.toISOString(),
      check_out: date.toISOString(),
    }));
  };

  if (!checkIn || !checkOut) return null;

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Check Availability Form"
      className="w-full md:w-[80%] flex flex-wrap items-stretch md:absolute md:left-1/2 md:bottom-[-50px] md:transform md:-translate-x-1/2 shadow-md"
    >
      {/* Check-in */}
      <div className="w-full md:w-[25%] p-6 bg-white flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
        <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
          Check In
        </label>
        <DatePicker
          selected={checkIn}
          onChange={handleCheckInChange}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          id="check-in"
          name="check-in"
          aria-label="Select check-in date"
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
        />
      </div>

      {/* Check-out */}
      <div className="w-full md:w-[25%] p-6 bg-white flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
        <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
          Check Out
        </label>
        <DatePicker
          selected={checkOut}
          onChange={handleCheckOutChange}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          id="check-out"
          name="check-out"
          aria-label="Select check-out date"
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
        />
      </div>

      {/* Room Type Dropdown */}
      <div className="w-full md:w-[25%] p-6 bg-white">
        <label htmlFor="room-type" className="text-black text-2xl font-light mb-2">
          Room Type
        </label>
        <Listbox value={selectedRoom} onChange={setSelectedRoom}>
          <div className="relative">
            <Listbox.Button
              className="cursor-pointer w-full text-left py-3 focus:outline-none text-xl text-gray-700 flex items-center"
              aria-labelledby="Room type dropdown"
            >
              {selectedRoom}
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

export default CheckAvailabilityForm;
