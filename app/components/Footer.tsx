export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" bg-[#2f2f2f] w-full h-[4rem] p-[2rem] flex justify-center items-center fixed bottom-0">
        <h1>
          &copy; Created by debug in <span>{year}</span>
        </h1>
      </div>
    </>
  );
}
