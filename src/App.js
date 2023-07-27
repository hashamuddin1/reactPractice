import About from "./components/About";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, settextColor] = useState("dark");
  const changeMode = () => {
    if (mode === "light") {
      settextColor("light");
      setMode("dark");
    } else {
      settextColor("dark");
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        title="Text Changer"
        mode={mode}
        changeMode={changeMode}
        textColor={textColor}
      />
      <TextContainer />
      <About />
    </>
  );
}

export default App;
