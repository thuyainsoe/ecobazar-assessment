import {
  MoneyBackIcon,
  SecurePaymentIcon,
  ShippingCar,
  SupportIcon,
} from "./Icon";

const serviceCards = [
  {
    id: 1,
    mainLabel: "Free Shipping",
    subLabel: "Free shipping with discount",
    icon: <ShippingCar />,
  },
  {
    id: 2,
    mainLabel: "Great Support 24/7",
    subLabel: "Instant access to Contact",
    icon: <SupportIcon />,
  },
  {
    id: 3,
    mainLabel: "100% Sucure Payment",
    subLabel: "We ensure your money is save",
    icon: <SecurePaymentIcon />,
  },
  {
    id: 4,
    mainLabel: "Money-Back Guarantee",
    subLabel: "30 days money-back",
    icon: <MoneyBackIcon />,
  },
];

const FourColsServiceCards = () => {
  return (
    <div className="w-full grid  md:grid-cols-2 lg:grid-cols-4 gap-x-[24px] shadow-[0px_1px_0px_0px_rgb(229,229,229)]">
      {serviceCards.map((item) => (
        <div
          key={item.id}
          className="flex py-[30px] gap-[16px] items-center service-card"
        >
          <div className="w-[72px] h-[72px] rounded-[50%] bg-greenish flex items-center justify-center icon-container">
            {item.icon}
          </div>
          <div className="flex flex-col gap-[8px] items-start">
            <span className="text-black2 font-[600] text-lg">
              {item.mainLabel}
            </span>
            <span className="text-sm text-mdgray">{item.subLabel}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourColsServiceCards;
