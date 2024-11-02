import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Videocard from "../Components/VideoCard";
import thumb from "../assets/thumbnail1.png";
function Home({ sidebar }) {
  let videoApi = [
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
    {
      link: "/video/1/2",
      thumb: thumb,
      title: "This is title for my videos",
      name: "Torik",
      channel_link: "@torik",
    },
  ];

  const [category, setCategory] = useState(0);
  return (
    <>
      <div className="flex items-start">
        <Sidebar
          sidebar={sidebar}
          category={category}
          setCategory={setCategory}
        />
        <div
          className={`md:block hidden ${
            sidebar
              ? "xl:w-[17%] lg:xl:w-[19%] md:w-[20%]"
              : "xl:w-[6%] lg:xl:w-[7%] md:w-[10%] small-sidebar"
          } `}
        ></div>
        <div
          className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 m-4 ${
            sidebar
              ? "xl:w-[83%] lg:w-[81%] md:w-[80%] w-full"
              : "xl:w-[94%] lg:xl:w-[93%] md:w-[90%]"
          } `}
        >
          {videoApi.map((e, i) => (
            <Videocard
              key={i}
              video_link={e.link}
              thumb={e.thumb}
              title={e.title}
              name={e.name}
              channel_link={e.channel_link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
