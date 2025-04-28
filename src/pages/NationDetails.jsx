import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FloatingChatButton from "../components/FloatingChatButton";

const NationDetails = () => {
  const { id } = useParams();
  const [nation, setNation] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/nations/${id}`)
      .then(response => response.json())
      .then(data => setNation(data))
      .catch(error => console.error('Ошибка при загрузке данных о нации:', error));
  }, [id]); 

  if (!nation) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h1 className="font-third font-normal text-[5.75rem] text-center text-[#08195f]">{nation.name}</h1>
        <p className='font-montaga font-normal text-[1rem] text-center text-[#08195f]'>
          {nation.title}
        </p>
      </div>

      <div className="relative pt-[2rem] pb-[5rem] justify-center">
        <img 
          src={`${process.env.REACT_APP_BACKEND_URL}/${nation.main_image}`} 
          alt={nation.name} 
          className="mx-auto block"
        />
      </div>

      <div className="relative">
        <div
          className="bg-cover bg-center h-[800px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
          style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${nation.bg_image})` }}
        >
          <div className="flex flex-col p-[3rem] h-full justify-start">
            <p className="font-montaga font-normal text-[1.3rem] w-[300px] text-left text-[#716868]">
              {nation.introduction}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-9 gap-8 font-montaga'>
        <h3 className='text-[2rem] items-center font-normal text-[#585656]'>History</h3>
        <p className='text-[1rem] font-normal text-black'>{nation.history_text_1}</p>

        <div className='flex flex-col md:flex-row gap-6 justify-center lg:gap-12'>
          <div>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.history_image_1_1}`} alt="" className='w-[20rem] h-[20rem]'/>
            <p className='text-[0.7rem] font-normal text-black'>{nation.history_description_1_1}</p>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.history_image_1_2}`} alt="" className='w-[20rem] h-[20rem]'/>
            <p className='text-[0.7rem] font-normal text-black'>{nation.history_description_1_2}</p>
          </div>
        </div>

        <p className='text-[1rem] font-normal text-black'>{nation.history_text_2}</p>

        <div className='flex flex-col md:flex-row gap-6 justify-center lg:gap-12'>
          <div>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.history_image_2_1}`} alt="" className='w-[20rem] h-[15rem]'/>
            <p className='text-[0.7rem] font-normal text-black'>{nation.history_description_2_1}</p>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.history_image_2_2}`} alt="" className='w-[20rem] h-[15rem]'/>
            <p className='text-[0.7rem] font-normal text-black'>{nation.history_description_2_2}</p>
          </div>
        </div>

        
        <h3 className='text-[2rem] items-center font-normal text-[#585656]'>Distribution</h3>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-center'>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.distribution_image}`} alt="" className='w-[20rem] lg:w-[30rem]'/>
          </div>
        </div>

        <h3 className='text-[2rem] items-center font-normal text-[#585656]'>Traditional Clothing</h3>
        <div className='flex flex-col gap-6'>
          <div>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${nation.traditional_clothing_image}`} alt="" className='mx-auto w-[20rem] md:w-[40rem]'/>
          </div>
          <p className='text-[1rem] font-normal text-black'>{nation.traditional_clothing_description}</p>
        </div>

        <h3 className='text-[2rem] items-center font-normal text-[#585656]'>Music and Culture</h3>
        <p className='text-[1rem] font-normal text-black'>{nation.music_and_culture_description}</p>
        <div className="flex justify-center">
  <iframe 
    src={`https://www.youtube.com/embed/${nation.video_link.split('v=')[1]}`} 
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="md:w-[40rem] md:h-[30rem]"
  ></iframe>
</div>


        <h2 className="font-third font-normal text-[2rem] text-center text-[#08195f] md:text-[4rem]">
          {nation.title}
        </h2>

        <FloatingChatButton nationId={nation.id} />
      </div>
    </div>
  );
};

export default NationDetails;
