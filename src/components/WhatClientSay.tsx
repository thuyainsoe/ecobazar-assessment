import { PeopleSayIcon } from "./Icon";
import Stars from "./Stars";
import people5 from "@/assets/people/people5.png";
import people1 from "@/assets/people/people1.png";
import people6 from "@/assets/people/people6.png";
import people7 from "@/assets/people/people7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const whatPeopleSaysData = [
  {
    id: 1,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    role: "Customer",
    image: people5,
  },
  {
    id: 2,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Dianne Russell",
    role: "Customer",
    image: people6,
  },
  {
    id: 3,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Eleanor Pena",
    role: "Customer",
    image: people7,
  },
  {
    id: 4,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "David",
    role: "Customer",
    image: people1,
  },
];

const WhatClientSay = () => {
  return (
    <div className="w-full mt-[30px] lg:mt-[60px] flex flex-col items-center p-[30px] lg:p-[60px] bg-offwhite">
      <p className="text-brandsuccess uppercase text-sm font-[500]">
        Client Testiomial
      </p>
      <h3 className="mt-[3px] text-[30px] lg:text-[36px] font-[600] text-center">
        What our Client Says
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          986: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper w-full mt-[30px] lg:mt-[36px]"
      >
        {whatPeopleSaysData.map((item) => (
          <SwiperSlide>
            <div className="p-[18px] lg:p-[24px] bg-white flex flex-col items-start gap-[16px]">
              <PeopleSayIcon />
              <p className="text-sm text-mddarkgray">{item.text}</p>
              <div className="w-full flex items-center justify-between">
                <div className="flex gap-[12px] items-center">
                  <img
                    className="max-w-[56px] aspect-square rounded-[50%] object-cover"
                    src={item.image}
                    alt="people"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-base font-[500] text-black2">
                      {item.name}
                    </span>
                    <span className="text-mdgray text-sm">{item.role}</span>
                  </div>
                </div>
                <Stars size={20} isBig={true} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhatClientSay;
