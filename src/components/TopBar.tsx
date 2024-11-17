import locationIcon from "@/assets/common/location_icon.svg";
import downIcon from "@/assets/common/down_icon.svg";

const TopBar = () => {
  return (
    <div className="h-[50px] flex items-center w-full justify-between shadow-[0px_1px_0px_0px_rgb(229,229,229)]">
      {/* left section */}
      <div className="flex gap-[8px] items-center">
        <img className="w-[15px] h-[18px]" src={locationIcon} alt="" />
        <span className="text-xs text-darkgray">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>
      </div>
      {/* right section */}
      <div className="flex items-center gap-[10px] md:gap-[20px] pl-[15px] md:pl-0">
        <div className="text-darkgray flex gap-[6px] text-xs">
          <span>Eng</span>
          <img src={downIcon} alt="" />
        </div>
        <div className="text-darkgray flex gap-[6px] text-xs">
          <span>USD</span>
          <img src={downIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
