import tasks from "../constants/Tasks";
export default function Tasks() {
  return (
    <>
      <div className="sm:w-[25rem] w-[100%] h-fit p-[2rem]">
        <div className=" bg-[#2f2f2f] sm:p-4 p-2 rounded-lg flex flex-col justify-start items-start gap-4">
          <h1 className=" self-center text-[1.4rem] font-light ">Tasks</h1>

          <div className="h-[25rem] overflow-y-auto snap-x snap-mandatory w-full profile-sb">
            {tasks.map((task, index) => (
              <div key={index} className="px-2 py-4 ">
                <h3 className="text-[1.1rem] font-extralight">{task.name}</h3>
                <p className="text-[#5f5f5f]">{task.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
