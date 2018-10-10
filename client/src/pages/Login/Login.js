import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import API from "../../utils/API";
import {Redirect} from "react-router-dom"
import Nav from "../../components/Nav"

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
  }



  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    API.login({username: this.state.email,
        password: this.state.password})
      .then(res =>
        {
        if (res.data === "no user") {
            alert("wrong password")
        } else
        this.setState({ isLoggedIn: true})
        }
      )
      .catch(err => console.log(err));
  }

  render() {
    let currentUserEmail = this.state.email  
    const { isLoggedIn } = this.state

    if (isLoggedIn === true) {
      return <Redirect name={this.state.email} to='/chat' />
    }
    return (
        <div>
      <div className="Login" >
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      </div>
    );
  }
}

export default Register