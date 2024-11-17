import {
  BigFoodIcon,
  FoodIcon,
  MangoIcon,
  SeriesIcon,
  StepsIcon,
} from "./Icon";

const Companies = () => {
  return (
    <div className="flex items-center justify-between w-full scrollbar overflow-x-auto my-[30px] lg:my-[60px] p-[30px] lg:p-[60px] border border-lightgray">
      <div className="pr-[40px] company-icon-hover">
        <StepsIcon />
      </div>
      <span className="block w-[1px] h-[32px] bg-lightgray"></span>
      <div className="px-[40px] company-icon-hover">
        <MangoIcon />
      </div>
      <span className="block w-[1px] h-[32px] bg-lightgray"></span>
      <div className="px-[40px] company-icon-hover">
        <FoodIcon />
      </div>
      <span className="block w-[1px] h-[32px] bg-lightgray"></span>
      <div className="px-[40px] company-icon-hover">
        <BigFoodIcon />
      </div>
      <span className="block w-[1px] h-[32px] bg-lightgray"></span>
      <div className="pl-[40px] company-icon-hover">
        <SeriesIcon />
      </div>
    </div>
  );
};

export default Companies;
