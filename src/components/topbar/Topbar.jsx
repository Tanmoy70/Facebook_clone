import "./topbar.css";
import {
  Search,
  HomeOutlined,
  GroupOutlined,
  OndemandVideoOutlined,
  StorefrontOutlined,
  VideogameAssetOutlined,
  Menu,
  Notifications,
  Home,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="topbarLeft">
          <img
            className="logo"
            src="/assest/facebook.png"
            alt="This is an image"
          />
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              className="searchInput"
              type="text"
              placeholder="Search Facebook"
            />
            <hr className="topbarBottomHr" />
          </div>
        </div>
        <div className="topbarCenter">
          <Home
            className="topbarCenterIcon"
            Add
            sx={{ fontSize: "32px" }}
            htmlColor="blue"
          />

          <GroupOutlined
            className="topbarCenterIcon"
            Add
            sx={{ fontSize: "32px" }}
          />
          <OndemandVideoOutlined
            className="topbarCenterIcon"
            Add
            sx={{ fontSize: "32px" }}
          />
          <StorefrontOutlined
            className="topbarCenterIcon"
            Add
            sx={{ fontSize: "32px" }}
          />
          <VideogameAssetOutlined
            className="topbarCenterIcon"
            Add
            sx={{ fontSize: "32px" }}
          />
        </div>
        <div className="topbarRight">
          <div className="topbarRighticons">
            <div className="icon">
              <Menu
                className="lastTopbarMenuIcon"
                Add
                sx={{ fontSize: "30px" }}
              />
            </div>
            <div className="Image">
              <img className="msg" src="/assest/massenger2.png" alt="" />
            </div>

            <div className="iconSecond">
              <Notifications Add sx={{ fontSize: "25px" }} />
              <span className="notificationAlert">2</span>
            </div>

            <img className="profilePhoto" src="/assest/person/1.avif" alt="" />
            <span className="topbarOnline"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
