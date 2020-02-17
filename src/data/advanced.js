const Test1 = {
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
        { title: 'null', key: 4, correct: '' },
      ],
      correct: 0,
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
      correct: 3,
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
        { title: '"string"', key: 4, correct: '' },
      ],
      correct: 3,
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
        { title: 'null', key: 4, correct: '' },
      ],
      correct: 1,
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
      correct: 0,
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
      correct: 1,
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
      correct: 1,
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
      correct: 0,
    },
  ],
};
const Test2 = {
  name: 'Test2',
  data: [
    {
      question: 'result 의 값은?',
      code: `const params = [1, 2, 3, 4, 5];
const result = Math.max.apply(10,params);`,
      example: [
        { title: '5', key: 0, correct: 'correct' },
        { title: 'throw a SyntaxError', key: 1, correct: '' },
        { title: 'undefined', key: 2, correct: '' },
        { title: '10', key: 3, correct: '' },
        { title: '6', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `function func(a, b) {
  "use strict";
  a = 262;
  b = 95;
  const result = arguments[ 1 ];
};

func( 95, 262 );`,
      example: [
        { title: 'undefined', key: 1, correct: '' },
        { title: 'throw a SyntaxError', key: 2, correct: '' },
        { title: '1', key: 3, correct: '' },
        { title: '262', key: 0, correct: 'correct' },
        { title: '95', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `let value = 10;
const promise = new Promise( (resolve) => {
  value = 20;
  resolve( 30 );
} );
const result = value;
`,
      example: [
        { title: '30', key: 1, correct: '' },
        { title: 'undefined', key: 2, correct: '' },
        { title: '10', key: 3, correct: '' },
        { title: '0', key: 4, correct: '' },
        { title: '20', key: 0, correct: 'correct' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const object = new Object();
const proto = Object.getPrototypeOf( object );

const result = proto instanceof Object;`,
      example: [
        { title: 'false', key: 0, correct: 'correct' },
        { title: 'true', key: 1, correct: '' },
        { title: 'undefined', key: 2, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const array = [1, 2, 3, 4, 5];
const result = array.fill(1, 2).join('');`,
      example: [
        { title: '12111', key: 0, correct: 'correct' },
        { title: '12121', key: 1, correct: '' },
        { title: '1234512', key: 2, correct: '' },
        { title: '11345', key: 3, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const obj = {
  name: 'JavaScript',
};
Object.seal(obj);
obj.name = 'ECMAScript';
const result = obj.name;`,
      example: [
        { title: 'ECMAScript', key: 0, correct: 'correct' },
        { title: 'undefined', key: 1, correct: '' },
        { title: 'null', key: 2, correct: '' },
        { title: 'JavaScript', key: 3, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const push = Array.prototype.push;
const first = [2009, 95];
const second = [95, 2009];
const result = push.apply(first, second);`,
      example: [
        { title: '[2009, 95, 95, 2009]', key: 1, correct: '' },
        { title: 'false', key: 2, correct: '' },
        { title: '[95, 2009, 2009, 95]', key: 3, correct: '' },
        { title: '4', key: 0, correct: 'correct' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const result = null + [0, [1]][1][0];`,
      example: [
        { title: 'null', key: 1, correct: '' },
        { title: '0', key: 2, correct: '' },
        { title: 'undefined', key: 3, correct: '' },
        { title: 'NaN', key: 4, correct: '' },
        { title: '1', key: 0, correct: 'correct' },
      ],
      correct: 0,
    },
  ],
};
const Test3 = {
  name: 'Test3',
  data: [
    {
      question: 'result 의 값은?',
      code: `const variable = null;
const result = typeof variable;
`,
      example: [
        { title: 'object', key: 0, correct: 'correct' },
        { title: '0', key: 1, correct: '' },
        { title: 'null', key: 2, correct: '' },
        { title: 'throw a TypeError', key: 3, correct: '' },
        { title: 'undefined', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: `const result = true * 10 - true;
`,
      example: [
        { title: '9', key: 0, correct: 'correct' },
        { title: '0', key: 1, correct: '' },
        { title: 'NaN', key: 2, correct: '' },
      ],
      correct: 0,
    },
    /*{
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },
    {
      question: 'result 의 값은?',
      code: ``,
      example: [
        { title: '', key: 0, correct: 'correct' },
        { title: '', key: 1, correct: '' },
        { title: '', key: 2, correct: '' },
        { title: '', key: 3, correct: '' },
        { title: '', key: 4, correct: '' },
      ],
      correct: 0,
    },*/
  ],
};
const advanced = [{ ...Test1 }, { ...Test2 }, { ...Test3 }];

export default advanced;
