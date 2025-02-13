import React, { useCallback } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from 'swiper/modules';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current?.swiper) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current?.swiper) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const heading = [
        'Warren B. on Oct 25, 2024', 'Jarrod D. on Oct 24, 2024', 'Syed S. on Oct 24, 2024', 'Emily H. on Oct 24, 2024',
        'Mhammed T. on Oct 24, 2024', 'Mohd A. on Oct 24, 2024', 'Trendy O. on Oct 22, 2024', 'Claire H. on Oct 22, 2024',
        'Gabriel K. on Oct 21, 2024', 'Al A. on Oct 21, 2024', 'Warren B. on Oct 25, 2024', 'Jarrod D. on Oct 24, 2024'
    ];
    const para = [
        'Favourite thing for me is the ease of ordering in the US and getting it all shipped in one box to me in the UK. I save a f... ',
        'Great work in shipping items ', 'All Gooooooooooooood ', 'Amazing service and really fast delivery ', 'Perfect thank you',
        'Very good service ', 'بريد رائع وخدمة عملاء اكثر من رائعه الى الأمام ستاكري🤍🤍🤍🤍', 'Happy with service, would definitely recommend using stackry to a friend ',
        'Very fast shipping, great support and communication, excellent prices and protection for every package consolidation.', 'Excellent service',
        'Favourite thing for me is the ease of ordering in the US and getting it all shipped in one box to me in the UK. I save a f...',
        'Great work in shipping items'
    ];

    return (
        <section className='responsive'>
            <div className="containerr relative">
                <Swiper
                    ref={sliderRef}
                    modules={[Pagination, Scrollbar, Autoplay]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        300: { slidesPerView: 1, slidesPerGroup: 1 },
                        990: { slidesPerView: 4, slidesPerGroup: 4 },
                    }}
                    className='!px-[10px] !pb-[50px]'
                >
                    {Array.from({ length: 12 }, (v, i) => (
                        <SwiperSlide key={i} >
                            <div className='flex flex-col w-[100%] min-h-[250px]  gap-5 p-4 rounded-xl shadow-[0_2px_5px_#0003]'>
                                <p>{heading[i]}</p>
                                <img src="/images/star.webp" alt="star" width={130} />
                                <p className='flex-1'>{para[i]}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div>
                    <button className='rounded-full bg-gray-100 absolute top-[40%] left-0 z-10' onClick={handlePrev}><MdKeyboardArrowLeft size={35} /></button>
                    <button className='rounded-full bg-gray-100 absolute top-[40%] right-0 z-10' onClick={handleNext}><MdKeyboardArrowRight size={35} /></button>
                </div>

                <div className='flex justify-center items-center'>
                    <span className='text-sm'>Reviews Verified by</span>
                    <img src="/images/sitejabber.svg" alt="sitejabber" />
                </div>
            </div>
        </section>
    )
}

export default Slider