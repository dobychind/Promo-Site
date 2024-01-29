import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const CosmetologySwipe = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]                      }
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex h-full '
            >
                <SwiperSlide className=''>
                    <img src="AntiAge.jpg" alt='anti-age therapy' className='rounded-xl min-h-56' />
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Анти-эйдж</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="akne.jpeg" alt='akne therapy' className='rounded-xl min-h-56' />
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Акне</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="rozacea.jpg" alt='rozacea therapy' className='rounded-xl min-h-56'/>
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Розацея</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="pigment.jpg" alt='pigment therapy' className='rounded-xl min-h-56'/>
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Пигментация</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="endocrinolog.jpg" alt='endocrinology' className='rounded-xl min-h-56'/>
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Эндокринология</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="nutriciologi.jpg" alt='nutriciology' className='rounded-xl min-h-56'/>
                    <div>
                        <p className='text-xl text-center items-center justify-center text-textColor font-semibold'>Нутрициология</p>
                    </div>      
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default CosmetologySwipe