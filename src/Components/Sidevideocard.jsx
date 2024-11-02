function Sidevideocard(props) {
  return (
    <div>
      <div className="flex gap-2">
        <img className="w-48" src={props.thumb} />
        <div>
          <h1 className=" text-lg font-semibold">{props.title}</h1>
          <p>{props.name}</p>
          <p>{props.views} Views</p>
        </div>
      </div>
    </div>
  );
}

export default Sidevideocard;
