import Sidevideocard from "../Components/Sidevideocard";
import thumb from "../assets/thumbnail6.png";
import jack from "../assets/jack.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import CommentCard from "../Components/CommentCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../data";
import moment from "moment";
function Video() {
  const { videoId, categoryId } = useParams();
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };
  useEffect(() => {
    fetchVideoData();
  }, []);

  const [apiChannelData, setApiChannelData] = useState(null);

  const fetchChannelData = async () => {
    const fetchUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setApiChannelData(data.items[0]));
  };

  useEffect(() => {
    fetchChannelData();
  }, []);

  return (
    <div className="container mx-auto p-4 flex gap-4">
      <div className="w-[80%]">
        <iframe
          className="w-full aspect-video rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <h1 className="text-2xl font-bold py-2">
          {apiData ? apiData.snippet.title : "Title Not Found"}
        </h1>
        <div className="flex justify-between items-center py-2">
          <p>
            {apiData ? apiData.statistics.viewCount : ""} views •{" "}
            {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <img className="w-6" src={like} alt="" />
              <p>{apiData ? apiData.statistics.likeCount : ""}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6" src={dislike} alt="" /> <p></p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6" src={share} alt="" /> <p>Share</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6" src={save} alt="" /> <p>Save</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center py-2 gap-4 ">
            <img className="rounded-full w-14" src={jack} alt="" />
            <div>
              <h2 className="font-bold">
                {apiData ? apiData.snippet.channelTitle : ""}
              </h2>
              <p>30M subscribers</p>
            </div>
          </div>
          <div>
            <button className="border-none px-6 py-2 bg-red-600 rounded-xl text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="ps-16">
          <p className="py-1">
            {apiData ? apiData.snippet.description.slice(0, 250) : ""}
          </p>
          <hr />
          <h2 className=" font-bold py-2">
            {apiData ? apiData.statistics.commentCount : ""} Comments
          </h2>
          <div>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Sidevideocard
          thumb={thumb}
          title="this is vide title for video"
          name="Torik"
          views="32M"
        />
      </div>
    </div>
  );
}

export default Video;
