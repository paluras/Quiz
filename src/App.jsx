import { useState } from "react";

import "./App.css";
import { quiz } from "../test";
import fizio from "../fizio.json";
import fizioPat from "../fizioPat.json";
import histo from "../histo.json";
import igiena from "../igiena.json";
import anato from "../anato.json";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [count, setCount] = useState(1);
  const [ans, setAns] = useState([]);

  const [haide, setHaide] = useState(quiz);
  const [color, setColor] = useState("active");
  const [ordine, setOrdine] = useState(true);
  const [textOrdine, setTextOrdine] = useState("Vreau in ordine");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleOrdine = () => {
    setOrdine(!ordine);
    if (ordine == true) {
      setTextOrdine("Vreau amestecate");
    } else {
      setTextOrdine("Vreau in ordine");
    }
  };

  const findTrueValue = () => {
    const trueOption = haide.questions[count].options.find(
      (option) => option.bool === "true"
    );
    if (trueOption) {
      return trueOption.id + ")" + trueOption.text;
    }
    return "No true value found.";
  };

  const handleMaterie = (event) => {
    let materie = event.target.getAttribute("materieLes");
    console.log(materie);

    if (materie == 1) {
      handleButtonClick("button1");
      setHaide(quiz);
    } else if (materie == 2) {
      handleButtonClick("button2");
      setHaide(fizioPat);
    } else if (materie == 3) {
      handleButtonClick("button3");
      setHaide(fizio);
    } else if (materie == 4) {
      handleButtonClick("button4");
      setHaide(histo);
    } else if (materie == 5) {
      handleButtonClick("button5");
      setHaide(igiena);
    } else if (materie == 6) {
      handleButtonClick("button6");
      setHaide(anato);
    }
  };

  const handleClick = (event) => {
    let buttonValue = event.target.value;
    let materie = event.target.getAttribute("materie");
    let buttonTrue = event.target.getAttribute("bool");
    let question = haide.questions[count].question;

    if (question === undefined) return setCount(1);

    let haha = `${question}\n Raspuns Corect: \n ${findTrueValue()}
     \n  \\ ${count}-${buttonValue}-${buttonTrue}`;

    setAns((prevState) => [...prevState, haha]);
    if (count == undefined) return setCount(0);
    setCount("");
    if (ordine == false) {
      setCount(count + 1);
    } else {
      setCount(getRandomInt(150));
    }
  };

  return (
    <>
      <nav>
        <div className="nav-bar">
          <button
            style={{
              backgroundColor: activeButton === "button1" ? "red" : "white",
            }}
            materieles="1"
            className={`change`}
            onClick={handleMaterie}
          >
            AnatoPat
          </button>
          <button
            style={{
              backgroundColor: activeButton === "button2" ? "red" : "white",
            }}
            materieles="2"
            className={`change`}
            onClick={handleMaterie}
          >
            FizioPat
          </button>
          <button
            style={{
              backgroundColor: activeButton === "button3" ? "red" : "white",
            }}
            materieles="3"
            className={`change`}
            onClick={handleMaterie}
          >
            Fizio
          </button>
          <button
            style={{
              backgroundColor: activeButton === "button4" ? "red" : "white",
            }}
            materieles="4"
            className={`change`}
            onClick={handleMaterie}
          >
            Histo
          </button>
          <button
            style={{
              backgroundColor: activeButton === "button5" ? "red" : "white",
            }}
            materieles="5"
            className={`change`}
            onClick={handleMaterie}
          >
            Igiena
          </button>
          <button
            style={{
              backgroundColor: activeButton === "button6" ? "red" : "white",
            }}
            materieles="6"
            className={`change`}
            onClick={handleMaterie}
          >
            Anatomie
          </button>
          <button className={`change`} onClick={handleOrdine}>
            {textOrdine}
          </button>
        </div>
      </nav>
      <h3 className="container-title">{haide.questions[count].question}</h3>
      <div className="answer">
        <button
          id="a"
          onClick={handleClick}
          value="A"
          bool={haide.questions[count].options[0].bool}
          materie={haide.questions[count].options[0].materie}
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
          materie={haide.questions[count].options[0].materie}
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
          materie={haide.questions[count].options[0].materie}
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
          materie={haide.questions[count].options[0].materie}
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
          materie={haide.questions[count].options[0].materie}
        >
          E
        </button>
        <span>{haide.questions[count].options[4].text} </span>
      </div>
      <div></div>
      <div className="the-ans">
        {ans.reverse().map((element, index) => (
          <div className={`${element.slice(-2)}`} key={index}>
            {element}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
