"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="message">
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
              Message
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              💌 A Message to you
            </h2>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2">
              Dearest Damolaaaaaa, You are a very kind person and very lovely
              too. It's nice knowing you and I am so happy to meet you. 
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
