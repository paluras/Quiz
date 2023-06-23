import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { quiz } from "../test";


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function App() {
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState([]);
  const [truty , setTruty] = useState("")

  const handleClick = (event) => {
    let buttonValue = event.target.value;
    let buttonTrue = event.target.getAttribute("bool");
 
    console.log(buttonTrue);
    if (buttonTrue == true) {
      setTruty("Correct");
    }
    console.log(truty , "Yes");
    setAns((prevState) => [
      ...prevState,
      ", " + count + "-" + buttonValue + " - " + buttonTrue,
    ]);
    setCount("")
    setCount(getRandomInt(150));
    console.log(ans);
  };
  console.log(ans);


  




  return (
    <>
      <h1 className="container-title">{quiz.questions[count].question}</h1>
      <div className="answers-multipole">
        <div className="answer">
          <button
            id="a"
            onClick={handleClick}
            value="A"
            bool={quiz.questions[count].options[0].bool}
          >
            A
          </button>
          <span>{quiz.questions[count].options[0].text}</span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="B"
            bool={quiz.questions[count].options[1].bool}
          >
            B
          </button>
          <span>{quiz.questions[count].options[1].text}</span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="C"
            bool={quiz.questions[count].options[2].bool}
          >
            C
          </button>
          <span>
            {quiz.questions[count].options[2].text} 
            
          </span>
        </div>
        <div className="answer">
          <button
            onClick={handleClick}
            value="D"
            bool={quiz.questions[count].options[3].bool}
          >
            D
          </button>
          <span>{quiz.questions[count].options[3].text} </span>
        </div>
        <div className="answer">
          <button onClick={handleClick} value="E" 
          bool={quiz.questions[count].options[4].bool}>
            E
          </button>
          <span>{quiz.questions[count].options[4].text} </span>
        </div>
      </div>
      <h4>{ans}</h4>
    </>
  );
}

export default App;
