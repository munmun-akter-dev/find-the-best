/* eslint-disable @next/next/no-img-element */

import nav_img from "../../../public/images/nav_img.png"

const Footer = () => {
  return (
    <>
      <div className="container bg-[#F8FAFC] pt-[128px]  ">
        <div className="grid grid-cols-12 ">

          <div className="col-span-4 mb-[46px] ">
            <a href="#"><div><img src={nav_img.src} alt="" /></div></a>
            <div className="svg_parent flex justify-start items-center mt-[48px] ">

              <a href="#"><div className="svg_child mr-[26px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M36.6668 20.5068C36.6668 11.2458 29.205 3.73828 20.0002 3.73828C10.7954 3.73828 3.3335 11.2458 3.3335 20.5068C3.3335 28.8763 9.42823 35.8136 17.396 37.0716V25.3539H13.1642V20.5068H17.396V16.8125C17.396 12.6099 19.8843 10.2885 23.6912 10.2885C25.5148 10.2885 27.422 10.616 27.422 10.616V14.7426H25.3205C23.2502 14.7426 22.6043 16.0353 22.6043 17.3614V20.5068H27.2267L26.4878 25.3539H22.6043V37.0716C30.5722 35.8136 36.6668 28.8766 36.6668 20.5068Z" fill="#27272A" />
                </svg>
              </div></a>


              <a href="#"> <div className="svg_child mr-[26px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.4043H13.3333C8.73097 5.4043 5 9.13526 5 13.7376V27.071C5 31.6733 8.73097 35.4043 13.3333 35.4043H26.6667C31.269 35.4043 35 31.6733 35 27.071V13.7376C35 9.13526 31.269 5.4043 26.6667 5.4043ZM32.0833 27.071C32.0742 30.0586 29.6543 32.4785 26.6667 32.4876H13.3333C10.3456 32.4785 7.92582 30.0586 7.91667 27.071V13.7376C7.92582 10.7499 10.3456 8.33011 13.3333 8.32096H26.6667C29.6543 8.33011 32.0742 10.7499 32.0833 13.7376V27.071ZM27.9167 14.1543C28.8372 14.1543 29.5833 13.4081 29.5833 12.4876C29.5833 11.5672 28.8372 10.821 27.9167 10.821C26.9962 10.821 26.25 11.5672 26.25 12.4876C26.25 13.4081 26.9962 14.1543 27.9167 14.1543ZM20 12.9043C15.8579 12.9043 12.5 16.2622 12.5 20.4043C12.5 24.5465 15.8579 27.9043 20 27.9043C24.1422 27.9043 27.5 24.5465 27.5 20.4043C27.5045 18.4138 26.7157 16.5036 25.3082 15.0961C23.9007 13.6886 21.9905 12.8999 20 12.9043ZM15.4167 20.4043C15.4167 22.9356 17.4687 24.9876 20 24.9876C22.5313 24.9876 24.5833 22.9356 24.5833 20.4043C24.5833 17.873 22.5313 15.821 20 15.821C17.4687 15.821 15.4167 17.873 15.4167 20.4043Z" fill="#27272A" />
                </svg>
              </div></a>

              <a href="#">  <div className="svg_child mr-[26px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M28.6268 7.07129H33.227L23.1768 18.367L35 33.738H25.7427L18.4918 24.4156L10.1954 33.738H5.5924L16.3419 21.656L5 7.07129H14.4924L21.0465 15.5923L28.6268 7.07129ZM27.0122 31.0303H29.5613L13.1073 9.63676H10.372L27.0122 31.0303Z" fill="#27272A" />
                </svg>
              </div></a>

              <a href="#"> <div className="svg_child mr-[26px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.4043C6.11928 5.4043 5 6.52358 5 7.9043V32.9043C5 34.285 6.11928 35.4043 7.5 35.4043H32.5C33.8807 35.4043 35 34.285 35 32.9043V7.9043C35 6.52358 33.8807 5.4043 32.5 5.4043H7.5ZM14.2013 12.0755C14.2106 13.6692 13.0177 14.6513 11.602 14.6442C10.2684 14.6372 9.10595 13.5755 9.11298 12.0778C9.12002 10.6692 10.2333 9.53721 11.6794 9.57003C13.1466 9.60285 14.2106 10.6786 14.2013 12.0755ZM20.4662 16.6739H16.2662H16.2638V30.9403H20.7028V30.6075C20.7028 29.9743 20.7023 29.341 20.7018 28.7075C20.7005 27.0178 20.699 25.3263 20.7077 23.6371C20.71 23.227 20.7287 22.8005 20.8342 22.409C21.2302 20.9465 22.5452 20.002 24.0123 20.2341C24.9545 20.3816 25.5778 20.9278 25.8403 21.8161C26.0022 22.3715 26.0748 22.9691 26.0818 23.5481C26.1008 25.2941 26.0982 27.0401 26.0955 28.7863C26.0945 29.4026 26.0935 30.0193 26.0935 30.6356V30.938H30.5467V30.5958C30.5467 29.8425 30.5463 29.0893 30.5458 28.3361C30.545 26.4536 30.544 24.5711 30.549 22.688C30.5513 21.8371 30.46 20.9981 30.2513 20.1755C29.9397 18.952 29.2952 17.9395 28.2475 17.2083C27.5045 16.6879 26.6888 16.3528 25.7772 16.3153C25.6733 16.311 25.5687 16.3053 25.4635 16.2996C24.9973 16.2744 24.5235 16.2488 24.0778 16.3387C22.8028 16.5942 21.6827 17.1778 20.8365 18.2066C20.7382 18.3246 20.642 18.4445 20.4985 18.6233L20.4662 18.6638V16.6739ZM9.4694 30.945H13.8874V16.6832H9.4694V30.945Z" fill="#27272A" />
                </svg>
              </div></a>

              <a href="#">
                <div className="svg_child ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M35.9884 12.0047C35.7986 11.3004 35.4276 10.658 34.9123 10.1416C34.3971 9.62524 33.7556 9.25279 33.0517 9.06135C30.4417 8.34469 20.0001 8.33302 20.0001 8.33302C20.0001 8.33302 9.56006 8.32135 6.94839 9.00635C6.24494 9.2066 5.60476 9.58432 5.08934 10.1032C4.57391 10.6222 4.20054 11.2649 4.00506 11.9697C3.31673 14.5797 3.31006 19.993 3.31006 19.993C3.31006 19.993 3.30339 25.433 3.98673 28.0164C4.37006 29.4447 5.49506 30.573 6.92506 30.958C9.56173 31.6747 19.9751 31.6864 19.9751 31.6864C19.9751 31.6864 30.4167 31.698 33.0267 31.0147C33.7309 30.8236 34.373 30.452 34.8895 29.9367C35.406 29.4213 35.779 28.7801 35.9717 28.0764C36.6617 25.468 36.6667 20.0564 36.6667 20.0564C36.6667 20.0564 36.7001 14.6147 35.9884 12.0047ZM16.6601 25.008L16.6684 15.008L25.3467 20.0164L16.6601 25.008Z" fill="#27272A" />
                  </svg>

                </div>
              </a>



            </div>


          </div>

          <div className="col-span-2">

            <a href="#"> <div className="mb-[24px]">
              <h6 className=" text-[#000] font-Fraunces  text-[20px] font-normal leading-[28px] align-self">Quick Link</h6>
            </div></a>
            <div className="mb-[16px]">
              <a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px] ">Home</a>
            </div>
            <div className="mb-[16px]">   <a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px] ">FAQ</a></div>
            <div><a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px]">Process</a></div>



          </div>

          <div className="col-span-2">

            <div className="mb-[24px]">
              <a href="#"><h6 className="text-[#000] font-Fraunces  text-[20px] font-normal leading-[28px] align-self ">Legal</h6></a>
            </div>
            <div className="mb-[16px]">
              <a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px]">Privacy Policy</a>
            </div>
            <div className="mb-[16px]">   <a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px]">Terms of Services</a></div>
            <div><a href="#" className="text-[#27272A] font-Urbanist text-[16px] font-normal leading-[16px]">Cookies Settings</a></div>




          </div>


          <div className="col-span-4 ">
            <div className="flex justify-end">
              <form >
                <a href="#">   <h6 className="text-[#000] font-Fraunces  text-[20px] font-normal leading-[28px] align-self mb-[24px]">Newsletter</h6></a>
                <fieldset className="">
                  <span className="text-[#27272A] font-Urbanist text-[20px] font-normal leading-[28px]">Join our newsletter to stay up to date on <br />
                    features and releases.</span>

                  <div className="flex gap-[10px] mt-[28px] ">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="input input-bordered text-[#71717A] font-Urbanist text-[16px] font-normal leading-[16px] w-[244px] h-[45px]" />

                    <button className="bg-[#F7941D] font-Fraunces text-[16px] uppercase font-normal leading-[24px] rounded-[4px] w-[160px] h-[45px] text-white p-[16px] flex justify-center items-center">Get Started</button>





                  </div>

                </fieldset>
              </form>
            </div>

          </div>

        </div>

        <hr className="text-[#CBD5E1] h-[1px] mt-[80px]" />

        <p className="flex justify-center items-center pb-[78px] mt-[35px] text-[#000] font-Urbanist text-[16px] font-normal leading-[16px]">© 2024 Find Best Look. All rights reserved.</p>




      </div >







    </>

  );
}

export default Footer;