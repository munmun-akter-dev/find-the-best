import "../globals.css";
import { banner } from '../../utils/data';

const Hero = () => {
  return (
    <>
      <div className="bg-hero-img bg-no-repeat bg-cover">
        <div className="flex justify-center py-[320px]">
          <div className="">
            <h1 className="mb-4 text-white font-Fraunces lg:text-[96px] md:text-[48px] font-bold leading-[96px] text-center  ">
              {banner.title}
            </h1>
            <p className="mb-7 text-[#E2E8F0] text-center font-Urbanist lg:text-[24px] md:text-[20px] font-normal leading-32px ">
              {banner.description}
            </p>
            <div className="flex justify-center items-center">
              <button className="flex w-[162px] h-[48px] p-[10px] justify-center items-center text-white  bg-[#F7941D] font-Fraunces text-[16px] font-normal leading-[24px]  rounded-[4px]">
                {banner.btnTitle}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
