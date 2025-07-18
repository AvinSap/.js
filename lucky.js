import React, { useState } from "react";
import ReactDOM from "react-dom";

const firstName = "Avin";
const lastName = "Sapkota";
const currentYear = 2025;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  // Return a random hex color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function BasicApp() {
  const [luckyNumber, setLuckyNumber] = useState(7);
  const [bgColor, setBgColor] = useState("#667eea");

  const handleClick = () => {
    setLuckyNumber(getRandomInt(1, 100));
    setBgColor(getRandomColor());
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: bgColor,
        color: "white",
        minHeight: "100vh",
        padding: "3rem 1rem",
        transition: "background-color 0.5s ease",
      }}
    >
      <h1>LUCKY NUMBER GENERATOR</h1>
      <p>
        Hello, I am {firstName} {lastName}, and my lucky number is {luckyNumber}
        .
      </p>
      <p>I am a Software Developer. &copy; {currentYear}</p>

      <button
        onClick={handleClick}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "white",
          color: bgColor,
          fontWeight: "bold",
          marginTop: "2rem",
        }}
      >
        Change Lucky Number & Background
      </button>
    </div>
  );
}

ReactDOM.render(<BasicApp />, document.getElementById("root"));
