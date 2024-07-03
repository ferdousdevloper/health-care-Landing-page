import { GoArrowUpRight } from "react-icons/go";
import banner from "../public/Rectangle 32.png";
import gradient from "../public/Rectangle 33.png";
import logo from "../public/logo light.png"

const BannerFooter = () => {
  return (
    <div className="relative mt-10">
      <img src={banner} alt="" className="w-full mx-auto rounded-[40px]" />
      <img
        src={gradient}
        alt=""
        className="absolute top-0 w-full rounded-[40px]"
      />
      <div className="absolute top-[20%] left-[8%]">
        <h1 className="text-[#FFFFF5] text-[40px] font-semibold">
          Get Your <br />
          First Appointment <br />
          at 50% Off!
        </h1>
        <div className="flex gap-6">
          <button className="bg-[#FFC637] px-6 py-3 rounded-2xl text-base font-semibold flex gap-2 items-center mt-11">
            Appointment <GoArrowUpRight />
          </button>
          <button className="border text-white px-6 py-3 rounded-2xl text-base font-semibold flex gap-2 items-center mt-11">
            Learn More <GoArrowUpRight />
          </button>
        </div>
      </div>
      <div className="absolute top-[10%] right-[5%]">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default BannerFooter;
