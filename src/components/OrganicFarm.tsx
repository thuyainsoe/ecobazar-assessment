import { VideoIcon } from "./Icon";

const OrganicFarm = () => {
  return (
    <div className="w-full organic-background mt-[30px] lg:mt-[60px] min-h-[400px] flex flex-col gap-[30px] items-center justify-center px-[20px]">
      <h3 className="max-w-[495px] text-[30px] lg:text-[36px] text-white font-[600] text-center">
        We’re the Best Organic Farm in the World
      </h3>
      <div className="cursor-pointer">
        <VideoIcon />
      </div>
    </div>
  );
};

export default OrganicFarm;
