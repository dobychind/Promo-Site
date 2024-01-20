import React from 'react'
import Image from '/main_photo.png';
import About from '../about/about';

const content = () => {
    return (
        <div className='container flex flex-col gap-4 bg-lightColor px-3 py-4 md:px-6'>

            <div className='container flex bg-mainPhoto bg-contain bg-no-repeat min-h-96 bg-center rounded-xl shadow-xl z-10  p-3 md:p-6 relative'>
                <div className='flex rounded-xl'>
                    <p className='w-4/5 mt-auto text-white text-2xl font-bold z-10 relative'>Врач Добычина Ольга Александровна</p>
                    <div className='bg-gray-700	 opacity-30 absolute w-full h-full rounded-xl  opacity-1	 left-0 top-0 z-0'/>
                </div>
            </div>

            <About/>

            <div className='container bg-blueColor min-h-96 rounded-xl shadow-xl p-3 md:p-6'>
                <h2 className='text-white text-3xl font-bold border-b-4 rounded-sm border-mainColor'>Косметология</h2>
            </div>

            <div className='container bg-mainColor min-h-96 rounded-xl shadow-xl p-3 md:p-6'>
                <h2 className='text-white text-3xl font-bold border-b-4 rounded-sm border-blueColor'>Превентивная медицина</h2>
            </div>

        </div>
    )
}

export default content