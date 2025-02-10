import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex md:flex-row flex-col justify-between md:items-center lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="">
            <Logo />
            <h1>💫 Happy Birthday, My Love!</h1>
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 max-w-70%">
            You deserve the world and more! I hope this small gesture brings a smile to your face. 💕
            </p>
          </div>
            <div className="flex gap-6 items-center">
              <Link
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link
                href="https://www.instagram.com/damolaaaaaaa/"
                target="_blank"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
            </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 pt-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - Damolaaaaaaa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
