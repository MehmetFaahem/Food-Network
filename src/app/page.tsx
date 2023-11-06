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
  return (
    <main className="">
      <ParentLayout icon={HomeIcon}>
        <div className="flex">
          <div className="h-[630px] pr-[16px] scrollbar-thin overflow-x-hidden overflow-scroll scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-[15px] items-center w-[300px] rounded-[15px] bg-white">
            <div className="w-[270px] flex content-center place-content-center items-center h-[45px] border-rose-300/30 border-2 border-solid rounded-[10px]">
              <Link
                href=""
                className="w-[130px] flex content-center place-content-center text-center items-center h-[37px] rounded-[7px] bg-rose-300/30"
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
                  <div className="flex  place-items-center w-[270px] h-[73px] bg-white border-[1.5px] border-solid hover:border-orange-600 border-[rgba(229, 85, 39, 1)] rounded-[10px]">
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
          <div className="bg-white relative ml-[15px] w-[70%] rounded-[10px]">
            <div className="absolute flex flex-col space-y-[22px] top-[70px] left-[30px]">
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
      </ParentLayout>
    </main>
  );
}
