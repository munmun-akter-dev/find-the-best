import "../globals.css";
import { banner } from '../../utils/data';

const Hero = () => {
  return (
    <>
      <div className="bg-hero-img bg-no-repeat bg-cover py-[320px]">
        <div className="flex justify-center">
          <div className="">
            <h1 className="lg:mb-4  text-white font-Fraunces lg:text-[96px] md:text-[48px] font-bold leading-[96px] text-center  ">
              {banner.title}
            </h1>
            <p className="lg:mb-7 md:mb-14 md:mt-[10px] text-[#E2E8F0] text-center font-Urbanist lg:text-[24px] text-[20px]  leading-32px  self-stretch">
              {banner.description}
            </p>
            <div className="flex justify-center items-center">
              <button className=" yellow_btn flex w-[162px] h-[48px] p-[10px] justify-center items-center text-white  bg-[#F7941D] font-Fraunces text-[16px] font-normal leading-[24px]  rounded-[4px]">
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
