import "./post.css";
import {
  Close,
  MoreHoriz,
  ThumbUpOffAlt,
  ChatBubbleOutline,
  Public,
} from "@mui/icons-material";
import { Users } from "../../dummtData";

export default function Post({ post }) {
  const user = Users.filter((u) => u.id === post.userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img
              className="topImg"
              src={user[0].profilePicture}
              alt="This is an image"
            />

            <span className="postTopImgName">{user[0].username}</span>
            <span className="Date">{post.date}</span>
            <div className="public">
              <span className="publicContent">.</span>
              <span className="publicContentIcon">
                <Public Add sx={{ fontSize: "15px" }} />{" "}
              </span>
            </div>
          </div>

          <div className="postTopRight">
            <MoreHoriz className="postTopRightIcon" />
            <Close className="postTopRightIcon" />
          </div>
        </div>
        <div className="topPostCenterText">
          <span className="postTopText">{post.desc}</span>
        </div>

        <div className="postCenterImg">
          <img className="centerImg" src={post.photo} alt="" />
        </div>

        <div className="postBottomContent">
          <div className="postBottomLeft">
            <img className="bottomIcon" src="/assest/like.png" alt="" />
            <img className="bottomIcon" src="/assest/herat.png" alt="" />
            <span className="likeCommentText">{post.like}</span>
          </div>
          <div className="postBottomMiddleContents">
            <div className="postBottomMiddleContent">
              <span className="commentNum">{post.comment}</span>
              <span className="commentText">comments</span>
            </div>

            <div className="postBottomRight">
              <span className="commentNum">{post.share}</span>
              <span className="commentText">shares</span>
            </div>
          </div>
        </div>

        <hr className="postBottomHr" />
        <div className="lastBottomPostItems">
          <div className="lastBottomPostItem">
            <ThumbUpOffAlt />
            <span className="lastBottomPostItemText">Like</span>
          </div>
          <div className="lastBottomPostItem">
            <ChatBubbleOutline />
            <span className="lastBottomPostItemText">Comment</span>
          </div>
          <div className="lastBottomPostItem">
            <img
              className="lastBottomPostItemImg"
              src="/assest/share.png"
              alt=""
            />
            <span className="lastBottomPostItemText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}
