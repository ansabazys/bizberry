"use client";

import { motion } from "framer-motion";
import MenuCategorySection from "./MenuCategorySection";

export default function HeroSection() {
  return (
    <section id="home" className="px-4 pt-[9.5rem] pb-16 sm:px-6 sm:pt-44 lg:px-8">
      <div className="mx-auto max-w-11/12">
        <div className="flex w-full md:justify-end">
          <div className="flex w-full flex-col gap-8 md:max-w-10/12 lg:grid lg:grid-cols-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-start-1 col-end-4 text-center text-[58px] leading-[0.9] font-medium tracking-tight text-[#941c1e] sm:text-7xl lg:text-left lg:text-9xl"
            >
              fresh,  daily,
              <br />
              mindful
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="col-start-4 col-end-6 flex justify-end text-center text-[16px] leading-tight font-medium tracking-tight text-[#941c1e] md:pl-30 sm:text-[36px] lg:pt-3 lg:text-left lg:text-xl"
            >
              coffee, shakes & bites - served daily from 10 am to 10:30 pm in pattambi
            </motion.div>
          </div>
        </div>

        <MenuCategorySection enablePagination={false} itemsPerPage={18} showViewMore={true} />
      </div>
    </section>
  );
}
