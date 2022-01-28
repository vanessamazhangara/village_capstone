import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class Login extends Component {
    userData; 

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
          });
    }

    handleLogin = (e) => {
        e.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password,
          });
    }

    // componentDidMount() {
    //     this.userData = 
    // }



    render() { 
        if(this.props.user) {
            return <Redirect to='/dashboard' />
        }
        return (
        
        <form onSubmit={this.handleLogin}>
            <h2>Login</h2>
            <p>Welcome, sign in below.</p>
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
              <button type="submit">Login</button>
        </form>);
    }
}
 
export default Login;