import { GoArrowUpRight } from "react-icons/go";
import about from "../public/Rectangle 24.png"

const About = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-[#020043] text-base border border-[#020043] px-6 py-3 rounded-full w-[139px]">
            Who we are
          </p>
          <h1 className="text-[#020043] text-4xl font-semibold mt-4">
            We Help To Get <br /> Soultions
          </h1>
          <p className="w-[670px] mt-4">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
          </p>
          <button className="bg-[#FFC637] px-6 py-3 rounded-2xl text-base font-semibold flex gap-2 items-center mt-11">Learn more <GoArrowUpRight /></button>
        </div>
        <div className="relative">
            <img src={about} alt="" />
            <div className="absolute top-[55%] -left-[15%] w-[417px] text-white bg-[#343268] px-8 py-12 rounded-3xl">
                <p className="text-2xl font-semibold mb-5">Our mission is simple</p>
                <p className="text-base">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
