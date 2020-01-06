import React, { useState, useEffect, useRef } from 'react' ;
import './css/reset.css';
import './css/style.css';
import questions from "./data/questions";
import QuestionContainer from "./QuestionContainer";
import Store from "./Store";
import LevelContainer from "./LevelContainer";
import QuestionListContainer from "./QuestionListContainer";

const MAIN = 0;
const QUESTION_LIST = 1;
const QUESTION = 2;
const TITLE = '자바스크립트 문제 은행';

const Main = () => {
  const [ index, setIndex ] = useState( MAIN );
  const [ level, setLevel ] = useState( '' );
  const [ order, setOrder ] = useState( '' );
  const [ title, setTitle ] = useState( TITLE );
  const scores = useRef( new Store( 'quizScores' ) );

  const getScore = (name) => {
    return scores.current.getLocalStorage( name );
  };

  const setScore = (name, item) => {
    scores.current.setLocalStorage( name, item );
  };

  const updateScore = (score) => {

    const scores = getScore( 'quizScores' );
    if( !scores[ level ] ) {
      scores[ level ] = [];
    }
    scores[ level ][ order ] = score;

    setScore( 'quizScores', scores );
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
    setTitle( questions[ level ][ order ].name );
  };

  const onClickReset = () => {
    setIndex( QUESTION_LIST );
    setLevel( level );
    setTitle( TITLE );
  };


  return (
    <Container>
      <Header title={ title }/>
      <Contents index={ index }>
        <LevelContainer onClick={ onClickStart }/>
        <QuestionListContainer questionList={ questions[ level ] } onClick={ onClickLevelTestStart }
                               quizScores={ getScore( 'quizScores' )[ level ] }/>
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
    if( index === childIndex ) {
      return child;
    }
  } );
};

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className="title">
        { title }
      </h2>
    </div>
  );
};

export default Main;
