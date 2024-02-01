import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Result() {
  // added new
  const location = useLocation();
  console.log(location);

  return (
    <div className="result">
      <h1 className="result_heading">Result</h1>
      <div className="score-section">
        <h3>You need more practice!</h3>
        <h1 className="score">Your score is {location.state.score}</h1>
        <div className="flex">
          <div className="details">
            <h5 id="score-text">Totol number of quesions</h5>
            <h5 id="score-text">Number of attempted questions</h5>
            <h5 id="score-text">Number of correct answers</h5>
            <h5 id="score-text">Number of wrong answers</h5>
          </div>
          <div className="number">
            <h5 id="score-text">{location.state.totalQuestions}</h5>
            <h5 id="score-text">{location.state.answeredQuestions}</h5>
            <h5 id="score-text">{location.state.correctAnswer}</h5>
            <h5 id="score-text">{location.state.wrongAnswer}</h5>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Link to="/play-quiz">
          <button className="play">Play Again</button>
        </Link>
        <Link to="/">
          <button className="home-result">Back to home</button>
        </Link>
      </div>
    </div>
  );
}