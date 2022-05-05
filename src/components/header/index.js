import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/index";
import Web from "./web/index";
import { useNavigate } from "react-router";
function Header() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  window.onscroll = function () {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div onClick={handleLogoClick} className="logo">
        <img
          src="./logo.png"
          alt=""
          style={{
            height: "auto",
            cursor: "pointer",
            width: "170px",
            // paddingLeft: "20px",
          }}
        />
        {/* Gyanish Shrivastava */}
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
