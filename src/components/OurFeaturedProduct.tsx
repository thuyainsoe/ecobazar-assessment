import { BlackCart, ButtonRightArrow } from "./Icon";
import feature1 from "@/assets/categories/feature_1.png";
import feature2 from "@/assets/categories/feature_2.png";
import feature3 from "@/assets/categories/feature_3.png";
import feature4 from "@/assets/categories/feature_4.png";
import Stars from "./Stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const featureProductData = [
  {
    id: 1,
    name: "Chanise Cabbage",
    price: "$14.99",
    image: feature1,
  },
  {
    id: 2,
    name: "Green Lettuce",
    price: "$14.99",
    image: feature2,
  },
  {
    id: 3,
    name: "Green Chili",
    price: "$14.99",
    image: feature3,
  },
  {
    id: 4,
    name: "Corn",
    price: "$14.99",
    image: feature4,
  },
  {
    id: 5,
    name: "Cabbage",
    price: "$14.99",
    image: feature2,
  },
];

const OurFeaturedProduct = () => {
  return (
    <div className="w-full mt-[30px] lg:mt-[60px] flex flex-col items-center">
      <p className="text-brandsuccess uppercase text-sm font-[500]">Products</p>
      <h3 className="mt-[3px] text-[30px] lg:text-[36px] font-[600] text-center">
        Our Featured Products
      </h3>
      <div className="w-full mt-[36px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[12px] md:gap-[20px]">
        <div className="col-[1/2] w-full bg-[url('/src/assets/featured_1.png')] bg-cover bg-center py-[24px] px-[10px]">
          <div className="flex flex-col items-center">
            <span className="uppercase font-[500] text-xs text-black2">
              Summer Sale
            </span>
            <h2 className="font-[600] text-[28px] lg:text-[32px] text-brandsuccess mt-[8px]">
              75% off
            </h2>
            <button className="flex w-fit px-[22px] lg:px-[32px] h-[45px] text-nowrap rounded-[43px] group bg-white items-center gap-[12px] text-brandsuccess font-[600] mt-[16px] text-sm">
              Shop Now
              <span className="group-hover:translate-x-2 transition-all duration-150">
                <ButtonRightArrow color="#00B307" />
              </span>
            </button>
          </div>
        </div>
        <div className="col-[2/3] md:col-[2/5] lg:col-[2/6]">
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {featureProductData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="border border-lightgray w-full h-auto hover-green-shadow">
                  <img
                    className="w-full aspect-square object-contain"
                    src={item.image}
                    alt="feature product image"
                  />
                  <div className="py-[12px] px-[16px] flex items-center w-full justify-between min-h-[106px]">
                    <div className="flex flex-col items-start">
                      <span className="text-sm text-[#4D4D4D]">
                        {item.name}
                      </span>
                      <span className="text-black2 text-base font-[500]">
                        {item.price}
                      </span>
                      <div className="mt-[6px]">
                        <Stars size={12} />
                      </div>
                    </div>
                    <div className="w-[40px] h-[40px] bg-offwhite rounded-[50%] flex items-center justify-center icon">
                      <BlackCart />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedProduct;
