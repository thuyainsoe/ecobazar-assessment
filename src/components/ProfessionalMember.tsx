import people1 from "@/assets/people/people1.png";
import people2 from "@/assets/people/people2.png";
import people3 from "@/assets/people/people3.png";
import people4 from "@/assets/people/people4.png";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icon";

const people = [
  {
    id: 1,
    name: "Jenny Wilson",
    position: "Ceo & Founder",
    image: people1,
  },
  {
    id: 2,
    name: "Jane Cooper",
    position: "Worker",
    image: people2,
  },
  {
    id: 3,
    name: "Cody Fisher",
    position: "Security Guard",
    image: people3,
  },
  {
    id: 4,
    name: "Robert Fox",
    position: "Senior Farmer Manager",
    image: people4,
  },
];

const ProfessionalMember = () => {
  return (
    <div className="w-full mt-[30px] lg:mt-[60px] flex flex-col items-center">
      <p className="text-brandsuccess uppercase text-sm font-[500]">Team</p>
      <h3 className="mt-[3px] text-[30px] lg:text-[36px] font-[600] text-center">
        Our Professional Members
      </h3>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[20px] mt-[30px] lg:mt-[36px]">
        {people.map((item) => (
          <div
            key={item.id}
            className="w-full shadow-[0px_20px_48px_0px_rgba(0,38,3,0.08)] "
          >
            <div className="w-full h-auto hover-backdrop relative">
              <img
                className="w-full aspect-square object-cover"
                src={item.image}
                alt="people"
              />
              <div className="socials w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mx-auto flex items-center opacity-0">
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
            <div className="px-[20px] py-[16px] flex flex-col items-start">
              <span className="text-base mxl:text-lg font-[500] text-black2">
                {item.name}
              </span>
              <span className="text-sm text-darkgray">{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalMember;
