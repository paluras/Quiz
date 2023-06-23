import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { quiz } from "../test";
import fizio from "../fizio.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(fizio);

function App() {
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState([]);
  const [truty, setTruty] = useState("");
  const [materie, setMaterie] = useState(true);
  const [haide, setHaide] = useState(quiz);


  const handleMaterie = () => {
    materie ? setMaterie(false) : setMaterie(true);

    if (materie === true) {
      setHaide(fizio);
    } else setHaide(quiz);
  };

  console.log(materie, haide);

  const handleClick = (event) => {
    let buttonValue = event.target.value;
    let materie =  event.target.getAttribute("materie"); 
    let buttonTrue = event.target.getAttribute("bool");
    setTruty(buttonTrue)
    console.log(buttonTrue);
   

    setAns((prevState) => [
      ...prevState,
      materie+ "-" + count + "-" + buttonValue + " - " + buttonTrue,
    ]);
    setCount("");
    setCount(getRandomInt(150));
    console.log(ans);
  };
 
 
  return (
    <>
      <h3 className="container-title">{haide.questions[count].question}</h3>
      <button className="change" onClick={handleMaterie}>Schimba Materia</button>

      <div className="answers-multipole">
        <div className="answer">
          <button
            id="a"
            onClick={handleClick}
            value="A"
            bool={haide.questions[count].options[0].bool}
            materie = {haide.questions[count].options[0].materie}
          >
            A
          </button>
          <span>{haide.questions[count].options[0].text}</span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="B"
            bool={haide.questions[count].options[1].bool}
            materie = {haide.questions[count].options[0].materie}
          >
            B
          </button>
          <span>{haide.questions[count].options[1].text}</span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="C"
            bool={haide.questions[count].options[2].bool}
            materie = {haide.questions[count].options[0].materie}
          >
            C
          </button>
          <span>{haide.questions[count].options[2].text}</span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="D"
            bool={haide.questions[count].options[3].bool}
            materie = {haide.questions[count].options[0].materie}
          >
            D
          </button>
          <span>{haide.questions[count].options[3].text} </span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="E"
            bool={haide.questions[count].options[4].bool}
            materie = {haide.questions[count].options[0].materie}
          >
            E
          </button>
          <span>{haide.questions[count].options[4].text} </span>
        </div>
      </div>
      <div className="the-ans">
        {ans.map((element, index) => (
          <div className={`${truty.toString()}`} key={index}>{element}</div>
        ))}
      </div>
    </>
  );
}

export default App;
