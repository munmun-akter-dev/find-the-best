/* eslint-disable @next/next/no-img-element */
// import nav_img from "../../images/nav_img.png"
import nav_img from "../../../public/images/nav_img.png"


const Header = () => {
  return (
    <>

      <div className="container">
        <div className="navbar bg-white h-[92px] flex justify-center items-center md:px-[45px]">
          <div className="navbar-start">

            <a href="#" ><img src={nav_img.src} alt="" /></a>
          </div>

          <div className="navbar-center  lg:flex ">
            <ul className=" menu-horizontal px-1 gap-[62px]">
              <li><a href="#" className="text-[#030712] font-Urbanist text-[18px] font-normal leading-[28px] " >Home</a></li>
              <li><a href="#" className="text-[#030712] font-Urbanist text-[18px] font-normal leading-[28px] " >Process</a></li>

              <li><a href="#" className="text-[#030712] font-Urbanist text-[18px] font-normal leading-[28px] " >FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end ">
            <a href="#" className=" bg-[#F7941D] text-white rounded p-[10px] font-Fraunces text-[16px]  font-normal leading-[24px] uppercase">Get Started</a>
          </div>
        </div>
      </div>


    </>

  );
}

export default Header;