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
            <p>
              A dedicated software developer driven by a passion for programming and a relentless pursuit of skill enhancement.
            </p>
            <p>
              Proficient in collaborating within diverse teams, adept at both contributing as a valuable team member and providing effective leadership.
            </p>
            <p>
              Beyond software development, I am an avid sports enthusiast, engaging in activities such as basketball, gym workouts, and swimming.
            </p>
            <p>
              I eagerly anticipate the exciting journey ahead in the dynamic field of software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
