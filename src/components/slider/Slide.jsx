// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


export default () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex h-full '
        >
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Врач-косметолог в Клинике Бевз<br />
                Терапевт, нутрициолог<br />
                Опыт работы 17 лет</SwiperSlide>
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Моя сфера профессиональных интересов -  <br/>эндокринология, косметология <br/> терапия</SwiperSlide>
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Я создала и преподаю обучающие курсы для врачей  <br/> 'Школа акне' <br/> 'Школа пигментации'  <br/> 'Эндокринология красоты'</SwiperSlide>
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Эксперт в проф.пилингах <br/> Harmony  <br/> Mahut  <br/> JES  <br/> Я знаю о них все и даже больше</SwiperSlide>
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Постоянно учусь <br/> Совершенствую свои навыки и знания</SwiperSlide>
            <SwiperSlide className='bg-blueColor text-xl text-center items-center justify-center flex h-auto border rounded-xl p-2 text-white font-semibold'>Самое главное, я выбирала свою специальность душой, а это значит, что я на своём месте</SwiperSlide>
        </Swiper>
    );
};