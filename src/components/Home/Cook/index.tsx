"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="love-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="absolute right-0 -bottom-20 hidden lg:block">
          <Image
            src={"/images/gallery/img5.jpeg"}
            alt="burger-image"
            width={300}
            height={263}
            className="rounded-full w-80 h-80 object-cover"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5 gap-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/gallery/img6.jpeg"
              alt="nothing"
              width={500}
              height={408}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start">
              Love letter
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              💌 A Love Letter to You
            </h2>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2">
              My Dearest Damolaaaaaa, From the moment I met you, my world became
              brighter, my heart felt lighter, and every moment with you became
              a cherished memory. You are my source of happiness, my safe space,
              and my greatest blessing. Your smile is my favorite sight, your
              laughter my favorite sound, and your love my greatest treasure.
              Thank you for being you—so kind, so beautiful, and so full of
              love. Today, I celebrate you—the incredible, radiant soul that you
              are. May this year bring you all the joy, love, and success you
              deserve. Happy Birthday, my love! 💕 Forever Yours{" "}
            </p>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1">
              Beasky
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
