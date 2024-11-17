import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icon";

const SubscribeSection = () => {
  return (
    <div
      className="w-full p-[30px] lg:p-[60px] bg-black2 flex flex-col justify-center
    md:flex-row items-center gap-[40px] mxl:gap-[60px]"
    >
      {/* left section */}
      <div className="w-full md:w-1/2 lgxxl:w-[38%] flex items-center gap-[8px] justify-center">
        <MailIcon />
        <div className="flex flex-col items-start">
          <span className="text-xl lg:text-2xl text-white font-[500]">
            Subcribe our Newsletter
          </span>
          <span className="text-[#666] text-sm">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </span>
        </div>
      </div>
      {/* right section */}
      <div
        className="w-full md:w-1/2 lgxxl:w-[62%] flex flex-col lgxxl:flex-row 
      items-center gap-[16px] md:gap-[24px] md:justify-between"
      >
        <div className="w-full lgxxl:w-[65%] max-w-[460px] h-[52px] rounded-[46px] overflow-hidden relative">
          <input
            type="text"
            className="w-full bg-charcol focus:outline-none text-base text-mdgray px-[16px] md:px-[24px] h-full"
            placeholder="Your email address"
          />
          <button className="absolute w-fit top-0 right-0 px-[20px] bg-brandsuccess h-full text-white text-sm lg:text-base font-[600] rounded-[46px] text-center">
            Subscribe
          </button>
        </div>
        <div className="w-full lgxxl:w-[35%] socials flex items-center justify-center md:justify-end gap-[8px]">
          <div
            className="w-[40px] h-[40px] rounded-[50%] hover:bg-brandsuccess transition-all duration-200
                 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <FacebookIcon />
          </div>
          <div
            className="w-[40px] h-[40px] rounded-[50%] hover:bg-brandsuccess transition-all duration-200
                 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <TwitterIcon />
          </div>
          <div
            className="w-[40px] h-[40px] rounded-[50%] hover:bg-brandsuccess transition-all duration-200
                 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <PinterestIcon />
          </div>
          <div
            className="w-[40px] h-[40px] rounded-[50%] hover:bg-brandsuccess transition-all duration-200
                 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
