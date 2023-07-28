import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar
          title="Text Changer"
          mode={mode}
          changeMode={changeMode}
          textColor={textColor}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextContainer showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
