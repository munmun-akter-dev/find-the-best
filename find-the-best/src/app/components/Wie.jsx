import { wie } from "../../utils/data";

const Wie = () => {
  return (

    <>

      <div className="container bg-white hidden  lg:block ">
        <div className="wie_parent flex justify-center items-center lg:mt-[120px] md:mt-[40px]">

          <h2 className="text-black text-center font-Fraunces text-5xl  font-normal leading-[48px] self-stretch">
            {wie.title}
          </h2>

        </div>

      </div>


    </>
  );
}

export default Wie;