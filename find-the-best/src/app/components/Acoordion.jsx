



// for latest accordion start

"use client"; // Add this line to mark the component as a Client Component

import { faqs } from "@/utils/data";
import { faq } from "@/utils/data";
import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      <div className="container mb-[126px]">
        <div className="grid grid-cols-12 gap-[64px] pt-[90px]">


          <div className="col-span-6">

            {faqs.map((index) => (
              <div
                key={index}
                className="collapse collapse-minus bg-[#F9FAFB] my-2 rounded-lg mb-[30px]"
              >
                <input
                  type="radio"
                  name="my-accordion"
                  checked={openIndex === index}
                  onChange={() => handleClick(index)}
                  className="hidden"
                />

                <div
                  className={`collapse-title text-xl font-medium flex justify-between items-center cursor-pointer p-4 ${openIndex === index ? "bg-[#FFF7ED]" : ""
                    }`}
                  onClick={() => handleClick(index)}
                >
                  <span className="text-[#09090B] font-Fraunces text-[20px] font-normal leading-[28px]">{index.question}</span>



                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform duration-300 ${openIndex === index
                      ? "bg-yellow-500 rounded-full" // Yellow background when open
                      : "bg-[#94A3B8] rounded-full" // Gray background when closed
                      }`}
                  >
                    <path
                      d={
                        openIndex === index
                          ? "M4 12H20" // Minus icon path
                          : "M12 4V20M4 12H20" // Plus icon path
                      }
                      stroke={openIndex === index ? "white" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {openIndex === index && (
                  <div className="collapse-content bg-[#FFF7ED] p-4">
                    <p>{index.answer}</p>
                  </div>
                )}
              </div>
            ))}






          </div>



          <div className="col-span-6">

            {faq.map((index) => (
              <div
                key={index}
                className="collapse collapse-minus bg-[#F9FAFB] my-2 rounded-lg mb-[30px]"
              >
                <input
                  type="radio"
                  name="my-accordion"
                  checked={openIndex === index}
                  onChange={() => handleClick(index)}
                  className="hidden"
                />

                <div
                  className={`collapse-title text-xl font-medium flex justify-between items-center cursor-pointer p-4 ${openIndex === index ? "bg-[#FFF7ED]" : ""
                    }`}
                  onClick={() => handleClick(index)}
                >
                  <span className="text-[#09090B] font-Fraunces text-[20px] font-normal leading-[28px]">{index.question}</span>



                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform duration-300 ${openIndex === index
                      ? "bg-yellow-500 rounded-full" // Yellow background when open
                      : "bg-[#94A3B8] rounded-full" // Gray background when closed
                      }`}
                  >
                    <path
                      d={
                        openIndex === index
                          ? "M4 12H20" // Minus icon path
                          : "M12 4V20M4 12H20" // Plus icon path
                      }
                      stroke={openIndex === index ? "white" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {openIndex === index && (
                  <div className="collapse-content bg-[#FFF7ED] p-4">
                    <p>{index.answer}</p>
                  </div>
                )}
              </div>
            ))}






          </div>




        </div>
      </div>
    </div>
  );
}


// for latest accordion end

