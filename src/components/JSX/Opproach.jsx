import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Opproach = () => {
  return (
    <div className="h-screen flex items-end flex-col">
      <div className='space-y-9 h-1/2 w-full p-30'>
        <h1 className='text-5xl font-light'> " जहाँ सुमति तहाँ संपत्ति नाना "</h1>
        <h1 className='text-5xl font-light'> " जहाँ कुमति तहाँ विपत्ति निदाना "</h1>
      </div>
      <div className='flex justify-end mr-15 h-1/2 w-1/2'>
        <h1 className='text-4xl leading-normal tracking-wide font-light'>
          Arogyam is built on this timeless truth — to transform our inner world. By helping users shift from destructive thinking <span className='text-red-500'>(कुमति)</span> to wisdom and clarity <span className='text-green-500'>(सुमति)</span>, Arogyam becomes a bridge between chaos and calm.
        </h1>

      </div>
    </div>
  );
};

export default Opproach;
