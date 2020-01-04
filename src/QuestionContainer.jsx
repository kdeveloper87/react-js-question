import React, { useState, useEffect, useRef } from 'react' ;
import './css/reset.css';
import './css/style.css';
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

const QuestionContainer = ({ question, onClickReset, updateScore }) => {
  const { data = [] } = question;
  const [curIndex, setCurIndex] = useState( 0 );
  const [curQuestion, setCurQuestion] = useState( data[ curIndex ] );
  const [isSelect, setIsSelect] = useState( false );
  const [btnText, setBtnText] = useState( '다음' );
  const lastIndex = data.length - 1;
  const matchCount = useRef( 0 );


  useEffect( () => {
    hljs.registerLanguage( 'javascript', javascript );
    document.querySelectorAll( 'pre code' ).forEach( (block) => {
      hljs.highlightBlock( block );
    } );
  }, [curQuestion] );

  const onClick = (e) => {
    const { dataset: { select } } = e.target;
    if ( !select ){
      return;
    }

    setIsSelect( true );
    if ( +curQuestion.correct !== +select ){
      setCurQuestion( (curQuestion) => {
        const nextExample = [...curQuestion.example];
        nextExample[ select ] = {
          ...nextExample[ select ]
        };
        nextExample[ select ].correct = 'wrong';

        return {
          ...curQuestion,
          example: nextExample,
        }
      } );
    } else {
      matchCount.current = matchCount.current + 1
    }
  };

  const onClickNext = (e) => {
    const { dataset: { reset } } = e.target;

    if ( reset === '돌아가기' ){

      updateScore( matchCount.current / data.length * 100 );
      onClickReset();
      return;
    }

    if ( lastIndex < curIndex + 1 ){
      if ( matchCount.current === data.length ){
        return alert( `만점!!` );
      }

      alert( `${ matchCount.current }개 맞았습니다!` );
      setBtnText( '돌아가기' );
      return;
    }

    setIsSelect( false );
    setCurIndex( curIndex + 1 );
    setCurQuestion( data[ curIndex + 1 ] );
  };

  return (
    <div className="question_container">
      <Question data={ curQuestion } onClick={ onClick } isSelect={ isSelect } onClickNext={ onClickNext }
                btnText={ btnText }/>
    </div>
  );
};

const Question = ({ data, onClick, isSelect, onClickNext, btnText }) => {
  const { question, code, example } = data;

  return (
    <>
      <div className="question">
        { question }
      </div>
      <div className="code">
        <pre><code className="javascript">{ code }</code></pre>
      </div>
      <div className="answers">
        { example.map( (item) => {
          return (
            <div className={ `answer ${ isSelect ? item.correct : '' }` } data-select={ item.key }
                 key={ item.key } onClick={ onClick }>{ item.title }</div>
          );
        } ) }

        { isSelect && (
          <div className="next">
            <button className="next-btn" onClick={ onClickNext } data-reset={ btnText }>{ btnText }</button>
          </div>
        ) }
      </div>
    </>
  );
};

export default QuestionContainer;


