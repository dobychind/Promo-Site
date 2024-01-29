import React from 'react'
import Image from '/main_photo.png';
import About from '../about/about';
import CosmetologySwipe from '../slider/CosmetologySwipe';
import Feedback from '../feedback/Feedback';

const content = () => {
    return (
        <div className='container flex flex-col gap-4 bg-lightColor px-3 py-4 md:px-6 md:flex-wrap md:flex-row'>

            <div className='container flex bg-mainPhoto bg-cover bg-no-repeat min-h-128 bg-center rounded-xl shadow-xl z-10 p-3 relative md:p-6 md:bg-contain md:bg-right'>
                <div className='flex rounded-xl'>
                    <p className='w-4/5 mt-auto text-white text-2xl font-bold z-10 relative md:text-3xl md:my-auto'>Врач Добычина Ольга Александровна</p>
                    <div className='bg-gray-700	 opacity-30 absolute w-full h-full rounded-xl  opacity-1	 left-0 top-0 z-0' />
                </div>
            </div>

            <About />

            <div id='cosmetology' className='container bg-secondaryColor rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Косметология</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <div>
                    <h4 className='text-xl font-semibold pb-1 text-textColor'>Направления работы</h4>
                    <CosmetologySwipe />
                </div>
            </div>

            <div id='prevent' className='container bg-white min-h-96 rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Превентивная медицина</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>

            </div>

            <div id='AkneSchool' className='container bg-secondaryColor min-h-96 rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Школа Акне</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <div className='flex flex-col p-2 gap-2'>
                    <p className='text-xl items-center justify-center flex h-auto  text-textColor font-semibold'><b classname="">Обучение для врачей, косметологов-эстетистов </b></p>
                    <div className='text-xl  flex-col flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Интегративная школа акне включает в себя самые актуальные данные по
                        <ul>
                            <li className='font-bold'>-классификации</li>
                            <li className='font-bold'>-этиологии</li>
                            <li className='font-bold'>-патогенезу</li>
                        </ul>
                    </div>
                    <p className='text-xl items-center  flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Диета при акне
                        <br />Нутрицевтическая коррекция
                        <br />Аптечные средства
                        <br />Протоколы лечения акне
                    </p>
                </div>
            </div>

            <div id='rewards' className='container bg-white  rounded-xl shadow-xl p-3 md:p-6 md:w-1/3'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Достижения</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor' />
                <div className='flex flex-col p-2 gap-2'>
                    <p className='text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Член союза "Национальный альянс дерматологов и косметологов"</p>
                    <p className='text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Преподаватель учебных семинаров для врачей. Спикер конференций по косметологии.</p>
                </div>
            </div>

            <div id='publications' className='container bg-white rounded-xl shadow-xl p-3 md:p-6 md:w-1/3'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Публикации в журналах</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <div className='flex flex-col p-2 gap-2'>
                    <a href='#'><p className='text-xl bg-white text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold hover:underline'>2020 Лечение пигментации. Жунал "Облик", Добычина О.А.</p></a>
                    <a href='#'><p className='text-xl bg-white text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold hover:underline'>2019 Лазерная шлифовка. Журнал "Здоровье и фитнес", Добычина О.А.</p></a>
                </div>
            </div>



            <div id='feedback' className='container bg-white rounded-xl shadow-xl md:w-[30%]'>
                <h2 className='text-textColor text-3xl font-bold p-3 pb-0 md:p-6 md:pb-0 rounded-sm'>Отзывы на продокторов</h2>
                <div className='h-1 border-b-4 pb-2 px-3 border-blueColor'></div>
                <Feedback />
            </div>

        </div>
    )
}

export default content