import React, { Component } from "react";
// import { Account } from '../styles/dashboard.style';
import {
  AccForm,
  InputDiv,
  Input,
} from "../styles/userDashboard.styles";

class DashAccount extends Component {
  state = {
      city: "" ,
     state: "" ,
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
      });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitAccount( {
      city: this.state.city,
      state: this.state.state,
      
    })
  }

  render() {
      const {loginUser} = this.props;
    return (
      <>
        <AccForm onSubmit={this.handleSubmit}>
            <div>
            <label>Full Name</label>
            <InputDiv>{loginUser.first_name} {loginUser.last_name} </InputDiv>
            </div>
            <div>
            <label>Email</label>
            <InputDiv>{loginUser.email} </InputDiv>
            </div>
          <div class="form-group ">
            <label>City</label>
            <Input type="text" name="city" placeholder={loginUser.city} value={this.state.city} onChange={this.handleChange}/>
          </div>
          <div class="form-group ">
            <label>State</label>
            <Input type="text" name="state" placeholder={loginUser.state} value={this.state.state} onChange={this.handleChange} />
          </div>

          
          
              <button type="submit">
                Save Changes
              </button>
           

              <button type="button" class="btn btn-default btn-block">
                Cancel
              </button>
           
       
        </AccForm>
      </>
    );
  }
}

export default DashAccount;
