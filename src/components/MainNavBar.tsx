import greenLeave from "@/assets/greenleave_icon.svg";
import searchIcon from "@/assets/common/search_icon.svg";
import phoneIcon from "@/assets/common/phone_icon.svg";

const MainNavBar = () => {
  return (
    <div className="w-full grid grid-cols-3 h-auto py-[20px] justify-between gap-y-[15px]">
      {/* logo section */}
      <div className="flex items-center gap-[8px]">
        <img src={greenLeave} alt="" />
        <h3 className="font-[500] text-2xl md:text-3xl">Ecobazar</h3>
      </div>
      {/* mid section */}
      <div className="flex items-center w-full col-[1/4] md:col-auto">
        <div className="w-[76.09%] px-[18px] h-[45px] flex items-center gap-[8px] border rounded-tl-[4px] rounded-bl-[4px] border-lightgray">
          <img className="max-w-[20px] h-[20px]" src={searchIcon} alt="" />
          <input
            className="border-none focus:outline-none w-full placeholder:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* button section */}
        <button className="text-white w-[23.902%] h-[45px] flex items-center text-sm font-[600] justify-center rounded-tr-[4px] rounded-br-[4px] bg-brandsuccess">
          Search
        </button>
      </div>
      {/* end section */}
      <div className="flex items-center gap-[12px] ml-auto col-[2/4] row-[1/2] md:col-auto md:row-auto">
        <img className="max-w-[40px] h-[40px]" src={phoneIcon} alt="" />
        <div className="flex flex-col items-start">
          <span className="text-sm text-mdgray">Customer Services</span>
          <span className="text-black2 text-lg md:text-xl">(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
