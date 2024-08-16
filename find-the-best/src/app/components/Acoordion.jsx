


// // for latest accordion end


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
      <div className="container lg:mb-[126px] md:mb-[30px]">
        <div className="grid lg:grid-cols-12 lg:gap-[64px] md:gap-[0px] lg:pt-[90px] md:pt-[20px] md:px-[55px] lg:px-0">

          {/* First Column */}
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
                  <span className="text-[#09090B] font-Fraunces  lg:text-[20px] md:text-[18px] font-normal leading-[28px] text-[14px]">
                    {index.question}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform duration-300 ${openIndex === index
                      ? "bg-[#F7941D] rounded-full" // Yellow background when open
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
                  <div className="collapse-content bg-[#FFF7ED] p-4 h-[100px] overflow-y-auto ">
                    <p>{index.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second Column */}
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
                  <span className="text-[#09090B] font-Fraunces lg:text-[20px] md:text-[18px] font-normal leading-[28px] text-[14px] ">
                    {index.question}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform duration-300 ${openIndex === index
                      ? "bg-[#F7941D] rounded-full" // Yellow background when open
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
                  <div className="collapse-content bg-[#FFF7ED]  h-[100px] overflow-y-auto leading-6">
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
