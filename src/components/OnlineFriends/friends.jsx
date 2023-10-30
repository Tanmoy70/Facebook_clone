import "./friends.css";

export default function Friends({ friend }) {
  return (
    <>
      <div className="lastBottomDivContent">
        <img
          className="lastBottomDivContentImg"
          src={friend.profilePicture}
          alt=""
        />
        <span className="lastBottomDivfriendsOnline"></span>
        <span className="lastBottomDivContentName">{friend.username}</span>
      </div>
    </>
  );
}
