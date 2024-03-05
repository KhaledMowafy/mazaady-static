"use client"
import React, {useState} from "react";
import HThree from "../atoms/HThree";
import Image from "next/image";
import InfoCard from "../atoms/InfoCard";
import Text from "../atoms/Text";

function MobileQRCode() {
    const [openAccordion, setOpenAccordion] = useState('');

    const handleAccordionToggle = (id) => {
        setOpenAccordion(openAccordion === id ? '' : id);
      };
  return (
    <div className="flex flex-col justify-between bg-white rounded-3xl h-auto px-1 py-1 mt-8">
       <div id="accordion-collapse" data-accordion="collapse">
       <h2 className="flex justify-between" id="accordion-collapse-heading-1">
       <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500  rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target={`#accordion-collapse-body-1`}
          aria-expanded={openAccordion}
          aria-controls={`accordion-collapse-body-1`}
          onClick={() => handleAccordionToggle(1)}
        >
         <HThree>QR Code</HThree>
          <div className="flex w-2/6 justify-between mb-3">
            <Image src="./eye.svg" width={24} height={24} alt="view" />
            <Image src="./eye.svg" width={24} height={24} alt="view" />
            <Image src="./eye.svg" width={24} height={24} alt="view" />
          </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
         
        </h2>
      </div>
      <div
        id="accordion-collapse-body-1"
        className={openAccordion ? '' : 'hidden mt-8 pt-8'}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <InfoCard
          img="./document.svg"
          text="Download the QR code or share it with your friends."
          textClassName="text-black"
        />
        <div className="w-full p-5 bg-gradient-to-r from-pink to-yellow rounded-xl mt-3">
          <div className="bg-white p-3 flex flex-col justify-between items-center rounded-2xl">
            <Image src="./logoQR.svg" width={152} height={48} alt="logo" />
            <HThree>Hala Ahmed</HThree>
            <Image src="/QR.png" width={135} height={135} alt="logo" />
            <Text>Follow Us on Mazaady</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileQRCode;
