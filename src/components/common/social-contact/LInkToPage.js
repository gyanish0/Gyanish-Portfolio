import React from "react";
export default function LInkToPage({ item, i }) {
  return (
    <div>
      <a href={item.link} key={i} target="_blank" rel="noopener noreferrer">
        <div className="social-icon-div">
          <img src={item.icon} className="social-icon" alt="hh" />
        </div>
      </a>
    </div>
  );
}
