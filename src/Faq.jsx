const Faq = () => {
  return (
    <div>
      <div>
        <p className="text-[#020043] text-base border border-[#020043] px-6 py-3 rounded-full inline-block">
          Faq
        </p>
        <h1 className="text-[#020043] text-4xl font-semibold mt-4 leading-[54px]">
          Frequntly Asked Question
        </h1>
        <div>
          <div className="collapse collapse-arrow bg-[#fffff5] my-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#020043] font-semibold">
            What are your office hours?
            </div>
            <div className="collapse-content bg-[#ffffff] text-[#343268]">
              <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#fffff5] my-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#020043] font-semibold">
            How can I schedule an appointment?
            </div>
            <div className="collapse-content bg-[#ffffff] text-[#343268]">
              <p>N/A</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#fffff5] my-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#020043] font-semibold">
            Do you accept insurance?
            </div>
            <div className="collapse-content bg-[#ffffff] text-[#343268]">
              <p>N/A</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#fffff5] my-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#020043] font-semibold">
            What should I bring to my appointment?
            </div>
            <div className="collapse-content bg-[#ffffff] text-[#343268]">
              <p>N/A</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#fffff5] my-3">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#020043] font-semibold">
            Do you offer telemedicine appointments?
            </div>
            <div className="collapse-content bg-[#ffffff] text-[#343268]">
              <p>N/A</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Faq;
