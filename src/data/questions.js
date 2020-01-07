const questions = {
  intermediate: [ {
    name: 'Test1',
    data: [ {
      question: 'result 의 값은?',
      code: `let result = 2009;
const func = (x = 262) => {
  result = x;
};
func( null );`,
      example: [
        { title: 'null', key: 0, correct: 'correct' },
        { title: '262', key: 1, correct: '' },
        { title: '2009', key: 2, correct: '' },
      ],
      correct: 0
    },
      {
        question: 'result 의 값은?',
        code: `const result = 0 || 1 && 2 || 3;`,
        example: [
          { title: '3', key: 1, correct: '' },
          { title: 'true', key: 2, correct: '' },
          { title: '0', key: 3, correct: '' },
          { title: '1', key: 4, correct: '' },
          { title: '2', key: 0, correct: 'correct' },
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const plus = +0;
const minus = -0;
const result = plus === minus;`,
        example: [
          { title: 'false', key: 1, correct: '' },
          { title: 'true', key: 0, correct: 'correct' },
          { title: 'throw a SyntaxError', key: 2, correct: '' },
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const result = "1" == 1;`,
        example: [
          { title: 'true', key: 0, correct: 'correct' },
          { title: 'false', key: 1, correct: '' },
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const value = new Set( [ 1, 1, 2, 3, 2, 3 ] );
const result = [ ...value ];`,
        example: [
          { title: '[1]', key: 0, correct: '' },
          { title: '112323', key: 1, correct: '' },
          { title: '[1,1,2,3,2,3]', key: 2, correct: '' },
          { title: '[1,2,3]', key: 3, correct: 'correct' },
          { title: '[1,2,3,1,2,3]', key: 4, correct: '' }
        ],
        correct: 3
      },
      {
        question: 'result 의 값은?',
        code: `const getA = () => 1;
const getB = () => 2;
const getC = () => 3;
const result = ( getA(), getB(), getC() );`,
        example: [
          { title: '3', key: 0, correct: 'correct' },
          { title: '1', key: 1, correct: '' },
          { title: 'undefined', key: 2, correct: '' },
          { title: '6', key: 3, correct: '' },
          { title: '2', key: 4, correct: '' }
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const array = [ 10, 15, 20, 25, 30 ];
const result = array.find( v => v > 15 );`,
        example: [
          { title: '20', key: 0, correct: 'correct' },
          { title: '2', key: 1, correct: '' },
          { title: '15', key: 2, correct: '' },
          { title: '3', key: 3, correct: '' },
          { title: '1', key: 4, correct: '' }
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `class User {
  getName() {}
}

const result = typeof User;`,
        example: [
          { title: 'string', key: 1, correct: '' },
          { title: 'object', key: 2, correct: '' },
          { title: 'class', key: 3, correct: '' },
          { title: 'prototype', key: 4, correct: '' },
          { title: 'function', key: 0, correct: 'correct' },
        ],
        correct: 0
      } ]
  },
    {
      name: 'Test2',
      data: [ {
        question: 'result 의 값은?',
        code: `const map = v => v * v;
const array = Array.from( [ 1, 2, 3 ], map );`,
        example: [
          { title: '1,4,9', key: 1, correct: '' },
          { title: '149', key: 0, correct: 'correct' },
          { title: '14', key: 2, correct: '' },
          { title: '1,2,3', key: 3, correct: '' },
          { title: '123', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: `const array = [ 1, 2, 3 ];
const result = 3 in Array;`,
          example: [
            { title: 'false', key: 0, correct: 'correct' },
            { title: 'true', key: 1, correct: '' },
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: `const func = function (x, y = 4) {
  return x + y;
};

const result = func( 2 );`,
          example: [
            { title: '8', key: 1, correct: '' },
            { title: '2', key: 2, correct: '' },
            { title: 'NaN', key: 3, correct: '' },
            { title: 'undefined', key: 4, correct: '' },
            { title: '6', key: 0, correct: 'correct' },
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: `const numbers = [ 2009, 95, 262 ];
const [ first, ...rest ] = numbers;
const result = rest[ 1 ];`,
          example: [
            { title: '95', key: 1, correct: '' },
            { title: '262', key: 0, correct: 'correct' },
            { title: 'throw a SyntaxError', key: 2, correct: '' },
            { title: 'undefined', key: 3, correct: '' },
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: `const o = {
  name: 'ECMAScript',
  version: 2016,
};

const result = Object.values( o ).join( '' );`,
          example: [
            { title: 'nameVersion', key: 1, correct: '' },
            { title: 'null', key: 2, correct: '' },
            { title: 'ECMAScript2016', key: 0, correct: 'correct' },
            { title: '[]', key: 3, correct: '' },
            { title: 'undefined', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: `const result = Number.parseInt( '1995 year' + 1 );`,
          example: [
            { title: '1996', key: 1, correct: '' },
            { title: 'null', key: 2, correct: '' },
            { title: 'undefined', key: 3, correct: '' },
            { title: '1995', key: 0, correct: 'correct' },
            { title: 'NaN', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: `let name = 1;
( { name } = { name: 3 } );
const result = name;`,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test3',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test4',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test5',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test6',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test7',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    },
    {
      name: 'Test8',
      data: [ {
        question: 'result 의 값은?',
        code: ``,
        example: [
          { title: '', key: 0, correct: 'correct' },
          { title: '', key: 1, correct: '' },
          { title: '', key: 2, correct: '' },
          { title: '', key: 3, correct: '' },
          { title: '', key: 4, correct: '' }
        ],
        correct: 0
      },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        },
        {
          question: 'result 의 값은?',
          code: ``,
          example: [
            { title: '', key: 0, correct: 'correct' },
            { title: '', key: 1, correct: '' },
            { title: '', key: 2, correct: '' },
            { title: '', key: 3, correct: '' },
            { title: '', key: 4, correct: '' }
          ],
          correct: 0
        } ]
    }
  ],
  advanced: [ {
    name: 'Test1',
    data: [
      {
        question: 'result 의 값은?',
        code: `const toString = Object.prototype.toString;\nconst result = toString.call(null);`,
        example: [
          { title: '[object Null]', key: 0, correct: 'correct' },
          { title: '[object Object]', key: 1, correct: '' },
          { title: '[Object]', key: 2, correct: '' },
          { title: 'Null', key: 3, correct: '' },
          { title: 'null', key: 4, correct: '' }
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const func = function(){
  return arguments.join("");
}
const result = func(2009,262);`,
        example: [
          { title: '2271', key: 0, correct: '' },
          { title: '2009262', key: 1, correct: '' },
          { title: 'NaN', key: 2, correct: '' },
          { title: 'throw a TypeError', key: 3, correct: 'correct' },
        ],
        correct: 3
      },
      {
        question: 'result 의 값은?',
        code: `let result = "string";
(function (){
  result = typeof arguments;
})();`,
        example: [
          { title: 'undefined', key: 0, correct: '' },
          { title: 'null', key: 1, correct: '' },
          { title: '"array"', key: 2, correct: '' },
          { title: '"object"', key: 3, correct: 'correct' },
          { title: '"string"', key: 4, correct: '' }
        ],
        correct: 3
      },
      {
        question: 'result 의 값은?',
        code: `const target = {
  name : "ECMAScript"
}

const proxy = new Proxy(target, {});
proxy.name = "Javascript";

const result = target.name;`,
        example: [
          { title: 'ECMAScript', key: 0, correct: '' },
          { title: 'Javascript', key: 1, correct: 'correct' },
          { title: 'undefined', key: 2, correct: '' },
          { title: 'Null', key: 3, correct: '' },
          { title: 'null', key: 4, correct: '' }
        ],
        correct: 1
      },
      {
        question: 'result 의 값은?',
        code: `const User = function () {
  const result = new.target === User;
};

const man = new User();`,
        example: [
          { title: 'true', key: 0, correct: 'correct' },
          { title: 'false', key: 1, correct: '' },
          { title: 'throw a SyntaxError', key: 2, correct: '' },
        ],
        correct: 0
      },
      {
        question: 'result 의 값은?',
        code: `const  constructor = function () {};

const result = constructor.prototype.constructor == constructor;`,
        example: [
          { title: 'false', key: 0, correct: '' },
          { title: 'true', key: 1, correct: 'correct' },
          { title: 'throw a SyntaxError', key: 2, correct: '' },
        ],
        correct: 1
      },
      {
        question: 'result 의 값은?',
        code: `const plus = +0;
const minus = -0;
const result = Object.is( plus, minus );`,
        example: [
          { title: 'true', key: 0, correct: '' },
          { title: 'false', key: 1, correct: 'correct' },
          { title: 'throw a SyntaxError', key: 2, correct: '' },
        ],
        correct: 1
      },
      {
        question: 'result 의 값은?',
        code: `const obj={};
const result = "toString" in obj;`,
        example: [
          { title: 'true', key: 0, correct: 'correct' },
          { title: 'false', key: 1, correct: '' },
          { title: 'null', key: 2, correct: '' },
          { title: 'undefined', key: 3, correct: '' },
        ],
        correct: 0
      },
    ]
  }, ],
};

export default questions

const str = 'throw a SyntaxError'