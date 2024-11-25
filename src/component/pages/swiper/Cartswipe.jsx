import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';
import slide4 from '../../../assets/images/slide4.png';

const Cartswipe = () => {
  return (
    <div className=" lg:container p-4 lg:py-12 ">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[40px] font-outfit  mx-auto font-semibold">What People are Saying about Us?</h2>
        <p className="max-w-[498px] font-normal font-inter text-lg text-center my-10">
          Hear from real customers how Kai-Zen has helped secure their financial future.
        </p>
      </div>
      <div className=' py-7'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          // pagination={{ clickable: true }}
          className="mySwiper  "
          spaceBetween={20}
          // slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          
        >
          <SwiperSlide className='mb-20'>
            <img src={slide1} alt={slide1} />
            <p className='text-[#2B53D6] font-inter my-2 text-sm'> Life Strategies</p>
            <h3 className='text-xl font-outfit mb-1 font-semibold'>Harry Pells </h3>
            <h6 className='text-sm font-normal font-inter'>CLU</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt={slide1} />
            <p className='text-[#2B53D6] text-sm font-inter my-2'> MultiGen</p>
            <h3 className='text-xl font-semibold mb-1 font-outfit'>Carey Finn </h3>
            <h6 className='text-sm font-normal font-inter'>Kai-Zen Testimonial</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt={slide1} />
            <p className='text-[#2B53D6] text-sm my-2 font-inter'> CashStream</p>
            <h3 className='text-xl font-semibold mb-1 font-outfit'>Todd Gruverman </h3>
            <h6 className='text-sm font-normal font-inter'>President, Pohs Institute</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt={slide1} />
            <p className='text-[#2B53D6] text-sm my-2 font-inter'> Kaizan®</p>
            <h3 className='text-xl font-semibold mb-1 font-outfit'>Sanjay Ibrahim </h3>
            <h6 className='text-sm font-normal font-inter'>Managing Partner, Attorney</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt={slide1} />
            <p className='text-[#2B53D6] text-sm my-2 font-inter'> Kaizan®</p>
            <h3 className='text-xl font-semibold mb-1 font-outfit'>Sanjay Ibrahim </h3>
            <h6 className='text-sm font-normal font-inter'>Managing Partner, Attorney</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt={slide1} />
            <p className='text-[#2B53D6] text-sm my-2 font-inter'> Kaizan®</p>
            <h3 className='text-xl font-semibold mb-1 font-outfit'>Sanjay Ibrahim </h3>
            <h6 className='text-sm font-normal font-inter'>Managing Partner, Attorney</h6>
          </SwiperSlide>
          


        </Swiper>
      </div>
    </div>
  );
};

export default Cartswipe;
