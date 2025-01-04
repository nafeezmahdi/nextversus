"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`sm:px-16 px-6 py-8 relative`}
  >
    <div className="absolute w-2/4 inset-0 gradient-01" />
    <div
      className={`lg:w-[80%] 2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8`}
    >
      <Image
        src="/search.svg"
        className="w-6 h-6 object-contain"
        width={34}
        height={34}
        alt="search"
      />
      <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
        NEXTVERSUS
      </h2>
      <Image
        src="/menu.svg"
        className="w-6 h-6 object-contain"
        width={34}
        height={34}
        alt="search"
      />
    </div>
  </motion.nav>
);

export default Navbar;
