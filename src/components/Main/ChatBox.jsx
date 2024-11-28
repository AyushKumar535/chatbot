import React from "react";
import "./chat.css";
import { assets } from "../../assets/assets";

const ChatBox = ({ searchText, output }) => {
  const parseResponse = (text) => {
    const items = [];
    let currentItem = null;

    text.split("\n").forEach((line) => {
      if (line.startsWith("*")) {
        items.push(line.substring(2));
      } else {
        items.push(line);
      }
    });

    return items;
  };

  const parsedOutput = parseResponse(output);

  const renderItems = () => (
    <ul>
      {parsedOutput.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="chatBox">
      <div className="chat-card">
        <div className="chat-header">
          <div className="h2">
            <img src={assets.user_icon} alt="" width={50} height={50} />
            <h1>Ayush</h1>
          </div>
        </div>
        <div className="chat-body">
          <div className="message incoming">
            <p>1.{searchText}</p>
          </div>
          <div className="message outgoing">{renderItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
