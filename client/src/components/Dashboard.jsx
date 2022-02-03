import axios from "axios";
import React, { Component } from "react";
// import {
//   Main,
//   LeftBar,
//   ProfilePic,
//   TopDiv,
//   Avatar,
//   Name,
//   LinksContainer,
//   Ul,
//   Greeting,
//   Text,
//   Account,
//   Info,
//   UpdateBtn,
// } from "../styles/dashboard.style";
import { Container } from "../styles/userDashboard.styles";
import Dashbar from "./dashBar";
import { Route, Redirect } from "react-router-dom";
import DashAccount from "./dashAccount";
import DashReviews from "./dashReviews";

class Dashboard extends Component {
  state = {
    loginUser: {},
    loginReviews: [],
    updateReceived: 0,
  };

     componentDidMount() {
         console.log(localStorage.getItem(`villageUser`), "LOCAL STORAGE")
         if(this.props.user){
             console.log('triggering DASHBOARD')
           
             this.fetchProfile();
      
          this.fetchReviews();
         }
   
  }

  fetchProfile =  () => {
    axios
    .get(
      `http://localhost:6500/photographers/${
        this.props.user.id
      }`
    )
    .then((res) => {
      console.log(res.data[0]);
      this.setState({ loginUser: res.data[0] }); //make fetch method.
    })
    .catch((err) => console.log(err));
  }

  fetchReviews =  () => {
    axios
      .get(
        `http://localhost:6500/reviews/${
            this.props.user.id
        }`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ loginReviews: res.data });
      })
       .catch((err) => console.log(err))
  };

  // submitAccUpdated (data) {
  //axios.put
  //res will increment request recived
  //then pass method toDash Acc
  //Dash Acc will have own handleSubmit fxn

  submitAccountUpdate = (data) => {
    axios
      .put(
        `http://localhost:6500/photographers/${
            this.props.user.id
        }`,
        {
          city: data.city,
          state: data.state,
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ updateReceived: this.state.updateReceived + 1 });
      });
  };

   componentDidUpdate(prevProps, prevState) {
    if (prevState.updateReceived !== this.state.updateReceived) {
      this.fetchProfile();
    }
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/" />;
    }
    const { loginUser, loginReviews } = this.state;
    return (
      <>
        {loginUser.first_name && (
          <Container>
            <Dashbar loginUser={loginUser} />
            <Route
              path="/dashboard/:id/account"
              render={(props) => (
                <DashAccount
                  submitAccount={this.submitAccountUpdate}
                  loginUser={loginUser}
                  {...props}
                />
              )}
            />
            <Route
              path="/dashboard/:id/reviews"
              render={(props) => (
                <DashReviews
                  loginUser={loginUser}
                  loginReviews={loginReviews}
                  {...props}
                />
              )}
            />
          </Container>
        )}
      </>
    );
  }
}

export default Dashboard;
