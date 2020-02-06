import React, { useEffect } from 'react';
import Store from '../store/Store';
import LevelContainer from './LevelContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  HEADER_TITLE,
  LOCAL_STORAGE_KEY,
  QUESTION_LIST,
  scoresAction,
} from '../reducers/main';

const MainContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { level } = useSelector(state => state.main, []);

  useEffect(() => {
    debugger
    Store.setLocalStorage(LOCAL_STORAGE_KEY,{});
    const scores = Store.getLocalStorage(LOCAL_STORAGE_KEY);
    dispatch(scoresAction({ scores }));
  }, [level]);

  const onClickStart = e => {
    const {
      dataset: { level },
    } = e.target;
    history.push(`/level/${level}`);
  };

  return (
    <>
      <LevelContainer onClick={onClickStart} />
    </>
  );
};

export const Header = ({ title = HEADER_TITLE, index, onClickScoreReset }) => {
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      {index === QUESTION_LIST && (
        <button className="btn btn-reset" onClick={onClickScoreReset}>
          점수 초기화
        </button>
      )}
    </div>
  );
};

export default MainContainer;
