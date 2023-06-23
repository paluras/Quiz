import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { quiz } from "../test";
import fizio from "../fizio.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function App() {
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState([]);
  const [truty, setTruty] = useState("");
  const [materie, setMaterie] = useState(true);
  const [haide, setHaide] = useState(quiz);
  const[corect, setCorect] = useState("")


  const findTrueValue = () => {
   
    const trueOption =  haide.questions[count].options.find(option => option.bool === "true");
    if (trueOption) {
      return trueOption.id +")" + trueOption.text;
    }
    return "No true value found.";
  };


  console.log(findTrueValue());


  const handleMaterie = () => {
    materie ? setMaterie(false) : setMaterie(true);

    if (materie === true) {
      setHaide(fizio);
    } else setHaide(quiz);
  };

  

  const handleClick = (event) => {
    let buttonValue = event.target.value;
    let materie =  event.target.getAttribute("materie"); 
    let buttonTrue = event.target.getAttribute("bool");
    setTruty(buttonTrue)
   
  

    setAns((prevState) => [
      ...prevState,
     "Raspuns Corect:"+ findTrueValue() + materie+ "-" + count + "-" + buttonValue + " - " + buttonTrue ,
    ]);
    setCount("");
    setCount(getRandomInt(150));
    if (buttonTrue === "false"){
      setCorect(haide.questions[count]);
     }
  };
 
 
 
  return (
    <>
      <h3 className="container-title">{haide.questions[count].question}</h3>
      <button className="change" onClick={handleMaterie}>Schimba Materia</button>
      <div></div>
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
          <div className={`${element.slice(-2)}`} key={index}>{element}</div>
        ))}
      </div>
    </>
  );
}

export default App;
