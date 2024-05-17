import React from 'react';
import Tarjeta from '../Components/Tarjeta';
import Header from '../Components/Header';

//import Tarjeta2 from '../Components/Tarjeta2';


function IndexPage() {
  return (

    <div className="divPadre bg-teal-900 min-h-screen">
      < Header />
      <div className="divCuerpo flex flex-col items-center justify-center min-h-screen">
        {/*ENCABEZADO PRINCIPAL*/}
        <h1 className='text-4xl text-white font-bold'>BIENVENIDO A LA EXPERIENCIA VIRTUAL DE MEDICIONES
        </h1>
        <br />
        <br />
        <br />
        <h2 className="text-2xl text-white items-center justify-center font-bold text-gray-800 bg-teal-600 px-4 py-2 mb-5 rounded-xl">
  Tus primeros pasos para comenzar
</h2>

        <br />
        <div className="divContenedorTarjetas flex flex-row items-center gap-6 justify-center bg-teal-900">
          {/*CONTENEDOR TUTORIAL*/}

          <Tarjeta image='/tutorial.png'
            title='Tutorial'
            description='Realización de mediciones mediante el uso de un contador Geiger'
            locked={false}></Tarjeta>


          {/*CONTENEDOR EXTINTORES*/}

          <Tarjeta image='/Extintores.png'
            title='Extintores'
            description='Realización de uso de extintores ante una situación de emergencia'
            locked={true}></Tarjeta>

        </div>

        {/*SUBENCABEZADO*/}
        <br />
        <br />
        <h2 className="text-2xl text-white items-center justify-center font-bold text-gray-800 bg-teal-600 px-4 py-2 mb-5 rounded-xl">
          Selecciona una experiencia
        </h2>
        <br />
        {/*CONTENEDOR DE OPCIONES*/}
        {/*------- -----grid: grilla / Cols: columna/ md:pantalla mediana / lg pantalla grande*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 px-10 py-6 bg-teal-700">

          {/*CONTENEDOR EXP 1*/}

          <Tarjeta image='/Radiacion-ionizante.png'
            title='Radiación Ionizante'
            description='Realización de mediciones mediante el uso de un contador Geiger'
            locked={true}></Tarjeta>


          {/*CONTENEDOR EXP 2*/}

          <Tarjeta image='/Espacio-Confinado.png'
            title='Espacio Confinado'
            description='Mediciones de luxometrías, mediante el uso de un luxómetro como herramienta de medición'
            locked={false}></Tarjeta>

          {/*CONTENEDOR EXP 3*/}

          <Tarjeta image='/Laboratorio-Quimico.png'
            title='Laboratorio Químico'
            description='Experiencia de medición con la herramienta del multigas, pasando por distintas fuentes de gases'
            locked={true}></Tarjeta>

          {/*CONTENEDOR EXP 4*/}

          <Tarjeta image='/Laboratorio-Minero.png'
            title='Laboratorio Minero'
            description='Experiencia de medición con la herramienta del multigas, pasando por distintas fuentes de gases'
            locked={false}></Tarjeta>

        </div>
      </div>
    </div>
  );
}

export default IndexPage;


