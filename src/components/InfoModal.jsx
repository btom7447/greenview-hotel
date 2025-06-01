'use client'
import { XIcon } from 'lucide-react';
import React, { useState } from 'react';

const InfoModal = ({ isOpen, onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        specialRequest: '',
    });

    const isDisabled = !formData.name || !formData.email || !formData.phone;

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = () => {
        onConfirm(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="m-5 bg-white w-full max-w-3xl p-10 shadow-lg">
                <div className='flex justify-between items-center mb-10'>
                    <h2 className="text-3xl font-bold">Enter Your Reservation Details</h2>
                    <button type="button" onClick={onClose} className='cursor-pointer'>
                        <XIcon size={25} color='#000' />
                    </button>
                </div>
                <form
                    className="grid grid-cols-1 gap-5"
                    onSubmit={e => {
                        e.preventDefault();
                        if (!isDisabled) handleSubmit();
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="info-modal-name" className="text-lg font-medium text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="info-modal-name"
                            name="name"
                            placeholder="John Doe"
                            className="p-5 border border-gray-200 bg-white focus:bg-white focus:outline-1 focus:outline-[#E4BF3B] text-xl text-black font-light"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ backgroundColor: 'white' }}
                            required
                            autoComplete="name"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="info-modal-email" className="text-lg font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="info-modal-email"
                                name="email"
                                type="email"
                                placeholder="john@doe.com"
                                className="p-5 border border-gray-200 bg-white focus:bg-white focus:outline-1 focus:outline-[#E4BF3B] text-xl text-black font-light"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ backgroundColor: 'white' }}
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="info-modal-phone" className="text-lg font-medium text-gray-700">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="info-modal-phone"
                                name="phone"
                                type="tel"
                                placeholder="123 456 789"
                                className="p-5 border border-gray-200 bg-white focus:bg-white focus:outline-1 focus:outline-[#E4BF3B] text-xl text-black font-light"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ backgroundColor: 'white' }}
                                required
                                autoComplete="tel"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="info-modal-specialRequest" className="text-lg font-medium text-gray-700">
                            Special Request (Optional)
                        </label>
                        <textarea
                            id="info-modal-specialRequest"
                            name="specialRequest"
                            placeholder="I would like ...."
                            className="p-5 border border-gray-200 bg-white focus:bg-white focus:outline-1 focus:outline-[#E4BF3B] text-xl text-black font-light"
                            value={formData.specialRequest}
                            onChange={handleChange}
                            rows={4}
                            style={{ backgroundColor: 'white' }}
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex justify-center mt-8 gap-5">
                        <button
                            type="submit"
                            disabled={isDisabled}
                            className={`${
                                isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E4BF3B] hover:bg-black cursor-pointer'
                            } text-white uppercase py-5 px-10 text-xl uppercase leading-loose transition`}
                        >
                            Confirm & Pay
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoModal;
