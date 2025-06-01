import React, { useState, useMemo } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mdkevrgz');
    const { today, tomorrow } = useMemo(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return { today, tomorrow };
    }, []);
    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);
    const handleCheckInChange = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
        setCheckIn(date);
        }
    };
    const handleCheckOutChange = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
        setCheckOut(date);
        }
    };
    const showToast = () => {
        toast.success('Thanks for contacting us!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        });
    };
    const onSubmit = async (e) => {
        await handleSubmit(e);
        if (!state.errors.length && state.succeeded) {
        showToast();
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="flex flex-col items-start mb-15">
                <p className="text-[#E4BF3B] text-2xl uppercase ">Send us a message</p>
                <h2
                    id="welcome-heading"
                    className="text-black text-3xl md:text-5xl"
                >
                    Feel free to write
                </h2>
            </div>
            <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                aria-label="Contact Form"
            >
                <div className="flex col-span-2 lg:col-span-1 flex-col">
                    <label htmlFor="name" className="text-black text-xl lg:text-2xl font-light mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        aria-label="Type your name"
                        className="p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="flex flex-col col-span-2 lg:col-span-1">
                    <label htmlFor="email" className="text-black text-xl lg:text-2xl font-light mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        aria-label="Your email"
                        className="p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="flex flex-col col-span-2 lg:col-span-1">
                    <label htmlFor="check-in" className="text-black text-xl lg:text-2xl font-light mb-2">
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
                        className="cursor-pointer p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                    />
                </div>
                <div className="flex flex-col col-span-2 lg:col-span-1">
                    <label htmlFor="check-out" className="text-black text-xl lg:text-2xl font-light mb-2">
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
                        className="cursor-pointer p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                    />
                </div>
                <div className="col-span-2 flex flex-col">
                    <label htmlFor="message" className="text-black text-xl lg:text-2xl font-light mb-2">
                        Write a Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-6 focus:outline-none text-xl text-black placeholder:text-xl placeholder:text-gray-600 bg-gray-200"
                        placeholder="Let us know how we can help..."
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    aria-label="Submit contact form"
                    className="col-span-2 w-full h-full bg-[#E4BF3B] hover:bg-black hover:text-white text-black uppercase text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer disabled:opacity-50"
                >
                    {state.submitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;