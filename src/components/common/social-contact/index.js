import React from "react";
import { SocialData } from "../../../data/social";
import LInkToPage from "./LInkToPage";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, i) => {
        return <LInkToPage item={item} key={i} />;
      })}
    </div>
  );
}

export default SocialContact;
