"use client";
import Image from "next/image";
import Link from "next/link";
import { FeaturesData } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="about-section"
      >
        <div className="text-center mb-14">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            About her
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto">
            Damolaaaaaaa is such a wonderful person
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          {FeaturesData.map((items, i) => (
            <div
              className="p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black"
              key={i}
            >
              <h3 className="text-2xl text-black dark:text-white font-semibold text-center mt-16">
                {items.heading}
              </h3>
              <p className="text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2">
                {items.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
