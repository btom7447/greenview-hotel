import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservations: typeof window !== "undefined" && localStorage.getItem("reservations")
      ? JSON.parse(localStorage.getItem("reservations"))
      : [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
      localStorage.setItem("reservations", JSON.stringify(state.reservations));
      console.log("Current reservations:", state.reservations);
    },
  },
});

clearReservations: (state) => {
    state.reservations = [];
    localStorage.removeItem("reservations");
}

export const { addReservation, clearReservations } = reservationSlice.actions;
export default reservationSlice.reducer;
