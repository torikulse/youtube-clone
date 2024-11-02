import { Link } from "react-router-dom";

function Videocard(props) {
  return (
    <div>
      <div>
        <Link to={props.video_link}>
          <img className="rounded w-full" src={props.thumb} alt="" />
          <h1 className="text-xl font-semibold">{props.title}</h1>
        </Link>
      </div>
      <Link to={`/channel/${props.channel_link}`}>
        <h2 className="font-semibold">{props.name}</h2>
      </Link>
      <p className="text-sm">3M Views • a day ago</p>
    </div>
  );
}

export default Videocard;
