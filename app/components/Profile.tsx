import Image from "next/image";
import profilepic from "@/public/myself.png";
import socials from "../constants/constants";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="sm:w-[25rem] w-[100%] h-fit p-[2rem]">
        <div className=" bg-[#2f2f2f] sm:p-4 p-2 rounded-lg flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col justify-start items-start">
            <div className=" flex justify-start items-center gap-4 px-4">
              <Image
                src={profilepic}
                alt="profile-pic"
                width={1000}
                height={1000}
                className="w-[3.5rem] h-[3.5rem] rounded-full pointer-events-none"
              />
              <div>
                <h2 className="sm:text-[2rem] text-[1.6rem] font-light">
                  Debug
                </h2>
                <p className="text-[#8f8f8f] lowercase sm:flex hidden">
                  Frontend Developer
                </p>
              </div>
            </div>
            <p className="text-[#8f8f8f] lowercase px-4 sm:hidden flex">
              Frontend Developer
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-1 profile-sb overflow-x-auto snap-x snap-mandatory w-full">
            {socials.map((item, index) => (
              <div key={index} className=" flex-shrink-0 snap-center p-[1rem]">
                <Link href={`${item.link}`} target="_blank" draggable="false">
                  <Image
                    src={item.icon}
                    alt={`${index}`}
                    width={1000}
                    height={1000}
                    className="w-[2.5rem] h-[2.5rem] object-contain bg-white p-1 rounded-lg pointer-events-none"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
