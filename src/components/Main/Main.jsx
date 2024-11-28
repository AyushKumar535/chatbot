import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatBox from "./ChatBox";
// AIzaSyBC1bIVZN80zo7JbsEDNE6o6_KKTrYobHU
const Main = () => {
  const API_KEY = "AIzaSyDNqTPQ5WKoIG-qB6n4QgVCO6BXC_fDOYo";
  const [searchText, setSearchText] = useState("");
  const [output, setSearchOutput] = useState("");
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = searchText;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setSearchOutput(text);
    // console.log(output.length);
    // console.log(text);
  }
  //   run();
  return (
    <div className="main">
      {!output.length > 0 ? (
        <div>
          <div className="nav">
            <p>Namo</p>
            <img src={assets.user_icon} alt="" />
          </div>
          <div className="main-container">
            <div className="greet">
              <p>
                <span>Hello, AYUSH</span>
              </p>
              <p>How can I be of service to you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to visit in Bhubaneshwar.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Which is the best coding Platform?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Tips on cracking a job at first interview. 😎</p>
                <img src={assets.message_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ChatBox searchText={searchText} output={output} />
      )}

      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Enter your prompt"
          />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={run} src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className="bottom-info">
          Namo may display inaccurate info, including about people, so
          double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Main;
