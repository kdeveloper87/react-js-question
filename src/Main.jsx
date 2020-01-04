import React from 'react' ;
import './css/reset.css';
import './css/style.css'

const Main = () => {

  const onClickStart = (e) => {
    const {dataset:{level}} = e.target;
    console.log( level );

  };

  return (
    <MainContainer>
      <Header
        title={ "자바스크립트 문제" }
      />
      <ContentsContainer>
        <Card level={"비기너"} content={"설명"} onClick={onClickStart}/>
        <Card/>
        <Card/>
      </ContentsContainer>
    </MainContainer>
  );
};

const MainContainer = ({ children }) => {
  return (
    <div className="container">
      { children }
    </div>
  );
};

const ContentsContainer = ({ children }) => {
  return (
    <div className="contents">
      { children }
    </div>
  );
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

const Card = ({ level, content, onClick }) => {
  return (
    <div className="card">
      <h3>{ level }</h3>
      <div className="main_text">
        <p>{ content }</p>
      </div>
      <button className="btn" onClick={ onClick } data-level={level}>Start</button>
    </div>
  );
};

export default Main;
