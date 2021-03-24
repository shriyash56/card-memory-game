import { React, useState, useEffect } from "react";
import "../css/Card.css";
import StopWatch from'./StopWatch';


function Cards({images,start}) {
  const cards = Array.from(Array(9).keys());
  const isFlipped = new Array(9);
  isFlipped.fill(false);
  const [flipped, setFlipped] = useState(isFlipped);
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [win,setWin]=useState(false);

  const toggleCard = (ID) => {
    setArray([...array, ID]);
    let newArr = [...flipped];
    newArr[ID] = !newArr[ID];
    setFlipped(newArr);
  };

  useEffect(() => {
    let newArr;
    if (array.length == 2 ) {
      if (images[array[0]] != images[array[1]]) {
        newArr = [...flipped];
        newArr[array[0]] = !newArr[array[0]];
        newArr[array[1]] = !newArr[array[1]];
        setFlipped(newArr);
      } else {
        setCount(count + 1);
      }
      setArray([]);
    }
    if (count == 4) {
      setWin(true);
      setFlipped(flipped.fill(false));
    }
  }, [flipped]);

  return (
    <>
      <StopWatch win={win} start={start}/>
      <div className="grid">
        {cards.map((card, index) => {
          return (
            <div id={card} key={index}>
              <div className="container" onClick={() => toggleCard(card)}>
                <div className={flipped[card] ? "flipped" : "card"}>
                  <div className="front"></div>
                  <div className="back">
                    <img className="emoji" src={images[index]} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

export default Cards;
