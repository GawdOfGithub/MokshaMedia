"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="A small investment to unlock your potential"
          paragraph="The prices of pay is just a fraction of the value you will unlock by working with TAPAS"
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Podcast Package"
            price={isMonthly ? "400" : "4500"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for podcasters seeking professional editing"
          >
           




            <OfferList text=" Audio Cleanup & Enhancement" status="active" />
            <OfferList text="Noise Reduction & Equalization" status="active" />
            <OfferList text="Intro & Outro Music Integration" status="active" />
            <OfferList text="Basic Sound Effects Addition" status="active" />
            <OfferList text="Up to 4 Episodes per Month" status="active" />
            <OfferList text="Social Media Shorts Creation (up to 3 per episode)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Influence Elite"
            price={isMonthly ? "500" : "5500"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for influencers who need high-quality editing to enhance their personal brand and engage their audience."
          >
             <OfferList text=" Professional Video Editing for Up to 8 Videos per Month" status="active" />
            
            <OfferList text="Advanced Transitions & Effects for a Polished Look
" status="active" />
            <OfferList text="Custom Thumbnail Creation for Each Video" status="active" />
            <OfferList text="Motion Graphics and Text Overlays to Highlight Key Points
" status="active" />
            <OfferList text="Social Media Clips Creation (up to 5 per video) for Various Platforms" status="active" />
           
          </PricingBox>
          <PricingBox
            packageName=" Faceless Brand"
            price={isMonthly ? "600" : "6600"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=" Tailored for creators focusing on high-quality, engaging faceless content."
          >
 <OfferList text="Detailed Stratergy for faceless brand creation" status="active" />
            <OfferList text="Script Assistance & Storyboarding" status="active" />
            <OfferList text="Professional Voiceover Integration (provided by client)/AI" status="active" />
            <OfferList text="Up to 6 Faceless Videos per Month" status="active" />
           
            <OfferList text="Social Media Clips Creation (up to 5 per video)" status="active" />
            <OfferList text="Subtitle & Closed Captioning" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
