import chart from "../public/pi-chart.svg";
import contract from "../public/contract (1) 1.svg";
import star from "../public/fi-sr-star.svg";
import avatars from "../public/avatars.png";
import coin from "../public/coin.svg"
import video from "../public/video.svg"

const Status = () => {
  return (
    <div>
      <div className="relative mt-10">
        <h1 className="text-5xl font-semibold text-center">
          Comprehensive Care <br /> for Every Patient
        </h1>
        <div className="absolute top-0 grid grid-cols-5 gap-5">
          <div className="p-5 bg-[#fbfbfb] border rounded-3xl">
            <h1 className="text-[40px] font-semibold">90%</h1>
            <p className="max-w-[156px] mb-6">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <img src={chart} alt="" className="mx-auto" />
          </div>
          <div className="p-5 mt-32 bg-[#fffff5] border rounded-3xl h-48 ">
            <h1 className="text-[40px] font-semibold">500+</h1>
            <div className="flex">
              <p className="max-w-[156px] mb-6">Board-certified doctors</p>
              <img src={contract} alt="" className="mt-8" />
            </div>
          </div>
          <div className="p-5 mt-32 bg-[#fbfbfb] border rounded-3xl h-48 ">
            <div className="flex gap-4">
              <h1 className="text-[40px] font-semibold">4.8 </h1>
              <img src={star} alt="" />
            </div>
            <p className="max-w-[156px] mb-6">Over 20,000 Patient</p>
            <img src={avatars} alt="" className="mt-8" />
          </div>
          <div className="p-5 mt-32 bg-[#fffff5] border rounded-3xl h-48 ">
            <h1 className="text-[40px] font-semibold">$5000</h1>
            <div className="flex">
              <p className="max-w-[156px] mb-6">Money spend
              for poor patient</p>
              <img src={coin} alt="" className="mt-8" />
            </div>
          </div>
          <div className="p-5 bg-[#fbfbfb] border rounded-3xl">
            <h1 className="text-[40px] font-semibold">50+</h1>
            <p className="max-w-[156px] mb-6">
            Free lession video 
            for patient
            </p>
            <img src={video} alt="" className="mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
