import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row} from 'react-materialize'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Nav from "../../components/Nav"
import io from "socket.io-client";
import Login from "../Login/Login"
import "../Login/Login.css";
import ReactDOM from 'react-dom'




class Chat extends Component {

  constructor(props) {
    super(props);

  

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      category: [
        {
          topic: "Tech",
          _id: 1, 
          url: 'localhost:3001'
        }, {
          topic: "Music",
          _id: 2, 
          url: 'localhost:3001/chat2'
        }, {
          topic: "Sports",
          _id: 3, 
          url: 'localhost:3001/chat3'
        }, {
          topic: "Movies",
          _id: 4, 
          url: 'localhost:3001/chat4'
        },
        {
          topic: "Books",
          _id: 5, 
          url: 'localhost:3001/chat5'
        }]
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
    API.login({
      username: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data === "no user") {
          alert("wrong password")
        } else {
          console.log(res)
          this.setState({ isLoggedIn: true })
        }
      })
      .catch(err => console.log(err));
  }

  render() {


    const { isLoggedIn } = this.state

    if (isLoggedIn === false) {
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
      // return <Redirect userinfo={this.state.email} to={{
      //   pathname: '/chat',
      // state: {
      //   email: this.state.email
      // }}} />
    } else {

    return (
      <div>
        {this.state.category.map(topic => (
          <Row>
            <Col size="md-6">
              <Jumbotron chaturl={topic.url} topic={topic.topic} userinfo={this.state.email}> 
        
              </Jumbotron>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
  }
}


export default Chat;
