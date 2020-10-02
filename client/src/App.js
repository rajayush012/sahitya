import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component';
import SignInPage from './pages/sigin-page/signin-page.component';

function App() {
  return (
    <div className="App">
      
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signin' component={SignInPage}/>
      
    </div>
  );
}

export default App;
