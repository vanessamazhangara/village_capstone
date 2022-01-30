import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Discover from "./components/discover";
import Dashboard from "./components/Dashboard";
import DiscoverInfo from "./components/discoverInfo";
import { Main } from "./styles/discoverInfo.style";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Landing from "./components/landing";
import GlobalStyles from "./styles/Global";
import "./App.css";
import axios from "axios";

class App extends Component {
    constructor() {
      super();

      this.state = {
        user: null,
        
      }
    }

    componentDidMount() {
      const userFromStorage = localStorage.getItem('villageUser');

      if(userFromStorage) {
        this.setState({user: JSON.parse(userFromStorage)});
      }
    }

    logOut = () => {
      this.setState({user: null})
      localStorage.removeItem('villageUser')
    }

    
    
     register =  async (form) => {
      await axios.post('http://localhost:6500/photographers/register', form)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
    }

    login = async (form) => {
      await axios.post('http://localhost:6500/photographers/login', form)
      .then(res => {
        this.setState({user: res.data})
        localStorage.setItem('villageUser', JSON.stringify(res.data));
      })
      .catch(err => console.log(err))
    }

    

  render() {

    
    return (
      <Main>
        <GlobalStyles />
        <Navbar user={this.state.user} logOut={this.logOut}/>
        <Switch>
          <Route path="/discover/:id" render={(props) => <DiscoverInfo {...props} />} />
          <Route path="/discover" component={Discover} />
          <Route path="/dashboard" render={(props) => <Dashboard user={this.state.user} {...props}/>}/>
          <Route path="/login" render={(props) => <Login {...props} user={this.state.user} login={this.login}/>}/>
          <Route path="/signup" render={(props) => <SignUp {...props} register={this.register}/>} />
          <Route path="/" component={Landing} />
        </Switch>
      </Main>
    );
  }
}

export default App;
