"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="px-6 sm:px-16 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
          width={24}
          height={24}
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          NEXTVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          width={24}
          height={24}
        />
      </div>
    </motion.nav>
  );
}
