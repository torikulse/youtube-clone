import Sidevideocard from "../Components/Sidevideocard";
import thumb from "../assets/thumbnail6.png";
import jack from "../assets/jack.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import CommentCard from "../Components/CommentCard";
function Video() {

  return (
    <div className="container mx-auto p-4 flex gap-4">
      <div className="w-[80%]">
        <iframe
          className="w-full h-[600px]"
          src="https://www.youtube.com/embed/vnhmqWqs7kI?si=FDEFsZrVwLqyZ1pF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <h1 className="text-2xl font-bold py-2">
          This video for like our song and play game
        </h1>
        <div className="flex justify-between items-center py-2">
          <p>7M views • 9 hours ago</p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <img className="w-6" src={like} alt="" />
              <p>23K</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6" src={dislike} alt="" /> <p>2K</p>
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
              <h2 className="font-bold">Netflix</h2>
              <p>320M subscribers</p>
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
            There no stopping the game. Squid Game Season 2 on December 26,
            2024. Only on Netflix. More Info on Squid Game Season 2: Three years
            after winning Squid Game, Player 456 gave up going to the states and
            comes back with a new resolution in his min
          </p>
          <hr />
          <h2 className=" font-bold py-2">12K Comments</h2>
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
