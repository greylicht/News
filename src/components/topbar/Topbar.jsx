import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  
  return (
    <>
    <div className="top">
      <div className="topLeft">
        <img
          className="logo"
          src="/images/logo.png"
          alt="logo"
        />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">TENTANG KAMI</li>
          <li className="topListItem">PROGRAM</li>
          <li className="topListItem">BACA-DATA</li>
          <li className="topListItem">GAGASAN</li>
          <li className="topListItem">RANA PUSTAKA</li>
        </ul>
      </div>
        <div className="topRight">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>
      </div>
      
      </>
  );
}
