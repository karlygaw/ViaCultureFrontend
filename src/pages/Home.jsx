import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row gap-[2rem] items-center lg:items-start justify-center pl-[1rem] pt-[1rem] lg:p-[5rem]">
        
        <div className="flex flex-col gap-[0.875rem] lg:gap-[2.5rem] items-center lg:items-start lg:justify-center lg:h-full text-center lg:pt-[5rem]">
          <h1 className="font-passionone font-normal text-[1.69rem] lg:text-[2.5rem] xl:text-[3.75rem] leading-[132%] tracking-[0.02em] text-[#08195f]">
            Discover the Soul 
            <br />of Humanity 
            <br />Through Its Cultures
          </h1>
          <Link to="/nations">
            <div className="flex items-center justify-center rounded-[1rem] w-[16rem] h-[3.75rem] lg:w-[20rem] xl:w-[32rem] lg:h-[5rem] xl:h-[7rem] bg-[#151d64] transition-transform duration-300 ease-in-out transform hover:scale-105">
              <p className="text-white font-passionone font-normal text-[1.25rem] lg:text-[1.75rem] xl:text-[2.5rem] text-center">
                Go to the List of Nations
              </p>
            </div>
          </Link>

        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img 
              src="/main/bg-1.jpg" 
              alt="Background" 
              className="rounded-[1rem] w-[17rem] max-w-[25rem] md:w-[30rem] md:max-w-[40rem] xl:w-[45rem] 3xl:w-[80rem] transition-transform duration-300 ease-in-out transform hover:scale-105" 
            />
            
            <img 
              src="/main/bg-1.jpg" 
              alt="Foreground" 
              className="absolute top-7 left-7 rounded-[1rem] w-[17rem] md:w-[30rem] max-w-[40rem] xl:w-[45rem] 3xl:w-[50rem] shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
