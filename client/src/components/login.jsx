import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { Input, Form, SubmitBtn, Alert } from "../styles/login.style";

class Login extends Component {
  userData;

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.schema = {
      email: Joi.string().required(),
      password: Joi.string().required(),
    };
  
  }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate({email: this.state.email, password: this.state.password}, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Form onSubmit={this.handleLogin}>
          <h2>Login</h2>
          <p>Welcome, sign in below.</p>
          <div className="mb-3">
            {/* <label>Email address</label> */}
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="name@example.com"
            />
           {this.state.errors.email && <Alert>{this.state.errors.email}</Alert>}
          </div>
          <div className="mb-3">
            {/* <label>Password</label> */}
            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
           {this.state.errors.password && <Alert>{this.state.errors.password}</Alert>}

          </div>
          <SubmitBtn type="submit">Login</SubmitBtn>
        </Form>
      </div>
    );
  }
}

export default Login;
