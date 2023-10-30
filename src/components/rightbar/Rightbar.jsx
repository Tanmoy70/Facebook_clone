import "./rightbar.css";
import {
  VideoCall,
  Search,
  MoreHoriz,
  Add,
  AddCircle,
} from "@mui/icons-material";

import { Users } from "../../dummtData";
import Friends from "../OnlineFriends/friends";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarTop">
          <span className="rightbarTopText">Sponsored</span>
          <div className="rightbarTopfrist">
            <div className="rightbarTopfristTextDiv">
              <img
                className="rightbarTopfristImg"
                src="/assest/ad..png"
                alt="This is an ad"
              />
              <span className="rightbarTopfristText">
                Enhance your writing everywhere{" "}
                <span className="rightbarTopfristTextSecond">
                  quillbot.com/chrome-extension
                </span>
              </span>
            </div>
          </div>
          <div className="rightbarTopfrist">
            <div className="rightbarTopfristTextDiv">
              <img
                className="rightbarTopfristImg"
                src="/assest/eyetest.jpg"
                alt="This is an ad"
              />
              <span className="rightbarTopfristText">
                Get Eye test done @ Home with Lenskart{" "}
                <span className="rightbarTopfristTextSecond">
                  eyetestwithlenskart.com
                </span>
              </span>
            </div>
          </div>
        </div>
        <hr className="rightbarTopfristHr" />

        <div className="rightbarCenterFrist">
          <div className="rightbarCenterFirstDiv">
            <span className="rightbarCenterFristText1">Friend requests</span>
            <span className="rightbarCenterFristText">See all</span>
          </div>

          <div className="rightbarCenterFirstFriend">
            <img
              className="rightbarCenterFirstImg"
              src="assest/person/5.avif"
              alt=""
            />
            <span className="rightbarCenterFirstName">Rintu Das</span>
            <span className="rightbarCenterFirstTime">3d</span>
          </div>
          <div className="rightbarCenterFirstMutual">
            <img
              className="rightbarCenterFirstMutualImg"
              src="/assest/person/2.avif"
              alt=""
            />
            <img
              className="rightbarCenterFirstMutualImg"
              src="/assest/person/3.avif"
              alt=""
            />
            <span className="rightbarCenterFirstMutualTest">
              13 mutual friends
            </span>
          </div>
          <div className="button">
            <button className="btnFirst">Confirm</button>
            <button className="btnSecond">Delete</button>
          </div>
          <hr className="centerFirstHr"></hr>
          <div className="centerSecondDiv">
            <span className="centerSecondDivName">Brithdays</span>
            <div className="centerSecondDivContent">
              <img
                className="centerSecondDivContentImg"
                src="/assest/gift.png"
                alt=""
              />
              <span className="centerSecondDivContentText">
                <b>Tannistha Pal</b> and <b>Surjo Roy</b> have birthdays today.
              </span>
            </div>
          </div>
          <hr className="centerSecondDivHr" />

          <div className="lastBottomDiv">
            <div className="lastBottomDivNavbar">
              <span className="lastBottomDivName">Contacts</span>
              <div className="lastBottomDivIcons">
                <VideoCall
                  className="lastBottomDivIcon"
                  Add
                  sx={{ fontSize: "20px" }}
                />
                <Search
                  className="lastBottomDivIcon"
                  Add
                  sx={{ fontSize: "20px" }}
                />
                <MoreHoriz
                  className="lastBottomDivIcon"
                  sx={{ fontSize: "20px" }}
                />
              </div>
            </div>
            {Users.map((f) => (
              <Friends key={f.id} friend={f} />
            ))}
          </div>
          <hr className="lastBottomDivHr" />
          <div className="lastBottomDivNavbar">
            <span className="lastBottomDivName">Group conversions</span>
          </div>
          <div className="lastBottomDivContent">
            <img
              className="lastBottomDivContentImg"
              src="/assest/post/6.avif"
              alt="This is an Image"
            />
            <span className="lastBottomDivfriendsOnline"></span>
            <span className="lastBottomDivContentName">
              Nature and Photography
            </span>
          </div>
          <div className="lastBottomDivContent">
            <div className="ICON">
              <Add Add sx={{ fontSize: "25px" }} />
            </div>

            <span className="lastBottomDivContentName">Create new group</span>
          </div>
        </div>
      </div>
    </div>
  );
}
