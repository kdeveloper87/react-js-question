import React from 'react';
import questions from '../data/questions';
import { useSelector } from 'react-redux';

const QuestionListContainer = ({ match, history }) => {
  const { scores = {} } = useSelector(state => state.main);

  const {
    params: { level },
  } = match;
  const questionList = questions[level];

  const onClick = e => {
    const {
      dataset: { order },
    } = e.target;
    history.push(`${match.url}/quiz/${order}`);
  };

  const onClickMain = () => {
    history.push('/');
  };

  return (
    <>
      <div className="items">
        {questionList.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <h3>{item.name}</h3>
              <p>
                점수 :{' '}
                {scores[level] && scores[level][index]
                  ? scores[level][index]
                  : 0}
                점
              </p>
              <button className="btn" onClick={onClick} data-order={index}>
                시 작
              </button>
            </div>
          );
        })}
      </div>
      <div className="back">
        <button className="btn btn-back" onClick={onClickMain}>
          처음으로
        </button>
      </div>
    </>
  );
};
export default QuestionListContainer;
