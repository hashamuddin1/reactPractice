import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, settextColor] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({ message: message });
    setTimeout(() => {
      setAlert(null);
    }, 2300);
  };
  const changeMode = () => {
    if (mode === "light") {
      settextColor("light");
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been On");
    } else {
      settextColor("dark");
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Off");
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
      <Alert alert={alert} />
      <TextContainer showAlert={showAlert} />
    </>
  );
}

export default App;
