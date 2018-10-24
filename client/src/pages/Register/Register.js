import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../Chat/Chat.css"
import API from "../../utils/API";
import logo from "../../public/images/chatr-signup.png";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      _id: ""
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
    if (this.state.password === this.state.confirmPassword) {
      API.registerUser({
        username: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.data === "already exists") {
            alert("User Already Exists")
          } else {
            alert("Thanks for signing up!  You'll be redirected to the login now!")
            this.props.history.push('/')
          }
        })
        .catch(err => console.log(err));
    } else {
      alert("Your Password Did Not Match!")
    }
  }

  render() {
    return (
        <div className = 'chatMain'>
        <img src={logo} alt="chatr" className="center logo"/>
        <div className="Login">
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

           <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          > Register
          </Button>
        </form>
      </div>
      </div>
    );
  }
}

export default Register;