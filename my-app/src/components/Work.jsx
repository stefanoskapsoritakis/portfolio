import React from 'react';
import WorkImg from '../assets/pexels-thisisengineering-3862371.jpg';
import realEstate from '../assets/pexels-oladimeji-ajegbile-2574616.jpg';
import carRental from '../assets/pexels-tim-samuel-5834949.jpg';
import programming from '../assets/pexels-luis-gomes-546819.jpg';
import deliveryApp from '../assets/delivery.jpg';
import ecommerce from '../assets/ecommerce.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// I've worked in many fields.</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${carRental})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-center flex flex-col justify-center items-center h-full'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Created the first front-end edition of the website Central-Paku.
                </span>
                <div className='pt-8 text-center'>
                  <a href='/' target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${programming})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                My bachelor's degree thesis
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.theseus.fi/handle/10024/754933' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Thesis
                  </button>
                </a>
                <a href='https://github.com/stefanoskapsoritakis/Thesis' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${deliveryApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-center flex flex-col justify-center items-center h-full'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Contributed to a restaurant delivery app.
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://github.com/Paperboardstudio/Clarita' target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Repo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${ecommerce})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-center flex flex-col justify-center items-center h-full'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Created my own e-commerce site, designed both front-end and back-end.
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://stefanosfullstack.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Webpage
                    </button>
                  </a>
                  <a href='https://github.com/stefanoskapsoritakis/ecommerce' target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Repo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
