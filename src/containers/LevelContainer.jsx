import React from "react";

const LevelContainer = ({ onClick }) => {
  return (
    <div className="contents">
      <QuestionCard
        title={ titleLevel1 }
        contents={ contentsLevel1 }
        level={ LEVEL.INTERMEDIATE }
        onClick={ onClick }
      />

      <QuestionCard
        title={ titleLevel2 }
        contents={ contentsLevel2 }
        level={ LEVEL.ADVANCED }
        onClick={ onClick }
      />
    </div>
  );
};

const QuestionCard = ({ title, contents, onClick, level }) => {
  return (
    <div className="card">
      <h3>{ title }</h3>
      <div className="main_text">
        <p>{ contents.split( '\n' ).map( (content, index) => {
          return (<span key={ index }>{ content }<br/></span>)
        } ) }
        </p>
      </div>
      <button className="btn" onClick={ onClick } data-level={ level }>시작</button>
    </div>
  );
};

const LEVEL = {
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
};

const titleLevel1 = '기초문제';
const titleLevel2 = '기초입니다!. \n 문제를 보고 맞는 답을 골라주세요.';
const contentsLevel1 = '중급문제';
const contentsLevel2 = '조금 어려운 중급문제입니다. \n 문제를 보고 맞는 답을 골라주세요.';

export default LevelContainer;
