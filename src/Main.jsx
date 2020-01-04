import React, { useState } from 'react' ;
import './css/reset.css';
import './css/style.css';
import questions from "./data/questions";
import QuestionContainer from "./QuestionContainer";

const MAIN = 0;
const QUESTION_LIST = 1;
const QUESTION = 2;

const Main = () => {
  const [index, setIndex] = useState( MAIN );
  const [level, setLevel] = useState( '' );
  const [order, setOrder] = useState( '' );

  const onClickStart = (e) => {
    const { dataset: { level } } = e.target;
    setIndex( QUESTION_LIST );
    setLevel( level );
  };

  const onClickLevelTestStart = (e) => {
    const { dataset: { order } } = e.target;
    setIndex( QUESTION );
    setOrder( order );
  };

  return (
    <Container>
      <Header/>
      <Contents index={ index }>
        <LevelContainer onClick={ onClickStart }/>
        <QuestionListContainer questionList={ questions[ level ] } onClick={ onClickLevelTestStart }/>
        <QuestionContainer question={ questions[ level ] && questions[ level ][ order ] }/>
      </Contents>
    </Container>
  );
};

const Container = ({ children }) => {
  return (
    <div className="container">
      { children }
    </div>
  );
};

const Contents = ({ index, children }) => {
  return React.Children.map( children, (child, childIndex) => {
    if ( index === childIndex ){
      return child;
    }
  } );
};

const Header = () => {
  return (
    <div className="header">
      <h2 className="title">
        자바스크립트 퀴즈
      </h2>
    </div>
  );
};

const LevelContainer = ({ onClick }) => {
  return (
    <div className="contents">
      <div className="card">
        <h3>beginner</h3>
        <div className="main_text">
          <p>자바스크립트 문제자바스크립트 문제자바스크립트 문제자바스크립트 문제</p>
        </div>
        <button className="btn" onClick={ onClick } data-level={ 'beginner' }>Start</button>
      </div>
    </div>
  );
};

const QuestionListContainer = ({ questionList = [], onClick, score = 0 }) => {
  return (
    <div className="items">
      { questionList.map( (item, index) => {
        return (
          <div className="item" key={ item.name }>
            <h3>{ item.name }</h3>
            <p>Score : { item.score }%</p>
            <button className="btn" onClick={ onClick } data-order={ index }>START</button>
          </div>
        );
      } ) }
    </div>
  );
};

// const QuestionContainer = () => {
//   return (
//     <div className="question_container">
//       <div className="question">
//         1/1 다음 result 값은?
//       </div>
//       <div className="code">
//         <pre><code className="javascript">const aa = x => x * 3;</code></pre>
//       </div>
//       <div className="answers">
//         <div className="answer  right">111</div>
//         <div className="answer">222</div>
//         <div className="answer wrong">333</div>
//         <div className="answer">444</div>
//       </div>
//     </div>
//   );
// };

export default Main;
