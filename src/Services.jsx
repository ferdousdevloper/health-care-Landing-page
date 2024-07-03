import { GoArrowUpRight } from "react-icons/go";
import service1 from "../public/Rectangle 27-2.png";
import arrow from "../public/arrow.svg";
import service2 from "../public/Rectangle 27-1.png"
import service3 from "../public/Rectangle 27.png"
const Services = () => {
  return (
    <div>
      <div className="bg-[#fffff5] p-10 rounded-3xl">
        <div className="grid grid-cols-2">
          <div>
            <div>
              <p className="text-[#020043] text-base border border-[#020043] px-6 py-3 rounded-full inline-block">
                Service
              </p>
            </div>
            <h1 className="text-[#020043] text-4xl font-semibold mt-4 leading-[54px]">
              Empowering Health, <br />
              Enriching Lives
            </h1>
            <p className="w-[450px] mt-4 leading-7">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <button className="bg-[#FFC637] px-6 py-3 rounded-2xl text-base font-semibold flex gap-2 items-center mt-11">
              Appointment <GoArrowUpRight />
            </button>
          </div>
          <div className="relative">
            <img src={service1} alt="" className="rounded-3xl w-full" />
            <div className="absolute top-[60%] left-[5%] w-[417px] text-white bg-[#343268] bg-opacity-[0.6] px-6 py-8 rounded-3xl">
              <p className="text-2xl font-semibold mb-5">
                Consultancy your health
              </p>
              <div className="flex">
                <p className="text-base">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <div className="mt-8 ml-6">
                  <img src={arrow} alt="" className="w-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 mt-14">
          <div className="relative">
            <img src={service2} alt="" className="rounded-3xl w-full" />
            <div className="absolute top-[60%] left-[5%] w-[417px] text-white bg-[#343268] bg-opacity-[0.6] px-6 py-8 rounded-3xl">
              <p className="text-2xl font-semibold mb-5">
              Online Doctor Meet
              </p>
              <div className="flex">
                <p className="text-base">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                </p>
                <div className="mt-8 ml-6">
                  <img src={arrow} alt="" className="w-[100px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={service3} alt="" className="rounded-3xl w-full" />
            <div className="absolute top-[60%] left-[5%] w-[417px] text-white bg-[#343268] bg-opacity-[0.6] px-6 py-8 rounded-3xl">
              <p className="text-2xl font-semibold mb-5">
              Consultancy your health
              </p>
              <div className="flex">
                <p className="text-base">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                </p>
                <div className="mt-8 ml-6">
                  <img src={arrow} alt="" className="w-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
