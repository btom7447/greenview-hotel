'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';

const roomOptions = ['Royal', 'Deluxe', 'Castle']; // Ensure this matches CheckAvailabilityForm

const ReservationsForm = ({ setCheckIn, setCheckOut, setSelectedRoom }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [checkInLocal, setCheckInLocal] = useState(today);
    const [checkOutLocal, setCheckOutLocal] = useState(tomorrow);
    const [selectedRoomLocal, setSelectedRoomLocal] = useState(roomOptions[1]);

    // Read data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('reservationData');
        if (savedData) {
        const { checkInDate, checkOutDate, selectedRoom } = JSON.parse(savedData);
        setCheckInLocal(new Date(checkInDate));
        setCheckOutLocal(new Date(checkOutDate));
        setSelectedRoomLocal(selectedRoom);
        }
    }, []);

    // Keep lifting state up
    useEffect(() => {
        setCheckIn(checkInLocal);
        setCheckOut(checkOutLocal);
        setSelectedRoom(selectedRoomLocal);
    }, [checkInLocal, checkOutLocal, selectedRoomLocal]);

  return (
    <form
      aria-label="Check Availability Form"
      className="w-full flex flex-wrap items-stretch bg-gray-100"
    >
      {/* Check-in */}
      <div className="w-full md:w-[25%] p-6 flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
        <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
          Check In
        </label>
        <DatePicker
          selected={checkInLocal}
          onChange={(date) => setCheckInLocal(date)}
          selectsStart
          startDate={checkInLocal}
          endDate={checkOutLocal}
          id="check-in"
          name="check-in"
          aria-label="Select check-in date"
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
        />
      </div>

      {/* Check-out */}
      <div className="w-full md:w-[25%] p-6 flex flex-col justify-center border-b border-gray-300 md:border-b-0 md:border-r">
        <label htmlFor="check-out" className="text-black text-2xl font-light mb-2">
          Check Out
        </label>
        <DatePicker
          selected={checkOutLocal}
          onChange={(date) => setCheckOutLocal(date)}
          selectsEnd
          startDate={checkInLocal}
          endDate={checkOutLocal}
          minDate={checkInLocal}
          id="check-out"
          name="check-out"
          aria-label="Select check-out date"
          className="cursor-pointer w-full py-3 focus:outline-none text-xl text-gray-700"
        />
      </div>

      {/* Room Type Dropdown */}
      <div className="w-full md:w-[25%] p-6">
        <label htmlFor="room-type" className="text-black text-2xl font-light mb-2">
          Room Type
        </label>
        <Listbox value={selectedRoomLocal} onChange={setSelectedRoomLocal}>
          <div className="relative">
            <Listbox.Button
              className="cursor-pointer w-full text-left py-3 focus:outline-none text-xl text-gray-700 flex items-center"
              aria-labelledby="Room type dropdown"
            >
              {selectedRoomLocal}
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
