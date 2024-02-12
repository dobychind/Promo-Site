import React from 'react';
import "./about.css";
import Slide from '../slider/Slide';

const about = () => {

    return (
        <div id='about' className='container bg-white h-full rounded-xl shadow-xl p-3 md:p-6 md:w-[48%] md:h-auto'>
            <a name="about"><h2 className='text-textColor text-3xl font-bold '>Кто я и чем занимаюсь</h2></a>
            <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
            <div className='flex pt-2 my-auto justify-center items-center h-full'>
                <Slide />
            </div>
        </div>
    )
}

export default about