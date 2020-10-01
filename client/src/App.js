import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signin' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
