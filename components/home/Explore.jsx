"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "./components/CustomTexts";
import { exploreWorlds } from "@/constants";
import ExploreCard from "./components/ExploreCard";

export default function Explore() {
  const [active, setActive] = useState("world-2");

  return (
    <section className="px-6 py-12 sm:p-16 xs:p-8" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth flex flex-col mx-auto"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="hidden md:block" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
