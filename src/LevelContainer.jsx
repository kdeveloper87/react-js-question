import React from "react";

const LevelContainer = ({ onClick }) => {
  return (
    <div className="contents">
      <div className="card">
        <h3>1단계 문제</h3>
        <div className="main_text">
          <p>자바스크립트 1단계 문제 <br/>문제를 보고 맞는 답을 골라주세요.</p>

        </div>
        <button className="btn" onClick={ onClick } data-level={ 'advanced' }>시작</button>
      </div>
    </div>
  );
};

export default LevelContainer;