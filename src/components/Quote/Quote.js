import axios from "axios";
import React, { useEffect, useState } from "react";
import Separator from "../common/separator";
// import "./work.css";
export default function Quote() {
  const [quote, setQuote] = useState("");
  const getQuote = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://programming-quotes-api.herokuapp.com/quotes/random`,
      });
      if (res.status === 200) {
        setQuote(res.data);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div>
      <Separator />
      <div style={{ padding: "20px 0px" }}>
        <label className="section-title">Quote</label>
      </div>
      <label htmlFor="" style={{ color: "darkblue" }}>
        Author :
      </label>
      &nbsp;&nbsp;
      <label htmlFor="">{quote.author}</label>
      <br />
      <label htmlFor="" style={{ color: "darkblue" }}>
        Random Quote :
      </label>
      &nbsp;&nbsp;
      <label htmlFor="">{quote.en}</label>
      <div style={{ marginBottom: "35px" }}></div>
    </div>
  );
}
