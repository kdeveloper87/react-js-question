import React from "react";

const QuestionListContainer = ({ questionList = [], onClick, quizScores = {} }) => {
  return (
    <div className="items">
      { questionList.map( (item, index) => {
        return (
          <div className="item" key={ item.name }>
            <h3>{ item.name }</h3>
            <p>점수 : { quizScores[ index ] ? quizScores[ index ] : 0 }점</p>
            <button className="btn" onClick={ onClick } data-order={ index }>시작</button>
          </div>
        );
      } ) }
    </div>
  );
};

export default QuestionListContainer;