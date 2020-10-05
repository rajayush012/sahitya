import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component';
import SignInPage from './pages/sigin-page/signin-page.component';
import FeedPage from './pages/feed-page/feed-page.component';

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        currentUser : null
      }
    }

    componentDidMount(){
      
    }
    
    render(){
      return (
        <div className="App">
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/signin' component={SignInPage}/>
            <Route exact path='/feeds' component={FeedPage} />
        </div>
      );
    }
}

export default App;
