"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CustomArrowsForSwiper.css";

export default function Carousel() {
  return (
    <section className="w-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper: any) => null}
        className="w-full"
      >
        <SwiperSlide>
          <picture>
            <source
              srcSet="/desktop/banner_carousel_1_1440.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/tablet/banner_carousel_1_768.png"
              media="(min-width: 768px)"
            />
            <Image
              alt="Banner 1"
              src="/mobile/banner_carousel_1_ 375.png"
              width={1440}
              height={415}
              className="object-fill w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet="/desktop/banner_carousel_2_1440.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/tablet/banner_carousel_2_768.png"
              media="(min-width: 768px)"
            />
            <Image
              alt="Banner 2"
              src="/mobile/banner_carousel_2_ 375.png"
              width={1440}
              height={415}
              className="object-fill w-full"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet="/desktop/banner_carousel_3_1440.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/tablet/banner_carousel_3_768.png"
              media="(min-width: 768px)"
            />
            <Image
              alt="Banner 3"
              src="/mobile/banner_carousel_3_ 375.png"
              width={1440}
              height={415}
              className="object-fill w-full"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
