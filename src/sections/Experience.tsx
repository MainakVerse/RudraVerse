/* eslint-disable @next/next/no-img-element */
"use client";

import aiImage1 from "@/assets/ai-img-1.png";
import aiImage2 from "@/assets/ai-img-2.png";
import aiImage3 from "@/assets/ai-img-3.png";
import aiImage4 from "@/assets/ai-img-4.png";
import aiImage5 from "@/assets/ai-img-5.png";
import aiImage6 from "@/assets/ai-img-6.png";
import aiImage7 from "@/assets/ai-img-7.png";
import aiImage8 from "@/assets/ai-img-8.png";
import aiImage9 from "@/assets/ai-img-9.png";
import { motion } from "framer-motion";
import { GlobalHeading } from "../../components/GlobalHeading";

const aiImage = [
  aiImage1,
  aiImage2,
  aiImage3,
  aiImage4,
  aiImage5,
  aiImage6,
  aiImage7,
  aiImage8,
  aiImage9,
];

export const Experience = () => {
  return (
    <section className="py-35">
      <div className="w-[90%] m-auto md:container">
        <GlobalHeading
          title="   The Future of Fashion."
          subTitle=" Explore the bliss of powerful content, visual graphics and digital upliftment"
        />

        <div className="flex flex-col items-center gap-5 p-3 border rounded-xl border-white/20  mt-10">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="relative border rounded-xl border-white/20">
              <div className="absolute left-0 z-10 flex items-start justify-between w-full px-3 top-5 md:flex-col md:h-full">
                <div className="flex items-end gap-2">
                  
                </div>

                <div className="flex flex-col items-end justify-center mb-9 md:items-start">
                  
                  <div className="text-xs md:text-sm font-cinzel text-white/90">
                    Fashion-in-Action
                  </div>
                </div>
              </div>

              <div className="flex py-5 overflow-hidden bg-gradient-to-b from-[#7A1000] to-[#FE9D00]  rounded-lg  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                  className="flex flex-none gap-4 mt-16 md:m-0 -translate-x-0"
                  initial={{ translateX: "0%" }}
                  animate={{
                    translateX: "-50%",
                    transition: {
                      repeat: Infinity,
                      ease: "linear",
                      duration: "30",
                    },
                  }}
                >
                  {[...aiImage, ...aiImage].map((aiImage) => (
                    <div key={aiImage.src} className="">
                      <img
                        src={aiImage.src}
                        alt="aiImage"
                        className="w-[180px] rounded-lg md:w-[200px]"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            
          </div>

         
        </div>
      </div>
    </section>
  );
};
