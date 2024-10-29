import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import avater from "../assets/jack.png";
function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <img src={menu_icon} className="w-5 " />
          <img src={logo} className="w-36" />
        </div>

        <div className="flex items-center border border-slate-400 py-1.5 px-4 rounded-full">
          <input
            type="text"
            className="focus:outline-none min-w-96"
            placeholder="Search"
          />
          <img src={search_icon} className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <img src={upload_icon} className="w-7" alt="" />
          <img src={more_icon} className="w-7" alt="" />
          <img src={notification_icon} className="w-7" alt="" />
          <img src={avater} className="w-9 rounded-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
