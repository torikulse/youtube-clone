import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import avater from "../assets/jack.png";
import { Link } from "react-router-dom";
function Navbar({ setSidebar }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 h-16 px-6 py-3 sticky top-0 left-0 w-full bg-white shadow">
        <div className="flex items-center gap-4">
          <img
            src={menu_icon}
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
            className="w-5 cursor-pointer"
          />
          <Link className="hidden sm:block" to="/">
            <img src={logo} className="w-36" />
          </Link>
        </div>

        <div className="flex items-center border border-slate-400 py-1.5 px-4 rounded-full">
          <input
            type="text"
            className="focus:outline-none md:min-w-72 lg:min-w-80 xl:min-w-96 hidden md:block"
            placeholder="Search"
          />
          <img src={search_icon} className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <img src={upload_icon} className="w-7 hidden md:block" alt="" />
          <img src={more_icon} className="w-7 hidden md:block" alt="" />
          <img src={notification_icon} className="w-7 hidden md:block" alt="" />
          <img src={avater} className="w-9 rounded-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
