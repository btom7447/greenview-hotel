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
        },
        deleteReservation: (state, action) => {
            state.reservations.splice(action.payload, 1);
            localStorage.setItem("reservations", JSON.stringify(state.reservations));
        },
        clearReservations: (state) => {
            state.reservations = [];
            localStorage.removeItem("reservations");
        },
    },
});

export const { addReservation, deleteReservation, clearReservations } = reservationSlice.actions;
export default reservationSlice.reducer;