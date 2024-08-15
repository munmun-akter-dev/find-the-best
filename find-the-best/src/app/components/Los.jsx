



const Los = () => {
  return (
    <>
      <div className="bg-[#09090B] ">
        <div className="container ">
          <div className="los_parent flex justify-center items-center lg:pt-[126px] md:pt-[40px] md:pb-[40px]">
            <div className="card bg-[#1F1F21] w-full md:max-w-[426px]   lg:max-w-[770px]  shadow-xl p-[80px] md:px-[80px] md:py-[48px] rounded-[8px]">

              <div className="card-body items-center text-center ">
                <h2 className="card-title text-white font-Fraunces text-[48px] md:text-[30px] font-normal leading-[48px] pb-[20px]">Los Geht’s</h2>



                {/* radio start */}

                <div className="radio_parent flex justify-center items-center gap-4">
                  <div className="flex justify-center items-center gap-2">

                    <input type="radio" name="radio-8" className="radio radio-error border-white  " />
                    <label className="text-white font-Urbanist text-[16px] font-normal leading-[16px]" htmlFor="">Male</label>
                  </div>
                  <div className="flex justify-center items-center gap-2">

                    <input type="radio" name="radio-8" className="radio radio-error" defaultChecked />
                    <label className="text-white font-Urbanist text-[16px] font-normal leading-[16px]" htmlFor="">Female</label>

                  </div>

                </div>
                {/* radio end */}

                <div className="flex justify-center items-center mt-[30px]">
                  <button className="flex w-[195px] h-[54px] p-[10px] justify-center items-center text-white  bg-[#F7941D] font-Fraunces text-[16px] font-normal leading-[24px]  rounded-[4px]">

                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                      <path d="M11.5 2.0625C9.73233 2.0625 8.00436 2.58668 6.5346 3.56874C5.06483 4.55081 3.91929 5.94665 3.24283 7.57977C2.56637 9.21288 2.38938 11.0099 2.73424 12.7436C3.07909 14.4773 3.93031 16.0698 5.18024 17.3198C6.43017 18.5697 8.02268 19.4209 9.75638 19.7658C11.4901 20.1106 13.2871 19.9336 14.9202 19.2572C16.5534 18.5807 17.9492 17.4352 18.9313 15.9654C19.9133 14.4956 20.4375 12.7677 20.4375 11C20.4345 8.63054 19.492 6.35896 17.8165 4.6835C16.141 3.00803 13.8695 2.06546 11.5 2.0625ZM14.9375 11.6875H12.1875V14.4375C12.1875 14.6198 12.1151 14.7947 11.9861 14.9236C11.8572 15.0526 11.6823 15.125 11.5 15.125C11.3177 15.125 11.1428 15.0526 11.0139 14.9236C10.8849 14.7947 10.8125 14.6198 10.8125 14.4375V11.6875H8.0625C7.88017 11.6875 7.7053 11.6151 7.57637 11.4861C7.44744 11.3572 7.375 11.1823 7.375 11C7.375 10.8177 7.44744 10.6428 7.57637 10.5139C7.7053 10.3849 7.88017 10.3125 8.0625 10.3125H10.8125V7.5625C10.8125 7.38016 10.8849 7.2053 11.0139 7.07636C11.1428 6.94743 11.3177 6.875 11.5 6.875C11.6823 6.875 11.8572 6.94743 11.9861 7.07636C12.1151 7.2053 12.1875 7.38016 12.1875 7.5625V10.3125H14.9375C15.1198 10.3125 15.2947 10.3849 15.4236 10.5139C15.5526 10.6428 15.625 10.8177 15.625 11C15.625 11.1823 15.5526 11.3572 15.4236 11.4861C15.2947 11.6151 15.1198 11.6875 14.9375 11.6875Z" fill="white" />
                    </svg>

                    Upload Image</button>
                </div>


              </div>
            </div>


          </div>


        </div>
      </div>

    </>

  );

}

export default Los;