import About from "./components/About";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";

function App() {
  return (
    <>
      <Navbar title="Text Changer" />
      <TextContainer />
      <About />
    </>
  );
}

export default App;
