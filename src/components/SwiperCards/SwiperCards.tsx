import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiperCards.scss';

type Props = {
  arrowLeftClassName: string,
  arrowRightClassName: string,
  children: React.ReactChild;
};

export const SwiperCards: React.FC<Props> = ({
  arrowLeftClassName,
  arrowRightClassName,
  children,
}) => {
  return (
    <Swiper
      className="swiper-cards"
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{ nextEl: `.${arrowRightClassName}`, prevEl: `.${arrowLeftClassName}` }}
      autoHeight
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6].map(item => (
        <SwiperSlide key={item}>
          {children}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
