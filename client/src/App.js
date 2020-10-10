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
            render={() => (this.state.currentUser) ? (<Redirect to='/feeds'/>) : (<SignInPage handleUser={user => this.handleUser(user)}/>) } />
            <Route 
            exact 
            path='/feeds' 
           // render= {()=><FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/>} 
            render= {()=>(this.state.currentUser) ? <FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/> : <Redirect to='/'/>}
            />
        </div>
      );
    }
}

//render= {()=>(this.state.currentUser) ? <FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/> : <Redirect to='/'/>} />


export default App

