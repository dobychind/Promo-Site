import React from 'react'
import About from '../about/about';
import CosmetologySwipe from '../slider/CosmetologySwipe';
import Feedback from '../feedback/Feedback';
import PrevAccordeon from '../preventMedicine/PrevAccordeon';
import AkneAcc from '../akne/akneAccordion'

const content = () => {
    return (
        <div className='container flex flex-col gap-4 bg-white px-3 py-4 md:px-6 md:flex-wrap md:flex-row'>

            <div className='container flex bg-mainPhoto bg-cover bg-no-repeat min-h-128 bg-center rounded-xl shadow-xl z-10 p-3 relative md:p-6 md:bg-contain md:bg-mainPhotoLand md:bg-right'>
                <div className='flex rounded-xl'>
                    <p className='w-4/5 mt-auto text-white text-2xl font-bold z-10 relative md:text-3xl md:my-auto'>Врач Добычина Ольга Александровна</p>
                    <div className='bg-gray-700	 opacity-30 absolute w-full h-full rounded-xl  opacity-1	 left-0 top-0 z-0' />
                </div>
            </div>

            <About />

            <div id='cosmetology' className='container bg-white rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Косметология</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-xl font-bold pt-1 text-center text-textColor'>Направления работы</h4>
                    <CosmetologySwipe />
                </div>
            </div>

            <div id='prevent' className='container bg-white min-h-96 rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Превентивная медицина</h2>
                <div className='h-1 border-b-4 pb-2 mb-2 border-blueColor'></div>
                {/* Аккореон "что это" */}
                <PrevAccordeon/>
                
                <div className='text-xl flex h-auto justify-center items-center py-2 text-textColor font-semibold'>               
                     <a className='w-full' href='https://t.me/Olgadobych'><button className='bg-blueColor w-full rounded-xl py-2 px-3 text-white'>Записаться на консультацию</button></a>
                </div>


            </div>

            <div id='AkneSchool' className='container bg-white min-h-96 rounded-xl shadow-xl p-3 md:p-6 md:w-[49%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Школа Акне</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <AkneAcc/>
            </div>

            <div id='rewards' className='container bg-white  rounded-xl shadow-xl p-3 md:p-6 md:w-[32%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Достижения</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor' />
                <div className='flex flex-col p-2 gap-2'>
                    <p className='text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Член союза "Национальный альянс дерматологов и косметологов"</p>
                    <p className='text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold'>Преподаватель учебных семинаров для врачей. Спикер конференций по косметологии.</p>
                </div>
            </div>

            <div id='publications' className='container bg-white rounded-xl shadow-xl p-3 md:p-6 md:w-[32%]'>
                <h2 className='text-textColor text-3xl font-bold rounded-sm'>Публикации в журналах</h2>
                <div className='h-1 border-b-4 pb-2 border-blueColor'></div>
                <div className='flex flex-col p-2 gap-2'>
                    <a href='#'><p className='text-xl bg-white text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold hover:underline'>2020 Лечение пигментации. Жунал "Облик", Добычина О.А.</p></a>
                    <a href='#'><p className='text-xl bg-white text-center items-center justify-center flex h-auto border rounded-xl p-2 text-textColor font-semibold hover:underline'>2019 Лазерная шлифовка. Журнал "Здоровье и фитнес", Добычина О.А.</p></a>
                </div>
            </div>



            <div id='feedback' className='container bg-white rounded-xl shadow-xl md:w-[32%]'>
                <h2 className='text-textColor text-3xl font-bold p-3 pb-0 md:p-6 md:pb-0 rounded-sm'>Отзывы на продокторов</h2>
                <div className='h-1 border-b-4 pb-2 px-3 border-blueColor'></div>
                <Feedback />
            </div>

        </div>
    )
}

export default content