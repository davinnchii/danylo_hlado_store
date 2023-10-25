/* eslint-disable max-len */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import banner from '../../assets/images/banner.png';
import bannerMobile from '../../assets/images/banner-mobile.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperMain.scss';

export const SwiperMain = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
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
            />

            <button
              className="swiper-slide__main-arrow swiper-slide__main-arrow-right"
              type="button"
              aria-label="arrow-right"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
