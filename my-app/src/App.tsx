import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewGame from './cmponents/NewGame/NewGame';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <NewGame />
      </Route>
    </Switch>
  );
}

export default App;
