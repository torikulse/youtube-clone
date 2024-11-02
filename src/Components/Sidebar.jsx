import home_icon from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles_icon from "../assets/automobiles.png";
import sports_icon from "../assets/sports.png";
import entertainment_icon from "../assets/entertainment.png";
import technology_icon from "../assets/tech.png";
import music_icon from "../assets/music.png";
import blogs_icon from "../assets/blogs.png";
import news_icon from "../assets/news.png";
import jack_avater from "../assets/jack.png";
import simon_avater from "../assets/simon.png";
import tom_avater from "../assets/tom.png";
import cameron_avater from "../assets/cameron.png";

import SubscribeItem from "./SubscribeItem.jsx";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div
      className={`px-3 shadow-lg h-screen overflow-y-scroll bg-white fixed top-16  hidden md:block ${
        sidebar
          ? "xl:w-[17%] lg:xl:w-[19%] md:w-[20%]"
          : "xl:w-[6%] lg:xl:w-[7%] md:w-[10%] small-sidebar"
      } `}
    >
      <div
        onClick={() => setCategory(0)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100`}
      >
        <img
          src={home_icon}
          className={`w-5 ${category == 0 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Home</p>
      </div>
      <div
        onClick={() => setCategory(20)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100`}
      >
        <img
          src={game_icon}
          className={`w-5 ${category == 20 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Gaming</p>
      </div>
      <div
        onClick={() => setCategory(2)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={automobiles_icon}
          className={`w-5 ${category == 2 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Automobiles</p>
      </div>
      <div
        onClick={() => setCategory(17)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={sports_icon}
          className={`w-5 ${category == 17 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Sports</p>
      </div>
      <div
        onClick={() => setCategory(24)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={entertainment_icon}
          className={`w-5 ${category == 24 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Entertaiment</p>
      </div>
      <div
        onClick={() => setCategory(28)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={technology_icon}
          className={`w-5 ${category == 28 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Technology</p>
      </div>
      <div
        onClick={() => setCategory(10)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={music_icon}
          className={`w-5 ${category == 10 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Music</p>
      </div>
      <div
        onClick={() => setCategory(22)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={blogs_icon}
          className={`w-5 ${category == 22 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>Blogs</p>
      </div>
      <div
        onClick={() => setCategory(25)}
        className={`flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100 `}
      >
        <img
          src={news_icon}
          className={`w-5 ${category == 25 ? "border-b-2 border-red-500" : ""}`}
        />
        <p>News</p>
      </div>

      <hr />
      <h2
        className={`text-lg font-semibold ps-2 my-1 ${sidebar ? "" : "hidden"}`}
      >
        Subscriptions
      </h2>
      <SubscribeItem img={jack_avater} text="PewDiePie" />
      <SubscribeItem img={simon_avater} text="MrBeast" />
      <SubscribeItem img={tom_avater} text="Justin Bieber" />
      <SubscribeItem img={cameron_avater} text="Nas Daily" />
    </div>
  );
}

export default Sidebar;
