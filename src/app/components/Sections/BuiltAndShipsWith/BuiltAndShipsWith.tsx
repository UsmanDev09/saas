import React from 'react';
import { FaReact, FaNodeJs, FaStripe, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiPrisma, SiVercel, SiOpenai } from 'react-icons/si';

const BuiltAndShipsWith: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-[32px]">
      <h2 className="mb-6 text-center font-semibold tracking-wide text-gray-500">Built and Ships with</h2>
      
      <div className="grid grid-cols-4 gap-x-[235px] gap-y-[70px]">
        <FaReact className="h-16 w-16 text-gray-500" />
        <FaNodeJs className="h-16 w-16 text-gray-500" />

        <div className="relative inline-block">
          <img src="/assets/logo.png" alt="React" className="h-16 grayscale" />
          <div className="absolute inset-0 bg-gray-500 opacity-50 mix-blend-multiply rounded-full"></div>
        </div>


        <SiPrisma className="h-16 w-16 text-gray-500" />
        <SiTailwindcss className="h-16 w-16 text-gray-500" />
        <FaStripe className="h-16 w-16 text-gray-500" />
        <img src="/path/to/another-logo.png" alt="Logo" className="h-16" />
        <SiOpenai className="h-16 w-16 text-gray-500" />
      </div>
    </div>
  );
}

export default BuiltAndShipsWith;