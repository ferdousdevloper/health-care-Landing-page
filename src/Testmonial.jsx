import avatar1 from "../public/Ellipse 10.png";
import avatar2 from "../public/Ellipse 10.svg";
import avatar3 from "../public/Ellipse 11.svg";
import star from "../public/fi-sr-star.svg";

const Testmonial = () => {
  return (
    <div>
      <div>
        <p className="text-[#020043] text-base border border-[#020043] px-6 py-3 rounded-full inline-block">
          Testimonial
        </p>
        <h1 className="text-[#020043] text-4xl font-semibold mt-4 leading-[54px]">
          What they say about us
        </h1>
        <div className=" grid grid-cols-3 gap-6 mt-7">
          <div className="p-5 bg-[#fffff5] rounded-3xl">
            <h1 className="text-[#020043] text-xl font-semibold leading-7 mb-3">
              Expertise and Compassion <br /> Combined
            </h1>
            <p className="text-[#4D4C7B] leading-7 mb-4">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-3">
              <img src={avatar1} alt="" />
              <div>
                <p>
                  <strong>Sarah D,</strong>IT Professional
                </p>
                <div className="flex gap-2">
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-[#fffff5] rounded-3xl">
            <h1 className="text-[#020043] text-xl font-semibold leading-7 mb-3">
              Life-Saving Care, Life-Changing <br />
              Experience
            </h1>
            <p className="text-[#4D4C7B] leading-7 mb-4">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="flex gap-3">
              <img src={avatar2} alt="" />
              <div>
                <p>
                  <strong>Michael R,</strong>Business Executive
                </p>
                <div className="flex gap-2">
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-[#fffff5] rounded-3xl">
            <h1 className="text-[#020043] text-xl font-semibold leading-7 mb-3">
              Expertise and Compassion <br /> Combined
            </h1>
            <p className="text-[#4D4C7B] leading-7 mb-4">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-3">
              <img src={avatar3} alt="" />
              <div>
                <p>
                  <strong>Sarah D,</strong>IT Professional
                </p>
                <div className="flex gap-2">
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                  <img src={star} alt="" className="w-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[6px] items-center justify-center mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle opacity="0.1" cx="6" cy="6" r="6" fill="#020043" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle cx="6" cy="6" r="6" fill="#FFC637" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle opacity="0.1" cx="6" cy="6" r="6" fill="#020043" />
        </svg>
      </div>
    </div>
  );
};

export default Testmonial;
