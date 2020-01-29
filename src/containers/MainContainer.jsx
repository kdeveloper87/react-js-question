import React, { useState, useEffect, useRef } from 'react' ;
import questions from "../data/questions";
import QuestionContainer from "./QuestionContainer";
import Store from "../store/Store";
import LevelContainer from "./LevelContainer";
import QuestionListContainer from "./QuestionListContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  HEADER_TITLE, MAIN, QUESTION,
  QUESTION_LIST,
  LOCAL_STORAGE_KEY,
  displayIndexAction,
  testLevelAction,
  testOrderAction,
  titleActon, scoresAction
} from "../reducers/main";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { index, testOrder, level, title, scores } = useSelector( state => state.main, [] );
  const scoresLocalStorage = useRef( new Store( LOCAL_STORAGE_KEY ) );

  const getScore = (name) => {
    return scoresLocalStorage.current.getLocalStorage( name );
  };

  const setScore = (name, item) => {
    scoresLocalStorage.current.setLocalStorage( name, item );
  };

  useEffect( () => {
    const scores = getScore( LOCAL_STORAGE_KEY );

    if ( level && !scores[ level ] ){
      scores[ level ] = [];
      setScore( LOCAL_STORAGE_KEY, scores );
    }

    dispatch( scoresAction( { scores: scores[ level ] } ) );
  }, [level] );

  const updateScore = (score) => {
    const scores = getScore( LOCAL_STORAGE_KEY );
    if ( !scores[ level ] || testOrder === null ){
      scores[ level ] = [];
    }

    scores[ level ][ testOrder ] = score;
    setScore( LOCAL_STORAGE_KEY, scores );
    dispatch( scoresAction( { scores: scores[ level ] } ) );
  };

  const onClickStart = (e) => {
    const { dataset: { level } } = e.target;
    dispatch( displayIndexAction( { index: QUESTION_LIST } ) );
    dispatch( testLevelAction( { level } ) );
  };

  const onClickLevelTestStart = (e) => {
    const { dataset: { order } } = e.target;
    dispatch( displayIndexAction( { index: QUESTION } ) );
    dispatch( testOrderAction( { testOrder: order } ) );
    dispatch( titleActon( { title: questions[ level ][ order ].name } ) );
  };

  const onClickReset = () => {
    dispatch( displayIndexAction( { index: QUESTION_LIST } ) );
    dispatch( testLevelAction( { level } ) );
    dispatch( titleActon( { title: HEADER_TITLE } ) );
    dispatch( testOrderAction( { testOrder: null } ) );
  };

  const onClickMain = () => {
    dispatch( displayIndexAction( { index: MAIN } ) );
  };

  const onClickScoreReset = () => {
    updateScore( 0 );
  };

  return (
    <Container>
      <Header title={ title } index={ index } onClickScoreReset={ onClickScoreReset }/>
      <Contents index={ index }>
        <LevelContainer onClick={ onClickStart }/>
        <QuestionListContainer questionList={ questions[ level ] } onClick={ onClickLevelTestStart }
                               quizScores={ scores } onClickMain={ onClickMain }/>
        <QuestionContainer question={ questions[ level ] && questions[ level ][ testOrder ] }
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

const Header = ({ title, index, onClickScoreReset }) => {
  return (
    <div className="header">
      <h2 className="title">
        { title }
      </h2>
      { index === QUESTION_LIST && (<button className="btn btn-reset" onClick={ onClickScoreReset }>점수 초기화</button>) }
    </div>
  );
};

export default MainContainer;
