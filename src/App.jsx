import React from 'react' ;
import './css/reset.css';
import './css/style.css'
import MainContainer from "./containers/MainContainer";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore( rootReducer, composeWithDevTools() );

const App = () => {
  return (
    <Provider store={ store }>
      <MainContainer/>
    </Provider>
  );
};

export default App;
