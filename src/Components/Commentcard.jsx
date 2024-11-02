import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
function CommentCard() {
  return (
    <div className="flex items-start gap-4 py-2">
      <img
        className="w-10 rounded-full"
        src="https://yt3.ggpht.com/TxQbyHXWaKgCiMgaxILoLeU0B6KG2tOCVtLBY-knwbC1twB60cYQwpMoMrYnZO5ynbPdABtb=s88-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-bold">@jntluv</h3>
          <p className=" text-sm">a minute ago</p>
        </div>
        <p className="py-1">
          I have to say something. What will happen if Gi-hun loses in the
          marble game?
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img className="w-6" src={like} alt="" /> <p>2</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-6" src={dislike} alt="" /> <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
