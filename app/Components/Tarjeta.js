import React from 'react';

const Tarjeta = ({ image, title, description }) => {
  return (
    
    <div className="bg-gray-900 text-center p-6 rounded-xl border-4 border-teal-500">
      <div className="h-32 mb-4 bg-gray-700" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h3 className="text-teal-500 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Tarjeta;
{/*------- color de fondo/ centrado /p: padding/ redondeado / grosor del borde / color del borde */}