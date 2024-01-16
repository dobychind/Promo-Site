import React from 'react'
import Image from '/main_photo.png';

const content = () => {
    return (
        <div className='container flex flex-col gap-4 bg-lightColor px-3 py-4 md:px-6'>

            <div className='container flex bg-mainPhoto bg-contain bg-no-repeat min-h-96 bg-center rounded-xl shadow-xl z-10  p-3 md:p-6 relative'>
                <div className='flex rounded-xl'>
                    <p className='w-4/5 mt-auto text-white text-2xl font-bold z-10 relative'>Врач Добычина Ольга Александровна</p>
                    <div className='bg-gray-700	 opacity-30 absolute w-full h-full rounded-xl  opacity-1	 left-0 top-0 z-0'/>
                </div>
            </div>

            <div className='container bg-mainColor min-h-96 rounded-xl shadow-xl p-3 md:p-6'>
                <h2 className='text-white text-3xl font-bold border-b-4 rounded-sm border-blueColor'>Кто я и чем занимаюсь.</h2>
                <ul className='container pl-4'>
                    <li className='text-white list-disc'>Врач-косметолог в Клинике Бевз</li>
                    <li className='text-white list-disc'>Терапевт, нутрициолог</li>
                    <li className='text-white list-disc'>Мой опыт работы 17 лет</li>
                    <li className='text-white list-disc'>Моя сфера профессиональных интересов - эндокринология, косметология, терапия</li>
                    <li className='text-white list-disc'>Я создала и преподаю обучающие курсы для врачей "Школа акне ", "Школа пигментации", "Эндокринология красоты"</li>
                    <li className='text-white list-disc'>Эксперт в проф.пилингах Harmony, Mahut, jesmed.ru , я знаю о них все и даже больше</li>
                    <li className='text-white list-disc'>Постоянно учусь, совершенствую свои навыки и знания</li>
                </ul>
                <p className='text-white text-xl font-bold py-3'>Самое главное, я выбирала свою специальность душой, а это значит, что я на своём месте</p>
            </div>

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