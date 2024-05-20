"use client"
import React from 'react';
import { FaLock } from 'react-icons/fa';

const Tarjeta = ({ image, title, description, locked, link }) => {
  const handleClick = (e) => {
    if (locked) {
      e.preventDefault();
    }
  };

  return (
    <a href={link} onClick={handleClick} className={`relative bg-teal-950 text-center p-6 rounded-xl border-4 transition-transform transform hover:scale-105 ${locked ? 'hover:border-red-400' : 'hover:border-emerald-400'}`}>
      <div className={`relative ${locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        {locked && (
          <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl"></div>
        )}
        <div className="relative h-40 mb-4 bg-teal-950 rounded-xl" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {locked && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center">
              <FaLock className="text-white text-3xl" />
              <span className="mt-2 text-white text-lg font-semibold">Completa los <br />primeros pasos</span>
            </div>
          )}
        </div>
        <h3 className="text-emerald-400 text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default Tarjeta;
