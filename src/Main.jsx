import React, { useState, useEffect, useRef } from 'react' ;
import './css/reset.css';
import './css/style.css';
import questions from "./data/questions";
import QuestionContainer from "./QuestionContainer";
import Store from "./Store";

const MAIN = 0;
const QUESTION_LIST = 1;
const QUESTION = 2;

const Main = () => {
  const [index, setIndex] = useState( MAIN );
  const [level, setLevel] = useState( '' );
  const [order, setOrder] = useState( '' );
  const scores = useRef( new Store( 'scores' ) );

  // useEffect( () => {
  //   console.log( scores.current );
  // }, [scores] );

  const getScore = (name) => {
    return scores.current.getLocalStorage( name );
  };

  const setScore = (name, item) => {
    scores.current.setLocalStorage( name, item );
  };

  const updateScore = (score) => {

    const scores = getScore( 'scores' );
    if ( !scores[ level ] ){
      scores[ level ] = [];
    }
    scores[ level ][ order ] = score;

    setScore( 'scores', scores );
  };

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

  const onClickReset = () => {
    setIndex( QUESTION_LIST );
    setLevel( level );
  };

  console.log( getScore( 'scores' ) );

  return (
    <Container>
      <Header/>
      <Contents index={ index }>
        <LevelContainer onClick={ onClickStart }/>
        <QuestionListContainer questionList={ questions[ level ] } onClick={ onClickLevelTestStart }
                               scores={ getScore( 'scores' )[ level ] }/>
        <QuestionContainer question={ questions[ level ] && questions[ level ][ order ] }
                           onClickReset={ onClickReset } updateScore={ updateScore }/>
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
        <button className="btn" onClick={ onClick } data-level={ 'beginner' }>START</button>
      </div>
    </div>
  );
};

const QuestionListContainer = ({ questionList = [], onClick, scores = {} }) => {
  console.log( scores );
  return (
    <div className="items">
      { questionList.map( (item, index) => {
        return (
          <div className="item" key={ item.name }>
            <h3>{ item.name }</h3>
            <p>Score : { scores[ index ] ? scores[ index ] : 0 }점</p>
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
