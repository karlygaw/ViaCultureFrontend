import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nations = () => {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/nations`)
      .then(response => response.json())
      .then(data => setNations(data))
      .catch(error => console.error('Ошибка при загрузке наций:', error));
  }, []);

  return (
    <div className="flex flex-col bg-white px-4 py-12 gap-[1.25rem]">
      <div className="text-center mb-8">
        <h1 className='font-passionone text-normal text-[2.25rem] leading-[132%] tracking-[0.02em] text-[#08195f] lg:text-[6rem]'>
          STORIE.NATION.PEOPLE
        </h1>
        <p className='font-passionone text-normal text-[1rem] leading-[132%] tracking-[0.02em] text-[#08195f] lg:text-[2rem]'>
          Immerse yourself in the rich tapestry of cultures and explore the legacy of nations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.25rem]">
        {nations.map((nation, index) => (
          <Link key={index} to={`/nations/${nation.id}`} className="group">
          <div className="relative">
            <img 
              src={`${process.env.REACT_APP_BACKEND_URL}${nation.cover_image.startsWith('/') ? '' : '/'}${nation.cover_image}`} 
              alt={nation.name} 
              className="rounded-[1rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-[40rem] lg:h-[13rem] xl:h-[18rem]"
            />
            <p className="font-roboto text-[0.75rem] text-[#08195f] text-center mt-2">
              {nation.title}
            </p>
          </div>
        </Link>        
        ))}
      </div>
    </div>
  );
};

export default Nations;