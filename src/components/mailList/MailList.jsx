import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money..!</h1>
      <span className="dec">Sign up and we'll send best deals to you.</span>
      <div className="inputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
