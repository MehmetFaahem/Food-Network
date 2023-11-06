import React from "react";
import Image from "next/image";
import Logo from "../public/food-network 1.png";
import SearchButton from "../public/Frame 741.png";
import BrightNess from "../public/Frame 767.png";
import Steps from "../public/Frame 769.png";
import MenuIcon from "../public/Frame 765.png";
import Link from "next/link";
import HomeIcon from "../public/icons.png";
import Icon1 from "../public/icons (1).png";
import Icon2 from "../public/icons (2).png";
import Icon3 from "../public/icons (3).png";
import Icon4 from "../public/icons (4).png";

function ParentLayout({ children, icon, icon1 }: any) {
  return (
    <div>
      <div>
        <div className="flex content-center items-center p-[15px] justify-between h-[60px]">
          <div>
            <Image alt="" src={Logo} height={36} width={71} />
          </div>
          <div className="border-solid flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-[390px] h-[40px] rounded-[9px]">
            <input
              placeholder="Search Best Food"
              className="px-[15px] self-center font-normal text-[12px]"
            />
            <Link href="">
              <Image alt="" src={SearchButton} height={36} width={36} />
            </Link>
          </div>
          <div className="flex items-center space-x-[24px]">
            <Link href="">
              <Image alt="" src={BrightNess} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={Steps} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={MenuIcon} height={36} width={36} />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-[70px] items-center flex-col my-[60px] space-y-[36px] content-center max-h-full">
            <Link href="/">
              <Image alt="" src={icon} height={36} width={36} />
            </Link>
            <Link href="/foods">
              <Image
                alt=""
                src={icon1 ? icon1 : Icon1}
                height={36}
                width={36}
              />
            </Link>
            <Link href="">
              <Image alt="" src={Icon2} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={Icon3} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={Icon4} height={36} width={36} />
            </Link>
          </div>

          <div className="bg-gray-100 w-[100%] h-screen p-[16px] rounded-l-[24px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentLayout;
