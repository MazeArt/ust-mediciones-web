import React from 'react';

const Tarjeta = ({ image, title, description }) => {
  return (
    <div className="bg-gray-900 text-center p-6 rounded-xl border-4 border-white transition-transform transform hover:scale-105 hover:border-emerald-400">
      <div
        className="h-40 mb-4 bg-gray-700"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <h3 className="text-emerald-400 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Tarjeta;

{/*------- color de fondo/ centrado /p: padding/ redondeado / grosor del borde / color del borde */}
