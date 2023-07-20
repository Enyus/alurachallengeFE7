"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { banners } from "../../public/fakeDB/banners";
import "../../public/styles/CustomArrowsForSwiper.css";

export default function Carrosel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {banners.map( banner => {
          return (
            <SwiperSlide key={banner.id}>
              <picture>
                <source
                  srcSet={banner.imgDesktop}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={banner.imgTablet}
                  media="(min-width: 768px)"
                />
                <Image
                  alt={`Banner ${banner.id}`}
                  src={banner.imgMobile}
                  width={1440}
                  height={415}
                  className="object-fill w-full"
                />
              </picture>
            </SwiperSlide>
          )
        })}
        
      </Swiper>
    </section>
  );
}
