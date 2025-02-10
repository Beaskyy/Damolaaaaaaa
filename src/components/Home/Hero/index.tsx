"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
          <div className="col-span-6">
            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
              🎉 Happy Birthday, Damolaaaaa! 🎉
            </h1>
            <p className="text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center">
              Today is not just another day—it’s the day the world was blessed
              with you. This page is a small gift to show how much you mean to
              me. 💖
            </p>
            <div className="flex md:flex-row flex-col justify-start gap-4">
              <Link
                href="#love-section"
                className="text-xl w-fit h-fit md:w-auto font-medium whitespace-nowrap rounded-full text-white py-5 px-6 bg-primary hover:text-primary border border-primary hover:bg-transparent"
              >
                Love Letter
              </Link>
              <Link
                href="#about-section"
                className="flex border h-fit w-fit md:w-auto md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary whitespace-nowrap hover:text-white hover:bg-primary"
              >
                About her
              </Link>
            </div>
          </div>
          <div className="col-span-6 flex justify-center relative">
            <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute"></div>
            <Image
              src="/images/gallery/img1.jpeg"
              alt="nothing"
              width={500}
              height={205}
              className="object-fit rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
