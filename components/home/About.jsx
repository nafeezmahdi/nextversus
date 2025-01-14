"use client";

import { motion } from "framer-motion";
import { TypingText } from "./components/CustomTexts";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function About() {
  return (
    <section className="py-12 sm:p-16 xs:p-8 px-6 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth flex flex-col justify-center items-center mx-auto"
      >
        <TypingText title="| About Nextversus" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Nextverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          nextverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the nextverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the nextverse world you want, turn your dreams into
          reality. Let&apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the nextverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
}
