import React from "react";
import Buttons from "./modules/Buttons";
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="app">
          <div className="question-section">
            <h1 className="question-header">
              <span>1</span>/4
            </h1>
            <div className="question-text">
              일론 머스크의 우주 탐사 기업 이름은?
            </div>
          </div>
          <div className="answer-section">
           <Buttons /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
