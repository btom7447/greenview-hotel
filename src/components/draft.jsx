'use client';

import React, { useState } from 'react';
import { fetchRooms } from '../lib/airtable';

const DetailAvailabilityForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('Royal');
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleCheckAvailability = async () => {
    if (!checkIn || !checkOut || !selectedRoom) {
      console.warn('Please provide all inputs.');
      return;
    }

    try {
      const rooms = await fetchRooms();

      const userCheckIn = new Date(checkIn);
      const userCheckOut = new Date(checkOut);
      const selectedType = selectedRoom.toLowerCase();

      // Filter rooms by type and check for date conflicts as per second snippet pattern
      const filtered = rooms.filter((room) => {
        if (!room || !room.fields) return false;

        // Check room type match
        const typeMatch = room.fields.type?.toLowerCase() === selectedType;

        let noDateConflict = true;

        // If the room has existing booking dates, check for conflict
        if (room.fields.check_in && room.fields.check_out) {
          const roomCheckIn = new Date(room.fields.check_in);
          const roomCheckOut = new Date(room.fields.check_out);

          // Overlap condition:
          // Conflict if userCheckIn < roomCheckOut AND userCheckOut > roomCheckIn
          const conflict = userCheckIn < roomCheckOut && userCheckOut > roomCheckIn;

          noDateConflict = !conflict;
        }

        return typeMatch && noDateConflict;
      });

      setAvailableRooms(filtered);
      console.log('✅ Available Rooms:', filtered);
    } catch (err) {
      console.error('❌ Error fetching or filtering rooms:', err);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Check Room Availability</h2>

      <div className="mb-3">
        <label className="block mb-1">Check In Date</label>
        <input
          type="date"
          className="border px-3 py-2 rounded w-full"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Check Out Date</label>
        <input
          type="date"
          className="border px-3 py-2 rounded w-full"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Room Type</label>
        <select
          className="border px-3 py-2 rounded w-full"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="Royal">Royal</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Castle">Castle</option>
        </select>
      </div>

      <button
        onClick={handleCheckAvailability}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
      >
        Check Availability
      </button>

      {/* Display available rooms count or message */}
      <div className="mt-4">
        {availableRooms.length > 0 ? (
          <p>{availableRooms.length} room(s) available</p>
        ) : (
          <p>No rooms available for the selected dates and type.</p>
        )}
      </div>
    </div>
  );
};

export default DetailAvailabilityForm;