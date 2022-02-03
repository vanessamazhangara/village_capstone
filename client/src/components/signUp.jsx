import React, { Component } from "react";
import { Button, Form, Main, Left, Right, Register } from "../styles/signUp.style";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    state: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.register({
      first_name: this.state.firstName,
      last_name: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      state: this.state.state,
    });
  };

  render() {
    const usStates = [
      "AL",
      "AK",
      "AS",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FM",
      "FL",
      "GA",
      "GU",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MH",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "MP",
      "OH",
      "OK",
      "OR",
      "PW",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VI",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];
    return (
      <>
        <Register>
        <h1>Register</h1>
        <p>To create an account, please fill in the form below.</p>
        </Register>
        <Main>
          <Left>
              {/* <img src="https://images.unsplash.com/photo-1518437042148-3e377ea057df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" /> */}
          </Left>
          <Right>
            <Form onSubmit={this.handleSubmit}>
              <div className="mb-3" >
                <label>First Name</label>
                <input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="mb-3" >
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Doe"
                />
              </div>
              <div className="mb-3" >
                <label>Email address</label>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3" >
                <label>Password</label>
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="mb-3" >
                <label>City</label>
                <input
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="city"
                />
              </div>
              <div className="mb-3" >
                <label>State</label>
                <select
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                >
                  {usStates.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Button type="submit">Create Account</Button>
            </Form>
          </Right>
        </Main>
      </>
    );
  }
}

export default SignUp;
