import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';

import {store} from './store';
import Login from "./containers/LoginContainer"
import DashBoard from "./containers/DashBoard"


const App = () => {
  return (
    <Provider store={store}>
      <Router>
     <Switch>
          <Route exact path="/app1">
            <Login store={store}/>
          </Route>
          <Route path="/app1/dashboard">
            <DashBoard store={store}/>
          </Route>
        </Switch>
     </Router>   
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

