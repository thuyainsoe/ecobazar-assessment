import {
  BlackCart,
  ButtonRightArrow,
  DownIcon,
  EyeIcon,
  HeartIcon,
} from "./Icon";
import hotDeal1 from "@/assets/categories/hotdeal_1.png";
import hotDeal2 from "@/assets/categories/hotdeal_2.svg";
import hotDeal3 from "@/assets/categories/hotdeal_3.png";
import bestSeller1 from "@/assets/categories/bestseller_1.png";
import bestSeller2 from "@/assets/categories/bestseller_2.png";
import bestSeller3 from "@/assets/categories/bestseller_3.png";
import Stars from "./Stars";
import { useState } from "react";

const categoryData = [
  {
    id: 1,
    isClick: true,
    title: "Hot Deals",
    data: [
      {
        id: 1,
        name: "Green Apple",
        price: "$14.99",
        image: hotDeal1,
      },
      {
        id: 2,
        name: "Indian Malta",
        price: "$14.99",
        image: hotDeal2,
      },
      {
        id: 3,
        name: "Green Lettuce",
        price: "$14.99",
        image: hotDeal3,
      },
    ],
  },
  {
    id: 2,
    title: "Best Seller",
    isClick: false,
    data: [
      {
        id: 1,
        name: "Eggplant",
        price: "$14.99",
        image: bestSeller1,
      },
      {
        id: 2,
        name: "Red Capsicum",
        price: "$14.99",
        image: bestSeller2,
      },
      {
        id: 3,
        name: "Red Tomatos",
        price: "$14.99",
        image: bestSeller3,
      },
    ],
  },
  {
    id: 3,
    title: "Top Rated",
    isClick: false,
    data: [
      {
        id: 1,
        name: "Big Potatos",
        price: "$14.99",
        image: hotDeal1,
      },
      {
        id: 2,
        name: "Corn",
        price: "$14.99",
        image: hotDeal2,
      },
      {
        id: 3,
        name: "Fresh cauliflower",
        price: "$14.99",
        image: hotDeal3,
      },
    ],
  },
];

const SeperateCategory = () => {
  const [categoryStateData, setCategoryStateData] = useState(categoryData);
  const handleArrowClick = (id: number) => {
    setCategoryStateData((prev) => {
      return prev.map((section) => {
        if (section.id === id) {
          return { ...section, isClick: true };
        }
        return { ...section, isClick: false };
      });
    });
  };
  return (
    <div className="w-full flex flex-col-reverse gap-y-[10px] md:grid md:grid-cols-2 mxl:grid-cols-4 gap-x-[20px] mt-[26px]">
      <div className="md:col-[1/2] mxl:col-[1/4] grid lg:grid-cols-3 gap-x-[20px]">
        {categoryStateData.map((section) => (
          <div
            key={section.id}
            className="flex flex-col gap-[10px] lg:gap-[16px] py-[20px] px-[10px] mxl::p-[10px] justify-center lg:p-0 shadow-sm"
          >
            <h5
              className="text-base lg:text-lg font-[500] text-black2 w-full flex justify-between items-center cursor-pointer"
              onClick={() => handleArrowClick(section.id)}
            >
              {section.title}
              <span className={`lg:hidden`}>
                <DownIcon color="black" />
              </span>
            </h5>
            <div
              className={`${
                !section.isClick ? "hidden lg:flex" : "flex"
              } flex-col mxl:flex-row lg:flex-col gap-[8px] mxl:gap-[16px]`}
            >
              {section.data.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-[12px] border border-lightgray w-full pr-[10px] hover-green-shadow group transition-all"
                >
                  <img
                    className="max-w-[102px] aspect-square object-contain"
                    src={item.image}
                    alt="hot deal item"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-mddarkgray text-sm group-hover:text-successdark">
                      {item.name}
                    </span>
                    <div className="h-[46px] hidden group-hover:flex gap-[12px] mt-[4px]">
                      <div className="h-full w-[46px] rounded-[50%] border border-lightgray flex items-center justify-center icon-hover">
                        <BlackCart color="#1A1A1A" />
                      </div>
                      <div className="h-full w-[46px] rounded-[50%] border border-lightgray flex items-center justify-center icon-hover">
                        <EyeIcon />
                      </div>
                      <div className="h-full w-[46px] rounded-[50%] border border-lightgray flex items-center justify-center icon-hover">
                        <HeartIcon />
                      </div>
                    </div>
                    <span className="text-base text-black2 font-[500] group-hover:hidden">
                      {item.price}
                    </span>
                    <div className="mt-[10px] group-hover:hidden">
                      <Stars size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="md:col-[2/3] mxl:col-[4/5]">
        <div className="w-full h-full bg-[url('/src/assets/sale_3.png')] bg-no-repeat rounded-[8px] bg-cover px-[15px]">
          <div className="w-full h-full py-[35px] flex items-center flex-col justify-center mxl:justify-start">
            <span className="uppercase text-sm text-black2 font-[500]">
              Summer Sale
            </span>
            <h1 className="text-[35px] mt-[16px] lg:text-[40px] text-black2 font-[600] text-center leading-[100%]">
              Save 37%
              <span className="font-[400] text-[30px]">on Every Order</span>
            </h1>
            <button className="flex w-fit px-[32px] h-[45px] rounded-[43px] bg-white items-center gap-[12px] text-brandsuccess font-[600] mt-[24px] text-sm">
              Shop Now <ButtonRightArrow color="#00B307" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeperateCategory;
