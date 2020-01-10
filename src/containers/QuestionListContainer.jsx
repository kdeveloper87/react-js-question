import React from "react";

const QuestionListContainer = ({ questionList = [], onClick, quizScores = {}, onClickMain }) => {

  return (
    <>
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
      <div className="back">
        <button className="btn btn-back" onClick={ onClickMain }>처음으로</button>
      </div>
    </>
  );
};

export default QuestionListContainer;
