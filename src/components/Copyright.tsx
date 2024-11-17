import {
  ApplePayIcon,
  DiscoverIcon,
  MasterCardIcon,
  SPaymentIcon,
  VisaCardIcon,
} from "./Icon";

const Copyright = () => {
  return (
    <div className="w-full py-[18px] lg:py-[24px] flex flex-col sm:flex-row gap-y-[10px] md:items-center justify-between">
      <span className="text-darkgray text-sm">
        Ecobazar eCommerce © 2021. All Rights Reserved
      </span>
      {/* icons */}
      <div className="flex items-center gap-[4px]">
        <ApplePayIcon />
        <VisaCardIcon />
        <DiscoverIcon />
        <SPaymentIcon />
        <MasterCardIcon />
      </div>
    </div>
  );
};

export default Copyright;
