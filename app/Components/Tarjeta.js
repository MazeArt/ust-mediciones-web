import React from 'react';
import { FaLock } from 'react-icons/fa';

const Tarjeta = ({ image, title, description, locked }) => {
  return (
    <div className={`relative bg-gray-900 text-center p-6 rounded-xl border-4 transition-transform transform hover:scale-105 ${locked ? 'hover:border-red-400' : 'hover:border-emerald-400'}`}>
      {locked && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl ">
     
        </div>
        
      )}
      <div className="relative h-40 mb-4 bg-gray-700 rounded-xl " style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {locked && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center">
            <FaLock className="text-white text-3xl" />
            <span className="text-white text-lg opacity-0 hover:opacity-100">Desbloquea el Tutorial</span>
       
          </div>
        )}
      </div>
      <h3 className="text-emerald-400 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Tarjeta;
{/*------- color de fondo/ centrado /p: padding/ redondeado / grosor del borde / color del borde */}
