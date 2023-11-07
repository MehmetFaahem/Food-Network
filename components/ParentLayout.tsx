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
    <div className="w-auto">
      <div>
        <div className="mobile:hidden laptop:flex content-center items-center p-[15px] laptop:justify-between h-[60px]">
          <div className="">
            <Image alt="" src={Logo} height={36} width={71} />
          </div>
          <div className="border-solid  flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-auto h-[40px] rounded-[9px]">
            <input
              placeholder="Search Best Food"
              className="px-[15px] w-[360px]  self-center font-normal text-[12px]"
            />
            <Link href="">
              <Image alt="" src={SearchButton} height={36} width={36} />
            </Link>
          </div>
          <div className="flex items-center space-x-[24px]">
            <Link href="" className="">
              <Image alt="" src={BrightNess} height={36} width={36} />
            </Link>
            <Link href="" className="">
              <Image alt="" src={Steps} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={MenuIcon} height={36} width={36} />
            </Link>
          </div>
        </div>

        <div className="content-center items-center p-[15px] justify-between h-[60px] mobile:flex laptop:hidden">
          <div className="mobile:mr-[110px] laptop:mr-[0px]">
            <Image alt="" src={Logo} height={36} width={71} />
          </div>
          <div className="border-solid space-x-3 flex justify-between content-center w-auto h-[40px] rounded-[9px]">
            <Link href="">
              <Image alt="" src={SearchButton} height={36} width={36} />
            </Link>
            <Link href="">
              <Image alt="" src={MenuIcon} height={36} width={36} />
            </Link>
          </div>
        </div>

        <div className="flex relative">
          <div className="bg-white z-[1000]  bottom-0 laptop:static mobile:fixed laptop:w-[70px] mobile:w-full items-center flex-col laptop:my-[60px] mobile:my-0 laptop:space-y-[36px] content-center laptop:max-h-full">
            <div className="mobile:justify-between mobile:space-x-[10px] mobile:px-4 mobile:w-full mobile:py-2 laptop:space-x-0 flex mobile:content-center laptop:items-center laptop:space-y-[36px] laptop:flex-col mobile:flex-row">
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
          </div>

          <div className="bg-gray-100 laptop:w-[100%] h-auto p-[16px] rounded-l-[24px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentLayout;
