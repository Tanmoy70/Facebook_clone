import "./leftbar.css";
import {
  People,
  Feed,
  Groups,
  Storefront,
  OndemandVideo,
  AccessTime,
  Bookmark,
  Flag,
  CalendarMonth,
  BarChart,
  KeyboardArrowDown,
} from "@mui/icons-material";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItems">
            <img className="leftbrImage" src="/assest/person/1.avif" />

            <span className="leftbarLesticonText">Tanmoy Kanrar</span>
          </li>
          <li className="leftbarListItems">
            <People
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Blue" }}
            />
            <span className="leftbarLesticonText">Find Friends</span>
          </li>
          <li className="leftbarListItems">
            <Feed
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Blue" }}
            />
            <span className="leftbarLesticonText">Feeds (most recent)</span>
          </li>
          <li className="leftbarListItems">
            <Groups
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Blue" }}
            />
            <span className="leftbarLesticonText">Groups</span>
          </li>
          <li className="leftbarListItems">
            <Storefront
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Blue" }}
            ></Storefront>
            <span className="leftbarLesticonText">Marketplace</span>
          </li>
          <li className="leftbarListItems">
            <OndemandVideo
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Blue" }}
            />
            <span className="leftbarLesticonText">Watch</span>
          </li>
          <li className="leftbarListItems">
            <AccessTime
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "skyBlue" }}
            />
            <span className="leftbarLesticonText">Memories</span>
          </li>
          <li className="leftbarListItems">
            <Bookmark
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Violet" }}
            />
            <span className="leftbarLesticonText">Saved</span>
          </li>
          <li className="leftbarListItems">
            <Flag
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Orange" }}
            />
            <span className="leftbarLesticonText">Pages</span>
          </li>
          <li className="leftbarListItems">
            <CalendarMonth
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "Red" }}
            />
            <span className="leftbarLesticonText">Events </span>
          </li>
          <li className="leftbarListItems">
            <BarChart
              Add
              sx={{ fontSize: "30px" }}
              className="leftbaricon"
              style={{ color: "skyBlue" }}
            />
            <span className="leftbarLesticonText"> Ads Manager</span>
          </li>
          <li className="leftbarListItems">
            <div className="arrowDown">
              <KeyboardArrowDown
                Add
                sx={{ fontSize: "30px" }}
                className="leftbaricon"
              />
            </div>

            <span className="leftbarLesticonText">See more</span>
          </li>
        </ul>
      </div>
      <div className="sidebarLastDiv">
        <span className="sidebarLastDivText">
          Privacy . Terms . Advertising . Ad choices . Cookies . More . Meta ©️
          2023
        </span>
      </div>
    </div>
  );
}
