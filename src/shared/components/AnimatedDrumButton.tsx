'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DrumSVG from './DrumSVG';
import Image from 'next/image';

const AnimatedDrumButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    setIsPopupOpen(true);
  };

  const handleClose = (): void => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        className="fixed bottom-8 right-8 text-white p-4 rounded-full shadow-lg z-50"
        style={{ backgroundColor: 'var(--primary)' }}
        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-dark)' }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        aria-label="Open Contact Form"
      >
        <DrumSVG />
      </motion.button>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
            <motion.div
              className="relative bg-[#4A4A4A] p-8 rounded-2xl max-w-md w-full mx-4 shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center relative h-full">
                  <div className="w-full">
                    <Image
                      src="/icons/boom.png"
                      alt="Boom"
                      width={633}
                      height={581}
                      className="mx-auto"
                    />
                  </div>

                  <h2 className="font-raleway font-extrabold text-[48px] leading-[75px] text-white text-center mb-4">
                    Ты крут!
                  </h2>
                  <p className="font-raleway font-extrabold text-[20px] leading-[38px] text-white text-center max-w-[548px] mx-auto mb-8">
                    Запишись на пробный урок или задай вопросы о занятиях
                  </p>

                  <div className="flex justify-center gap-[20px] w-[217px] mx-auto">
                    <a href="https://t.me/BOOMDRUMS" className="hover:opacity-80">
                      <Image
                        src="/icons/telegram.svg"
                        alt="Telegram"
                        width={48}
                        height={48}
                      />
                    </a>
                    <a href="https://wa.me/79992738008?text=Привет%21%20Хочу%20играть%20на%20барабанах%21" className="hover:opacity-80">
                      <Image
                        src="/icons/whatsapp.svg"
                        alt="WhatsApp"
                        width={48}
                        height={48}
                      />
                    </a>
                    <a href="tel:+79992738008" className="hover:opacity-80">
                      <Image
                        src="/icons/phone.svg"
                        alt="Phone"
                        width={48}
                        height={48}
                      />
                    </a>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedDrumButton; 