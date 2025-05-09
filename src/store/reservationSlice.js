import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservations: typeof window !== "undefined" && localStorage.getItem("reservations")
        ? JSON.parse(localStorage.getItem("reservations"))
        : [],
    dateRange: {
        check_in: null,
        check_out: null,
    },
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.reservations.push(action.payload);
            localStorage.setItem("reservations", JSON.stringify(state.reservations));
        },
        setReservations: (state, action) => {
            state.reservations = action.payload;
        },
        deleteReservation: (state, action) => {
            state.reservations.splice(action.payload, 1);
            localStorage.setItem("reservations", JSON.stringify(state.reservations));
        },
        clearReservations: (state) => {
            state.reservations = [];
            localStorage.removeItem("reservations");
        },
        setDateRange: (state, action) => {
            const { check_in, check_out } = action.payload;

            // Fallback logic for check-in/check-out
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            state.dateRange = {
                check_in: check_in || today,
                check_out: check_out || tomorrow,
            };
        },
        clearDateRange: (state) => {
            state.dateRange = { check_in: null, check_out: null };
        },
    },
});

export const {
    addReservation,
    setReservations,
    deleteReservation,
    clearReservations,
    setDateRange,
    clearDateRange,
} = reservationSlice.actions;

export default reservationSlice.reducer;
