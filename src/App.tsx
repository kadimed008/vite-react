import { useState } from "react";
import "./App.css";

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
            alt="Cat Standing On A White Background"
            src="https://media.giphy.com/media/8LdQvgNwjJ4qra/giphy.gif"
          />
          <div className="text">
            ana tani madabya
          </div>
        </>
      ) : (
        <>
          <img
            alt="Bear Holding A Bow And Arrow With A Heart"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnYyYmp5b2hqcmZleGtnNGhub2l0djVsOXFscHo2MnJ2aWFtdnNtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif"
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
