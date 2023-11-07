"use client";
import Link from "next/link";
import ParentLayout from "../../components/ParentLayout";
import SearchButton from "../../public/Frame 741.png";
import Image from "next/image";
import Orange from "../../public/Frame 714.png";
import Apple from "../../public/Frame 714 (2).png";
import Default from "../../public/Frame 714 (1).png";
import Facebook from "../../public/facebook.png";
import LinkedIn from "../../public/linkedin.png";
import Twitter from "../../public/twitter.png";
import More from "../../public/link.png";
import HomeIcon from "../../public/icons.png";
import ImageOne from "../../public/ban2.png";
import ImageTwo from "../../public/ban1.png";
import { Quicksand } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Unfill } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";

import MenuIconMobile from "../../public/menu-01.png";
import { useState } from "react";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] });

const Fruits = [
  {
    name: "Oranges",
    vitamin: "C",
    image: Orange,
  },
  {
    name: "Apples",
    vitamin: "C",
    image: Apple,
  },
  {
    name: "Avocado",
    vitamin: "B6",
    image: Default,
  },
  {
    name: "Strawberries",
    vitamin: "C",
    image: Default,
  },
  {
    name: "Mangoes",
    vitamin: "A, C",
    image: Default,
  },
  {
    name: "Blueberries",
    vitamin: "C, K",
    image: Default,
  },
  {
    name: "Grips",
    vitamin: "A, C",
    image: Default,
  },
  {
    name: "Pineapples",
    vitamin: "C, K",
    image: Default,
  },
  {
    name: "Mangoes",
    vitamin: "A, C",
    image: Default,
  },
  {
    name: "Blueberries",
    vitamin: "C, K",
    image: Default,
  },
  {
    name: "Grips",
    vitamin: "A, C",
    image: Default,
  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <main className="">
      <ParentLayout icon={HomeIcon}>
        <div
          onClick={() => setShow(true)}
          className="mobile:flex mb-[16px] justify-between px-3 rounded-[10px]  place-items-center laptop:hidden bg-white w-full h-[40px]"
        >
          <div className="flex place-items-center space-x-4">
            <Image alt="" src={MenuIconMobile} height={20} width={20} />
            <h1 className="font-[600] text-[12px]">Select Food Item</h1>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            height="14px"
            width="14px"
            color="black"
          />
        </div>
        <div className="flex pb-[50px]">
          <div className="h-[630px] laptop:flex flex-col mobile:hidden pr-[16px] scrollbar-thin overflow-x-hidden overflow-scroll scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-[15px] items-center w-[300px] rounded-[15px] bg-white">
            <div className="w-[270px] flex content-center place-content-center items-center h-[45px] border-rose-300/30 border-2 border-solid rounded-[10px]">
              <Link
                href=""
                className="w-[134px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-rose-300/30"
              >
                <h1 className="text-orange-600 font-semibold text-[14px]">
                  Fruits
                </h1>
              </Link>
              <Link
                href=""
                className="w-[130px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-white"
              >
                <h1 className="text-black font-normal text-[14px]">
                  Vegetables
                </h1>
              </Link>
            </div>
            <div>
              <div className="border-solid pr-[1px] place-content-center place-items-center mt-[16px] flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-[270px] h-[34px] rounded-[9px]">
                <input
                  placeholder="Search by Fruits Name"
                  className="px-[15px] self-center font-normal text-[12px]"
                />
                <Link href="">
                  <Image alt="" src={SearchButton} height={20} width={27} />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-[500] py-[14px] text-[12px] text-black">
                Fruits List
              </h1>
              <div className="space-y-[10px]">
                {Fruits.map((data) => (
                  <div
                    key={data.name}
                    className="flex  place-items-center w-[270px] h-[73px] bg-white border-[1.5px] border-solid hover:border-orange-600 border-[rgba(229, 85, 39, 1)] rounded-[10px]"
                  >
                    <div className="p-[10px]">
                      <Image alt="" src={data.image} height={57} width={57} />
                    </div>
                    <div>
                      <h1 className="font-[500] text-black text-[14px]">
                        {data.name}
                      </h1>
                      <h1 className="font-[400] text-[rgba(16, 16, 16, 0.7)] text-[12px]">
                        Vitamin {data.vitamin}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white relative ml-[15px] mobile:w-full laptop:w-[70%] pr-6 rounded-[10px]">
            <div className="absolute mobile:hidden laptop:flex flex-col space-y-[22px] top-[70px] left-[30px]">
              <Link href="">
                <Image alt="" src={Facebook} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={LinkedIn} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={Twitter} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={More} height={28} width={28} />
              </Link>
            </div>
            <div className="mobile:ml-0  laptop:ml-[90px] laptop:flex-row mobile:flex-col flex mobile:mt-[12px] laptop:mt-[30px]">
              <div className="mobile:w-full laptop:px-0 mobile:px-[12px] laptop:w-[50%]">
                <h1 className="font-[900] mobile:text-[26px] laptop:text-[38px] text-[rgba(33, 33, 33, 1)]">
                  Health Benefits Of An Avocado
                </h1>
                <div>
                  <h2 className="font-[700] text-[14px] mt-[15px]">
                    Supports eye health:{" "}
                  </h2>
                  <p className="font-[400] mt-[10px] text-[12px]">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
                <div>
                  <h2 className="font-[700] text-[14px] mt-[15px]">
                    Supports eye health:{" "}
                  </h2>
                  <p className="font-[400] mt-[10px] text-[12px]">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
              </div>
              <div className="mobile:ml-0 laptop:px-0 mobile:px-[12px] mobile:py-[16px] laptop:py-0 laptop:ml-[15px]">
                <Image
                  src={ImageOne}
                  className="laptop:w-[400px] mobile:w-[306px] laptop:h-[250px] mobile:h-[130px]"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="mobile:ml-0 laptop:px-0 mobile:px-[12px] laptop:ml-[90px]">
              <h2 className="font-[700]  text-[14px] mobile:mt-[6px] laptop:mt-[18px]">
                Supports eye health:{" "}
              </h2>
              <p className="font-[400] mt-[10px] text-[12px]">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration..
              </p>
            </div>
            <div className="mobile:ml-0 laptop:px-0 mobile:px-[12px] laptop:ml-[90px] flex laptop:flex-row-reverse mobile:flex-col-reverse mt-[30px]">
              <div className="mobile:w-full laptop:w-[50%]">
                <div>
                  <h2 className="font-[700] text-[14px] mt-[15px]">
                    Supports eye health:{" "}
                  </h2>
                  <p className="font-[400] mt-[10px] text-[12px]">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.. Spinach contains
                    high levels of vitamin A and other antioxidants that help
                    maintain healthy vision and protect against age-related
                    macular degeneration.. Spinach contains high levels of
                    vitamin A and other antioxidants that help maintain healthy
                    vision and protect against age-related macular
                    degeneration.. Spinach contains high levels of vitamin A and
                    other antioxidants that help maintain healthy
                  </p>
                </div>
              </div>
              <div className="mr-[15px]">
                <Image
                  src={ImageTwo}
                  className="laptop:w-[400px] mobile:w-[306px] laptop:h-[250px] mobile:h-[130px]"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="laptop:ml-[90px] mobile:ml-[12px] mt-[42px] pb-[20px]">
              <h4 className={`${quicksand.className} font-bold text-[18px]`}>
                Was This Helpful?
              </h4>
              <div className="mt-[10px] flex space-x-2">
                <FontAwesomeIcon
                  icon={faStar}
                  width="24px"
                  height="24px"
                  color="rgba(229, 85, 39, 1)"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  width="24px"
                  height="24px"
                  color="rgba(229, 85, 39, 1)"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  width="24px"
                  height="24px"
                  color="rgba(229, 85, 39, 1)"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  width="24px"
                  height="24px"
                  color="rgba(229, 85, 39, 1)"
                />
                <FontAwesomeIcon
                  icon={Unfill}
                  width="24px"
                  height="24px"
                  color="rgba(229, 85, 39, 1)"
                  className="opacity-40"
                />
              </div>
            </div>
            <div className="mobile:flex ml-[12px] pb-[12px] laptop:hidden mt-[20px] flex-row space-x-[22px]">
              <Link href="">
                <Image alt="" src={Facebook} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={LinkedIn} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={Twitter} height={28} width={28} />
              </Link>
              <Link href="">
                <Image alt="" src={More} height={28} width={28} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`laptop:hidden ${
            show ? "mobile:visible" : "mobile:invisible"
          } fixed z-[1001] top-0 left-0 w-full h-full bg-slate-900/70`}
          onClick={() => setShow(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`h-full z-[1001] flex-col  pr-[16px] scrollbar-none overflow-x-hidden overflow-scroll scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-[15px] items-center w-[300px] rounded-r-[25px] bg-white`}
          >
            <div className="w-[270px] flex content-center place-content-center items-center h-[45px] border-rose-300/30 border-2 border-solid rounded-[10px]">
              <Link
                href=""
                className="w-[134px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-rose-300/30"
              >
                <h1 className="text-orange-600 font-semibold text-[14px]">
                  Fruits
                </h1>
              </Link>
              <Link
                href=""
                className="w-[130px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-white"
              >
                <h1 className="text-black font-normal text-[14px]">
                  Vegetables
                </h1>
              </Link>
            </div>
            <div>
              <div className="border-solid pr-[1px] place-content-center place-items-center mt-[16px] flex justify-between content-center border-[2px] border-[rgba(240, 242, 244, 1)] w-[270px] h-[34px] rounded-[9px]">
                <input
                  placeholder="Search by Fruits Name"
                  className="px-[15px] self-center font-normal text-[12px]"
                />
                <Link href="">
                  <Image alt="" src={SearchButton} height={20} width={27} />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-[500] py-[14px] text-[12px] text-black">
                Fruits List
              </h1>
              <div className="space-y-[10px]">
                {Fruits.map((data) => (
                  <div
                    key={data.name}
                    className="flex  place-items-center w-[270px] h-[73px] bg-white border-[1.5px] border-solid hover:border-orange-600 border-[rgba(229, 85, 39, 1)] rounded-[10px]"
                  >
                    <div className="p-[10px]">
                      <Image alt="" src={data.image} height={57} width={57} />
                    </div>
                    <div>
                      <h1 className="font-[500] text-black text-[14px]">
                        {data.name}
                      </h1>
                      <h1 className="font-[400] text-[rgba(16, 16, 16, 0.7)] text-[12px]">
                        Vitamin {data.vitamin}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParentLayout>
    </main>
  );
}
