import React from 'react';
import Tarjeta from '../Components/Tarjeta';

function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      {/*ENCABEZADO PRINCIPAL*/}
      <h1 className="text-4xl text-center font-bold text-teal-400 mb-5">
        BIENVENIDO A LA EXPERIENCIA <br /> VIRTUAL DE MEDICIONES
      </h1>
      {/*SUBENCABEZADO*/}
      <h2 className="text-xl text-white mb-4">
        Selecciona una experiencia
      </h2>
      {/*CONTENEDOR DE OPCIONES*/}
      {/*------- -----grid: grilla / Cols: columna/ md:pantalla mediana / lg pantalla grande*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16">
        
        {/*CONTENEDOR EXP 1*/}

        <Tarjeta image='/Radiacion-ionizante.png'
          title='Radiación Ionizante' description='Realización de mediciones mediante el uso de un contador Geiger'></Tarjeta>


         {/*CONTENEDOR EXP 2*/}

         <Tarjeta image='/Espacio-Confinado.png'
          title='Espacio Confinado' description='Mediciones de luxometrías, mediante el uso de un luxómetro como herramienta de medición'></Tarjeta>

        {/*CONTENEDOR EXP 3*/}

         <Tarjeta image='/Laboratorio-Quimico.png'
          title='Laboratorio Químico' description='Experiencia de medición con la herramienta del multigas, pasando por distintas fuentes de gases'></Tarjeta>
      
        {/*CONTENEDOR EXP 4*/}

          <Tarjeta image='/Laboratorio-Minero.png'
          title='Laboratorio Minero' description='Experiencia de medición con la herramienta del multigas, pasando por distintas fuentes de gases'></Tarjeta>

      </div>
    </div>
  );
}

export default IndexPage;


