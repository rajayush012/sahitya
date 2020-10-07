import React from 'react';
import { Route, Redirect} from 'react-router-dom'
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
    
    handleUser = (user) => {
      this.setState({
        currentUser : user
      })
    }

    handleLogout = () => {
      this.setState({
        currentUser : null
      })
    }

    render(){
      return (
        <div className="App">
            <Route 
            exact path='/' 
            render={() => (this.state.currentUser) ? (<Redirect to='/feeds'/>): (<Homepage/>)} />
            <Route 
            exact 
            path='/signin' 
            render={() => (this.state.currentUser) ? (<Redirect to='/feed'/>) : (<SignInPage handleUser={user => this.handleUser(user)}/>) } />
            <Route exact path='/feeds' render= {()=><FeedPage handlelogout={this.handleLogout} currentuser={this.state.currentUser}/>} />
        </div>
      );
    }
}


export default App

