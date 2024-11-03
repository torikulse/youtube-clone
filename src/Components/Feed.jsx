import thumb from "../assets/thumbnail1.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";

function Feed({ sidebar, category }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
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
        {data.map((item, i) => (
          <div key={i}>
            {console.log(item)}
            <div>
              <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
                <img
                  className="rounded w-full"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                />
                <h1 className="text-xl font-semibold">{item.snippet.title}</h1>
              </Link>
            </div>
            <Link to={`/channel/${item.channel_link}`}>
              <h2 className="font-semibold text-gray-600">
                {item.snippet.channelTitle}
              </h2>
            </Link>
            <p className="text-sm">
              {item.statistics.viewCount} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feed;
