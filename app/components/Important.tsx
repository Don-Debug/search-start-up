import Link from "next/link";
import important from "../constants/Important";

export default function Important() {
  return (
    <>
      <div className="w-full px-[2rem] py-[1rem] flex sm:justify-center justify-start horizontal-sb sm:items-center items-start sm:gap-[5rem] gap-[2rem] overflow-x-auto snap-x snap-mandatory">
        {important.map((link, index) => (
          <div key={index}>
            <Link
              draggable="false"
              target="_blank"
              href={`${link.link}`}
              className="text-[0.9rem] font-light uppercase hover:underline"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
