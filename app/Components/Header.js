// components/Header.js
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-teal-600 text-white w-full">
      <div className="container mx-auto py-1 px-6 flex items-center justify-center w-full">
        <div className="flex items-center w-full">
          {/* Imagen del logo */}
          <div className="relative w-36 h-36">
            <Image
              src="/logo.png" // Ruta de la imagen del logo
              alt="Santo Tomás"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* Contenedor para centrar el texto */}
          <div className="flex-grow flex justify-center">
            <div className="text-center">        
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

