'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';

const guestOptions = [1, 2, 3, 4, 5];

const CheckAvailabilityForm = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(1);

  return (
    <form
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
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          id="check-in"
          name="check-in"
          aria-label="Select check-in date"
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-[#E4BF3B]"
        />
      </div>

      {/* Check-out */}
      <div className="w-full md:w-[25%] p-6 bg-white flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
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
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-[#E4BF3B]"
        />
      </div>

      {/* Guests Dropdown */}
      <div className="w-full md:w-[25%] p-6 bg-white">
        <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
          Guests
        </label>
        <Listbox value={guests} onChange={setGuests}>
          <div className="relative" id="guests" role="listbox" aria-label="Select number of guests">
            <Listbox.Button
              className="cursor-pointer w-full text-left py-3 focus:outline-none text-xl text-[#E4BF3B] flex items-center"
              aria-labelledby="guests"
            >
              {guests} Guest{guests > 1 ? 's' : ''}
              <ChevronsUpDown className="w-5 h-5 absolute right-2 top-2.5 text-gray-500" />
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
      <div className="w-full md:w-[25%]">
        <button
          type="submit"
          className="w-full h-full bg-[#E4BF3B] hover:bg-black hover:text-white text-black text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer"
          aria-label="Submit reservation request"
        >
          Make Reservation
        </button>
      </div>
    </form>
  );
};

export default CheckAvailabilityForm;