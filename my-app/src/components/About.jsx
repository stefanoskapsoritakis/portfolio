import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Stefanos, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about programming and improving my skills, 
                I love working in groups and have lots of experience being a group member and a leader.
                Some of my hobbies include playing basketball, going to the gym and swimming. 
                My true passion is video games, I fell in love with them at a young age and decided to enter the business.
                I cannot wait to find out where this journey takes me.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
