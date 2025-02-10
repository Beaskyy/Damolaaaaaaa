"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CustomModal from "@/components/CustomModal";

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md ">
        <div className="bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-7">
            <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
              <p className="text-lg font-normal text-white mb-3 ls-51">
                Click to reveal
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                🎁 Your Surprise Message
              </h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-gray-900 hover:text-gray-900 lg:px-14 mr-6 border border-gray-900 hover:bg-transparent"
              >
                ✨ Click Here ✨
              </button>

              <div className="flex flex-col items-center justify-center">
                <CustomModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                >
                  <p className="mt-2 text-gray-900  text-2xl font-medium">
                    Damolaaaaaa, Thank you so much for everything, you are so
                    kind and lovely. Keep being who you are and strive to be
                    better 💖
                  </p>
                </CustomModal>
              </div>
            </div>
          </div>
          <div className="col-span-5 relative hidden md:block">
            <div>
              <Image
                src={"/images/Newsletter/soup.svg"}
                alt="soup-image"
                width={626}
                height={602}
                className="-mt-24"
              />
            </div>
            <div className="absolute top-[78%]">
              <Image
                src={"/images/Newsletter/onion.svg"}
                alt="onion-image"
                width={300}
                height={122}
              />
            </div>
            <div className="absolute top-[30%] right-[-23%] hidden lg:block">
              <Image
                src={"/images/Newsletter/lec.svg"}
                alt="lettuce-image"
                width={300}
                height={122}
              />
            </div>
            <div className="absolute bottom-[10%] left-[0%]">
              <Image
                src={"/images/Newsletter/yellow.svg"}
                alt="yellow-image"
                width={59}
                height={59}
              />
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src={"/images/Newsletter/blue.svg"}
                alt="blue-image"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
