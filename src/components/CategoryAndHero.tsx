import { useState } from "react";
import {
  ButterIcon,
  ButtonRightArrow,
  CakeIcon,
  ChickenIcon,
  CookingIcon,
  DrinkAndWaterIcon,
  FruitIcon,
  RiverFishIcon,
  VegetablesIcon,
  ViewAllIcon,
  YogurtIcon,
} from "./Icon";
import { useMainContext } from "@/context/MainContext";

const categories = [
  {
    id: 1,
    name: "Fresh Fruit",
    icon: <FruitIcon />,
    isActive: false,
  },
  {
    id: 2,
    name: "Vegetables",
    icon: <VegetablesIcon />,
    isActive: true,
  },
  {
    id: 3,
    name: "River Fish",
    icon: <RiverFishIcon />,
    isActive: false,
  },
  {
    id: 4,
    name: "Chicken & Meat",
    icon: <ChickenIcon />,
    isActive: false,
  },
  {
    id: 5,
    name: "Drink & Water",
    icon: <DrinkAndWaterIcon />,
    isActive: false,
  },
  {
    id: 6,
    name: "Yogurt & Ice Cream",
    icon: <YogurtIcon />,
    isActive: false,
  },
  {
    id: 7,
    name: "Cake & Bread",
    icon: <CakeIcon />,
    isActive: false,
  },
  {
    id: 8,
    name: "Butter & Cream",
    icon: <ButterIcon />,
    isActive: false,
  },
  {
    id: 9,
    name: "Cooking",
    icon: <CookingIcon />,
    isActive: false,
  },
  {
    id: 10,
    name: "View all Category",
    icon: <ViewAllIcon />,
    isActive: false,
  },
];

const CategoryAndHero = () => {
  const [categoriesData, setCategoriesData] = useState(categories);
  const { isClickCategory } = useMainContext();

  const handleClickItem = (id: number) => {
    setCategoriesData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
    });
  };

  return (
    <div className="w-full mt-[10px] lg:mt-[24px] flex flex-col md:flex-row">
      {/* left section */}
      <div
        className={`${
          !isClickCategory
            ? "hidden"
            : "w-full md:w-[35%] lg:w-[23.6363%] mb-[10px] md:mb-0"
        } `}
      >
        <ul className="w-full border border-lightgray">
          {categoriesData.map((item) => (
            <li
              className={`${
                item.isActive && "active-icon text-white bg-brandsuccess"
              } py-[16px] px-[20px] flex items-center gap-[12px] border-b border-lightgray cursor-pointer`}
              onClick={() => handleClickItem(item.id)}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* right section */}
      <div
        className={`${
          isClickCategory
            ? "w-full  md:w-[65%] lg:w-[calc(76.3637%-24px)] md:ml-[10px] lg:ml-[24px]"
            : "w-full"
        }`}
      >
        <div className="w-full h-auto bg-[url('/src/assets/hero_img1.png')] min-h-[572px] bg-cover px-[30px] md:px-[48px] flex items-center">
          <div>
            <h2 className="text-5xl text-white font-[600] leading-[120%]">
              Fresh & Healthy <br /> Organic Food
            </h2>
            <p className="uppercase text-2xl text-white mt-[20px] relative pl-[24px] before-green-line">
              <span className="opacity-60">Sale Up to</span> <br />
              48% <span className="opacity-60">off</span>
            </p>
            <button
              className="h-[50px] px-[40px] w-fit py-[16px] bg-brandsuccess flex items-center mt-[32px] gap-[16px]
            rounded-[43px] text-base font-[600] text-white group"
            >
              Shop now
              <span className="group-hover:translate-x-2 transition-all duration-150">
                <ButtonRightArrow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAndHero;
