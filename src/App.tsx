import { useState } from "react";
import "./App.css";
import img2 from "./images/yacine.jpg"
import img1 from "./images/zawj.jpg"
const phrases = [
  "No",
  "rak mnytk?",
  "chof tcho?",
  "ana mohamed aalbalk?",
  "mattawdch hadi laffaire",
  "aya aya khamm chwya :",
];

function App() {
  const [nocount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = nocount * 20 + 16;

  function handleNoClick() {
    setNoCount(nocount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(nocount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="yacine"
            src={img1}
          />
          <div className="text">
            nlwtk bih a777777
          </div>
        </>
      ) : (
        <>
          <img
            alt="zawj"
            src={img2}
            style={{width: "360px" , height: "auto"}}
          />
          <div>will you be my valentine?</div>

          <button
            className="yesButton"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            yes
          </button>

          <button onClick={handleNoClick} className="nobutton">
            {getNoButtonText()}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
