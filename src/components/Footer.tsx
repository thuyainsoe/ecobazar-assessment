import greenLeave from "@/assets/greenleave_icon.svg";
import { AppleIcon, PlayStoreIcon } from "./Icon";

const Footer = () => {
  return (
    <div className="w-full px-[12px] py-[30px] md:p-[30px] lg:p-[60px] gap-y-[30px] grid grid-cols-3 md:grid-cols-4 lgxxl:grid-cols-7 bg-offwhite gap-[20px]">
      <div className="flex flex-col gap-[16px] col-[1/4] md:col-[1/5] lgxxl:col-[1/3]">
        <div className="flex items-center gap-[8px]">
          <img src={greenLeave} alt="" />
          <h3 className="font-[500] text-2xl md:text-3xl">Ecobazar</h3>
        </div>
        <p className="text-sm text-darkgray">
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
        <div className="flex flex-row lgxxl:flex-col  xl:flex-row xl:items-center gap-x-[16px]">
          <span className="text-sm w-fit text-black2 font-[500] block pb-[6px] shadow-[0px_1px_0px_0px_rgb(32,181,38)] text-nowrap">
            (219) 555-0114
          </span>
          <span className="text-darkgray text-sm">or</span>
          <span className="text-sm text-black2 w-fit font-[500] block pb-[6px] shadow-[0px_1px_0px_0px_rgb(32,181,38)]">
            Proxy@gmail.com
          </span>
        </div>
      </div>
      <div className="col-[1/4] lgxxl:col-[3/6] grid grid-cols-3 gap-[20px] ">
        <div className="w-fit flex flex-col items-start gap-[16px]">
          <h6 className="text-black2 text-base font-[500]">My Account</h6>
          <ul className="text-sm text-[#666] flex flex-col gap-[12px]">
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              My Account
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Order History
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Shoping Cart
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Wishlist
            </li>
          </ul>
        </div>
        <div className="w-fit flex flex-col items-start gap-[16px]">
          <h6 className="text-black2 text-base font-[500]">Helps</h6>
          <ul className="text-sm text-[#666] flex flex-col gap-[12px]">
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Contact
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Faqs
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Terms & Condition
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="w-fit flex flex-col items-start gap-[16px]">
          <h6 className="text-black2 text-base font-[500]">Proxy</h6>
          <ul className="text-sm text-[#666] flex flex-col gap-[12px]">
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              About
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Shop
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Product
            </li>
            <li className="cursor-pointer hover:text-brandsuccess transition-all duration-150">
              Track Order
            </li>
          </ul>
        </div>
      </div>
      <div className="col-[1/4] md:col-[4/5] flex flex-col items-start gap-[16px] lgxxl:col-[6/8] ">
        <h6 className="text-black2 text-base font-[500]">
          Download Mobile App
        </h6>
        <div className="flex gap-[8px] w-full flex-row md:flex-col xl:flex-row text-nowrap  ">
          <div className="w-[152px] xl:w-1/2 flex items-center gap-[6px] p-[10px] bg-white">
            <div className="min-w-[28px]">
              <AppleIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-mddarkgray text-[11px]">
                Download on the
              </span>
              <span className="text-base font-[600] text-black2">
                App Store
              </span>
            </div>
          </div>
          <div className="w-[152px] xl:w-1/2 flex items-center gap-[6px] p-[10px] bg-white">
            <div className="min-w-[28px]">
              <PlayStoreIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-mddarkgray text-[11px]">
                Download on the
              </span>
              <span className="text-base font-[600] text-black2">
                Google play
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
