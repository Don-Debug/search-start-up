import Footer from "./components/Footer";
import Important from "./components/Important";
import MostVisited from "./components/MostVisited";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <>
      <Important />
      <div className="flex flex-row pb-[5rem]">
        <div className="flex flex-col">
          <Profile />
          <Tasks />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <Search />
          <MostVisited />
        </div>
      </div>
      <Footer />
    </>
  );
}
