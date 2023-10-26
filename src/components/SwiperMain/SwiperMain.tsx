/* eslint-disable max-len */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner from '../../assets/images/banner.png';
import bannerMobile from '../../assets/images/banner-mobile.png';
import arrow_left_black from '../../assets/icons/arrow-left-black.svg';
import arrow_right_black from '../../assets/icons/arrow-right-black.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperMain.scss';

export const SwiperMain = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={{ nextEl: '.swiper-slide__main-arrow-right', prevEl: '.swiper-slide__main-arrow-left' }}
    >
      {[1, 2, 3].map(item => (
        <SwiperSlide key={item}>
          <div className="swiper-slide__img-box">
            <img
              className="swiper-slide__img"
              src={banner}
              alt="banner"
            />

            <img
              className="swiper-slide__img-mobile"
              src={bannerMobile}
              alt="banner"
            />

            <button
              className="swiper-slide__main-arrow swiper-slide__main-arrow-left"
              type="button"
              aria-label="arrow-left"
            >
              <img src={arrow_left_black} alt="arrow_left_black" />
            </button>

            <button
              className="swiper-slide__main-arrow swiper-slide__main-arrow-right"
              type="button"
              aria-label="arrow-right"
            >
              <img src={arrow_right_black} alt="arrow_right_black" />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
