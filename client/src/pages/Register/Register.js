import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../Login/Login.css";
import API from "../../utils/API";



class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
    API.registerUser({
        username: this.state.email,
        password: this.state.password
        })
    .then(res => {
        if (res.data === "already exists") {
            alert("User Already Exists")
        }
    }
     
      // {email: this.state.email, password: this.state.password}

    )
    .catch(err => console.log(err));
  }

  render() {
    return (
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
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          > Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;