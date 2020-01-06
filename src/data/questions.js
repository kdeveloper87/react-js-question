const questions = {
  advanced: [{
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
        code:`const User = function () {
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
  },]
};

export default questions
