import Image from "next/image";
import visited from "../constants/Visited";
import Link from "next/link";

export default function MostVisited() {
  return (
    <>
      <div className="bg-[#2f2f2f] w-[80%] h-[20rem] flex flex-row flex-wrap justify-start items-start gap-2 rounded-md p-4 overflow-y-auto snap-x snap-mandatory profile-sb">
        {visited.map((item, index) => (
          <Link href={item.redirect} key={index} draggable="false">
            <div className="w-fit px-6 py-4 flex justify-start items-center gap-4 bg-[#2f2f2f] shadow-mine rounded-md">
              <Image
                src={item.icon}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-12 h-12 object-contain pointer-events-none"
              />
              <div className="flex flex-col justify-start items-start gap-1">
                <h2 className="text-[1.5rem] tracking-wider font-extralight">
                  {item.name}
                </h2>
                <p className="text-[0.8rem] font-thin text-[#8f8f8f]">
                  {item.link}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
