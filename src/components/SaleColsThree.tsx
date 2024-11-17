import cardTime from "@/assets/card_timer.svg";
import { ButtonRightArrow } from "./Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const SaleColsThree = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
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
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper mt-[30px] lg:mt-[60px]"
    >
      {/* first card */}
      <SwiperSlide>
        <div className="w-full aspect-[424_/_536] bg-[url('/src/assets/sale_1.png')] bg-no-repeat rounded-[8px] bg-cover px-[15px]">
          <div className="w-full h-full py-[35px] flex items-center flex-col">
            <span className="uppercase text-sm text-white font-[500]">
              Best Deals
            </span>
            <h1 className="text-[35px] mt-[16px] lg:text-[40px] text-white font-[600] text-center leading-[120%]">
              Sale of the Month
            </h1>
            <img className="mt-[8px]" src={cardTime} alt="" />
            <button className="flex w-fit px-[32px] h-[45px] rounded-[43px] bg-white items-center gap-[12px] text-brandsuccess font-[600] mt-[24px] text-sm">
              Shop Now <ButtonRightArrow color="#00B307" />
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* second card */}
      <SwiperSlide>
        <div className="w-full aspect-[424_/_536] bg-[url('/src/assets/sale_2.png')] bg-no-repeat rounded-[8px] bg-cover px-[15px]">
          <div className="w-full h-full py-[35px] flex items-center flex-col">
            <span className="uppercase text-sm text-white font-[500]">
              85% Fat Free
            </span>
            <h1 className="text-[35px] mt-[16px] lg:text-[40px] text-white font-[600] text-center leading-[120%]">
              Low-Fat Meat
            </h1>
            <div className="text-white text-lg mt-[10px] flex items-center gap-[8px]">
              Started at
              <span className="text-warning font-[600] text-xl">$79.99</span>
            </div>
            <button className="flex w-fit px-[32px] h-[45px] rounded-[43px] bg-white items-center gap-[12px] text-brandsuccess font-[600] mt-[24px] text-sm">
              Shop Now <ButtonRightArrow color="#00B307" />
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* third card */}
      <SwiperSlide>
        <div className="w-full aspect-[424_/_536] bg-[url('/src/assets/sale_3.png')] bg-no-repeat rounded-[8px] bg-cover px-[15px]">
          <div className="w-full h-full py-[35px] flex items-center flex-col">
            <span className="uppercase text-sm text-black2 font-[500]">
              Summer Sale
            </span>
            <h1 className="text-[35px] mt-[16px] lg:text-[40px] text-black2 font-[600] text-center leading-[120%]">
              100% Fresh Fruit
            </h1>
            <div className="text-black2 text-lg mt-[10px] flex items-center gap-[8px]">
              Up to
              <span className=" font-[600] text-lg  w-fit h-[40px] rounded-[5px] bg-black2 text-[#FCC900] px-[12px] flex items-center">
                64% OFF
              </span>
            </div>
            <button className="flex w-fit px-[32px] h-[45px] rounded-[43px] bg-white items-center gap-[12px] text-brandsuccess font-[600] mt-[24px] text-sm">
              Shop Now <ButtonRightArrow color="#00B307" />
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SaleColsThree;
