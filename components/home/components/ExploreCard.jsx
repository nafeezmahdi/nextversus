"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        className="absolute w-full h-full object-cover rounded-[24px]"
        src={imgUrl}
        width={1920}
        height={700}
        alt={id}
      />{" "}
      {active !== id ? (
        <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[24px] glassmorphism mb-[16px]">
            <Image
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
              width={60}
              height={60}
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Nextverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
