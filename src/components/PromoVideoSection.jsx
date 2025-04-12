'use client';

import React, { useState, useEffect, useRef } from "react";
import { PlayIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PromoVideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeButtonRef = useRef(null);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };
        if (isOpen) document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <section
            className="relative h-[60dvh] w-full bg-cover bg-bottom bg-fixed flex justify-center items-center"
            style={{ backgroundImage: "url('/images/testimonial-poster.jpg')" }}
            aria-labelledby="promo-video-title"
        >
            <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

            <h2 id="promo-video-title" className="sr-only">
                Promotional Video Section
            </h2>

            <motion.button
                onClick={openModal}
                className="z-10 rounded-full bg-[#E4BF3B] hover:bg-gray-900 transition p-12 shadow-lg cursor-pointer"
                aria-label="Play promotional video"
                whileHover={{ scale: 1.3 }}
                animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                }}
            >
                <PlayIcon size={36} className="text-white" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-70 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            aria-hidden="true"
                        />

                        {/* Modal */}
                        <motion.div
                            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-4xl aspect-video -translate-x-1/2 -translate-y-1/2 bg-black shadow-xl rounded-xl overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="video-modal-title"
                        >
                            <span id="video-modal-title" className="sr-only">
                                Promotional Video
                            </span>

                            <button
                                ref={closeButtonRef}
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-white z-50 p-1 rounded-full hover:bg-white/20 transition"
                                aria-label="Close video modal"
                            >
                                <X />
                            </button>

                            {/* Lazy-loaded video only when modal is open */}
                            {isOpen && (
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/QTwg1l8FqXw?autoplay=1"
                                    title="Promotional Video"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PromoVideoSection;