import React from "react";
import ReactDOM from "react-dom";

const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");

const timeString = `${hour}:${minutes}:${seconds}`;

const customStyle = {};
let greeting = "";
let emoji = "";

if (hour < 12) {
  greeting = "Good Morning!";
  customStyle.color = "red";
  emoji = "☀️";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "green";
  emoji = "🌤️";
} else {
  greeting = "Good Evening!";
  customStyle.color = "blue";
  emoji = "🌙";
}

ReactDOM.render(
  <div className="container">
    <h1 className="heading" style={customStyle}>
      {greeting} {emoji}
    </h1>
    <p className="time">Current time: {timeString}</p>
  </div>,
  document.getElementById("root")
);
