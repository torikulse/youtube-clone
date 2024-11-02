function SubscribeItem(props) {
  return (
    <div className="flex items-center gap-4 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100">
      <img src={props.img} className="rounded-full w-7" /> <p>{props.text}</p>
    </div>
  );
}

export default SubscribeItem;
