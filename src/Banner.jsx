import banner from "../public/Rectangle 5.png"
import gradient from "../public/Rectangle 6.png"

const Banner = () => {
    return (
        <div className="relative mt-10">
            <img src={banner} alt="" className="w-full mx-auto " />
            <img src={gradient} alt="" className="absolute top-0 w-full" />
            
            
        </div>
    );
};

export default Banner;