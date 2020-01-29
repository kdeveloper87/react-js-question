const MAIN = 0;
const QUESTION_LIST = 1;
const QUESTION = 2;
const HEADER_TITLE = '자바스크립트 퀴즈.';
const LOCAL_STORAGE_KEY = 'quizScores';

const initialState = {
  index: MAIN,
  level: '',
  order: null,
  title: HEADER_TITLE,
  scores: [],
};

export const DISPLAY_INDEX = 'DISPLAY_INDEX';
export const displayIndexAction = (data) => ({ type: DISPLAY_INDEX, data, });

export const TEST_ORDER = 'TEST_ORDER';
export const testOrderAction = (data) => ({ type: TEST_ORDER, data, });

export const TEST_LEVEL = 'TEST_LEVEL';
export const testLevelAction = (data) => ({ type: TEST_LEVEL, data, });

export const TITLE = 'TITLE';
export const titleActon = (data) => ({ type: TITLE, data, });

export const SCORES = 'SCORES';
export const scoresAction = (data) => ({ type: SCORES, data, });

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case DISPLAY_INDEX: {
      return {
        ...state,
        index: action.data.index,
      }
    }
    case TEST_ORDER: {
      return {
        ...state,
        testOrder: action.data.testOrder,
      }
    }
    case TEST_LEVEL: {
      return {
        ...state,
        level: action.data.level,
      }
    }
    case TITLE: {
      return {
        ...state,
        title: action.data.title,
      }
    }
    case SCORES: {
      return {
        ...state,
        scores: action.data.scores,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
export {
  MAIN,
  QUESTION_LIST,
  QUESTION,
  HEADER_TITLE,
  LOCAL_STORAGE_KEY,
}
