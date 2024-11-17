import threeLineIcon from "@/assets/common/threeline_icon.svg";
import downIcon from "@/assets/common/whitedown_icon.svg";
import heartIcon from "@/assets/common/hear_icon.svg";
import cartIcon from "@/assets/common/cart_icons.svg";
import userIcon from "@/assets/common/user_icon.svg";
import { DownIcon } from "./Icon";
import { useMainContext } from "@/context/MainContext";

const navMenus = [
  {
    name: "Home",
    isActive: true,
    hasSub: true,
  },
  {
    name: "Shop",
    isActive: false,
    hasSub: true,
  },

  {
    name: "Pages",
    isActive: false,
    hasSub: true,
  },

  {
    name: "Blog",
    isActive: false,
    hasSub: true,
  },

  {
    name: "About Us",
    isActive: false,
    hasSub: false,
  },

  {
    name: "Contact Us",
    isActive: false,
    hasSub: false,
  },
];

const SubNavBar = () => {
  const { setIsClickCategory } = useMainContext();

  return (
    <div className="w-full h-auto xl:h-[64px] flex flex-col-reverse gap-y-[10px] xl:flex-row">
      {/* left section */}
      <div
        className="w-full xl:w-[23.6363%] flex items-center h-full cursor-pointer"
        onClick={() => {
          setIsClickCategory((prev: any) => !prev);
        }}
      >
        {/* category icon */}
        <div className="w-[64px] h-[64px] bg-brandsuccess flex items-center justify-center">
          <img src={threeLineIcon} alt="" />
        </div>
        <div className="w-[calc(100%-64px)] h-[64px] flex items-center px-[12px] xl:px-[20px] justify-between bg-charcol text-white">
          <span className="text-base cursor-pointer select-none">
            All Categories
          </span>{" "}
          <img className="w-[12px]" src={downIcon} alt="" />
        </div>
      </div>
      {/* right section */}
      <div className="w-full xl:w-[76.3637%] h-full px-[20px] bg-black2 flex justify-between items-center">
        {/* nav */}
        <ul className="flex items-center h-full text-sm gap-[24px] xl:gap-[32px] w-full overflow-x-auto scrollbar">
          {navMenus.map((nav) => (
            <li
              key={nav.name}
              className={`${
                nav.isActive ? "text-white" : "text-darkgray"
              } flex items-center gap-[8px] h-[64px] text-nowrap cursor-pointer`}
            >
              {nav.name}
              {nav.hasSub && (
                <DownIcon color={`${!nav.isActive ? "#808080" : "#fff"}`} />
              )}
            </li>
          ))}
        </ul>
        {/* right section */}
        <div className="flex items-center gap-[16px] xl:gap-[24px] min-w-fit pl-[20px] xl:pl-0">
          <img src={heartIcon} alt="" />
          <div className="relative min-w-[32px]">
            <img src={cartIcon} alt="" />
            <span
              className="w-[18px] h-[18px] rounded-[50%] text-white bg-successdark 
            font-[500] text-[10px] flex items-center justify-center absolute top-[-5px] right-0"
            >
              2
            </span>
          </div>
          <img src={userIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubNavBar;
