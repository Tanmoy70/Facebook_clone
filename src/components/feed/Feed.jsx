import Post from "../post/Post";
import "./feed.css";
import {
  AutoStories,
  MovieFilter,
  VideoCall,
  VideoCameraFront,
  AddPhotoAlternate,
  TagFaces,
  AddCircle,
} from "@mui/icons-material";

import { Posts } from "../../dummtData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="topDivision">
          <div className="topDivisionIcons">
            <div className="topDivisionIcon">
              <AutoStories className="topDivicon" htmlColor="blue" />
              <span
                className="icontext"
                htmlColor="blue"
                style={{ color: "blue" }}
              >
                Stories{" "}
              </span>
            </div>

            <div className="topDivisionIcon">
              <MovieFilter className="topDivicon" />
              <span className="icontext">Reels </span>
            </div>
            <div className="topDivisionIcon">
              <VideoCall className="topDivicon" />
              <span className="icontext">Rooms </span>
            </div>
            <hr className="FeedTopbarHr" />
          </div>
          <hr className="shareHr" />
          <div className="topDivisionCenter">
            <div className="centerBox">
              <ul className="CenterBoxUI">
                <li className="centerBoxLiIcon">
                  <div className="centerBoxLiIconDiv">
                    <AddCircle htmlColor="blue" Add sx={{ fontSize: "38px" }} />
                  </div>
                </li>
                <li className="centerBoxLi">Create story</li>
              </ul>
            </div>

            <ul className="centerBoxSecond">
              <li>
                {" "}
                <img
                  className="centerBoxSecondImg"
                  src="/assest/person/1.avif"
                  alt=""
                />
              </li>
              <li className="centerBoxTextSecond">
                <span>Tanmoy Kanrar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="centerDivision">
          <div className="cnterItems">
            <div className="top">
              <img
                className="centerDivImg"
                src="/assest/person/1.avif"
                alt=""
              />
              <input
                className="inputText"
                type="text"
                placeholder="What's on your mind, Coding?"
              />
            </div>
            <hr className="centerHr" />
            <div className="bottomIcons">
              <div className="bottomIconF">
                <VideoCameraFront htmlColor="red" />
                <span className="bottomIconsText">Live Video</span>
              </div>
              <div className="bottomIconF">
                <AddPhotoAlternate htmlColor="green" />
                <span className="bottomIconsText">Photo/video</span>
              </div>
              <div className="bottomIconF">
                <TagFaces htmlColor="gold" />
                <span className="bottomIconsText">Feeling/activity</span>
              </div>
            </div>
          </div>
        </div>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
