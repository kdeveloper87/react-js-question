import React, { useState, useEffect } from 'react' ;
import './css/reset.css';
import './css/style.css';
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

const QuestionContainer = ({ question }) => {
  const { data = [] } = question;
  const [curIndex, setCurIndex] = useState( 0 );
  const [curQuestion, setCurQuestion] = useState( data[ curIndex ] );
  const [isSelect, setIsSelect] = useState( false );


  useEffect( () => {
    hljs.registerLanguage( 'javascript', javascript );
    document.querySelectorAll( 'pre code' ).forEach( (block) => {
      hljs.highlightBlock( block );
    } );
  }, [] );

  const onClick = (e) => {
    const { dataset: { select } } = e.target;
    if(!select){
      return;
    }

    setIsSelect( true );
    if ( +curQuestion.correct !== +select ){
      setCurQuestion( (curQuestion) => {
        debugger
        curQuestion.example[ select ].correct = 'wrong';
        return curQuestion;
      } );
    }
  };

  const onClickNext = () => {
    setCurIndex(curIndex+1);
    debugger
    console.log( data );
    setCurQuestion(data[curIndex+1]);
  };


  return (
    <div className="question_container">
      <Question data={ curQuestion } onClick={ onClick } isSelect={ isSelect } onClickNext={onClickNext}/>
    </div>
  );
};

const Question = ({ data, onClick, isSelect ,onClickNext}) => {
  const { question, code, example } = data;

  return (
    <>
      <div className="question">
        { question }
      </div>
      <div className="code">
        <pre><code className="javascript">{ code }</code></pre>
      </div>
      <div className="answers" onClick={ onClick }>
        { example.map( (item) => {
          return (
            <div className={ `answer ${ isSelect ? item.correct : '' }` } data-select={ item.key }
                 key={ item.key }>{ item.title }</div>
          );
        } ) }

        { isSelect && (
          <div className="next">
            <button className="next-btn" onClick={onClickNext}>다음</button>
          </div>
        ) }
      </div>
    </>
  );
};

export default QuestionContainer;
