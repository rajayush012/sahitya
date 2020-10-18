import React from 'react';
import jwt from 'jwt-decode'
import { Route, Redirect} from 'react-router-dom'
import Homepage from './pages/hompage/homepage.component';
import SignInPage from './pages/sigin-page/signin-page.component';
import FeedPage from './pages/feed-page/feed-page.component';
import setAuthToken from './config/setAuthToken';
import Header from './components/header/header.component';
import NovelDetailPage from './pages/novel-detail-page/novel-detail-page.component';


class App extends React.Component {
    constructor(){
      super()
      this.state = {
        currentUser : localStorage.getItem("token") ? jwt(localStorage.getItem("token")) : null
      }
    }

    componentDidMount(){
      
    }
    
    handleUser = (user) => {
      //console.log(localStorage.getItem("token"))
      setAuthToken(localStorage.getItem("token"))
      this.setState({
        currentUser : jwt(localStorage.getItem("token"))
      })
    }

    handleLogout = () => {
      this.setState({
        currentUser : null
      },()=>{
        setAuthToken(false);
        localStorage.removeItem("token")
      })
      
    }

    render(){
      return (
        <div className="App">
            {this.state.currentUser ? <Header handleLogout={this.handleLogout}></Header>:null}
            <Route 
            exact path='/' 
            render={() => (this.state.currentUser) ? (<Redirect to='/feeds'/>): (<Homepage/>)} />
            
            <Route 
            exact 
            path='/feeds' 
           // render= {()=><FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/>} 
            render= {()=>(this.state.currentUser) ? <FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/> : <Redirect to='/'/>}
            />
            <Route 
            exact 
            path='/novels/:novelid' 
            render={()=>(this.state.currentUser) ? (<NovelDetailPage />) : (<SignInPage handleUser={user => this.handleUser(user)}/>) } />
        </div>
      );
    }
}

//render= {()=>(this.state.currentUser) ? <FeedPage handleLogout={this.handleLogout} currentUser={this.state.currentUser}/> : <Redirect to='/'/>} />


export default App

