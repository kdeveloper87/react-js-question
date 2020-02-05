import React from 'react';
import './css/reset.css';
import './css/style.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import MainContainer, { Header } from './containers/MainContainer';
import rootReducer from './reducers';
import QuestionListContainer from './containers/QuestionListContainer';
import QuestionContainer from './containers/QuestionContainer';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route exact path={'/'} component={MainContainer} />
            <Route
              path="/level/:level/quiz/:index"
              component={QuestionContainer}
            />
            <Route path="/level/:level" component={QuestionListContainer} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
