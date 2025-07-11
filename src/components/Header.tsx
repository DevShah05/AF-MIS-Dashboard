import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/adani-foundation.png'; // ✅ Correct way to load image

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between rounded-2xl mb-4">
      <motion.img
        src={logo} // Ensure this image exists in public/assets
        alt="Adani Foundation"
        className="h-20 w-auto"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-[#6B1E82]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
      >
        Education Dashboard – Adani Foundation
      </motion.h1>
    </header>
  );
};

export default Header;
