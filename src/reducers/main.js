import Store from "../store/Store";

const QUESTION_LIST = 1;
const HEADER_TITLE = '자바스크립트 퀴즈';
const LOCAL_STORAGE_KEY = 'quizScores';

const initialState = {
  scores: {},
};

export const SCORES = 'SCORES';
export const scoresAction = (data) => ({ type: SCORES, data, });

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SCORES: {
      Store.setLocalStorage( LOCAL_STORAGE_KEY, action.data.scores );
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
  QUESTION_LIST,
  HEADER_TITLE,
  LOCAL_STORAGE_KEY,
}
