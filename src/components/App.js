import "../css/App.css";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import img1 from "../images/emoji1.png";
import img2 from "../images/emoji2.png";
import img3 from "../images/emoji3.png";
import img4 from "../images/emoji4.png";
import img5 from "../images/emoji5.png";

function App() {
  const [start, setStart] = useState(false);
  const [randopos, setRandopos] = useState([]);
  const images = [img4, img2, img1, img4, img5, img3, img2, img3, img1];

  useEffect(() => {
    var randomarr = [];
    var image = [];
    while (randomarr.length < 9) {
      var r = Math.floor(Math.random() * 9);
      if (randomarr.indexOf(r) === -1) {
        randomarr.push(r);
        image.push(images[r]);
        console.log(r);
      }
    }
    setRandopos(image);
  }, []);

  const handleClick = () => {
    setStart(!start);
  };

  return (
    <div className="App">
      <div className="first">
        <h1 className={start ? "Title":"title"}>Card Memory Game</h1>
        {!start && (
          <button className="startbtn" onClick={handleClick}>
            Start
          </button>
        )}
      </div>
      <div className="cards">{start && <Cards images={randopos} start={handleClick}/>}</div>
      <br></br>
    </div>
  );
}

export default App;
