import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Discover from "./components/discover";
import DiscoverInfo from "./components/discoverInfo";
import Landing from "./components/landing";
import GlobalStyles from "./styles/Global";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/discover/:id" component={DiscoverInfo} />
          <Route path="/discover" component={Discover} />
          {/* <Route path="/signup" component={signup} /> */}
          <Route path="/" component={Landing} />
        </Switch>
      </>
    );
  }
}

export default App;
