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
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ChatRoom from "../ChatRoom/ChatRoom"




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
          img:'http://icons-for-free.com/free-icons/png/512/2890572.png',
          _id: 1, 
          url: 'localhost:3001'
        }, {
          topic: "Music",
          img:'https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/music.png',
          _id: 2, 
          url: 'localhost:3001/chat2'
        }, {
          topic: "Sports",
          img:'https://www.shareicon.net/download/2016/08/18/814410_game_512x512.png',
          _id: 3, 
          url: 'localhost:3001/chat3'
        }, {
          topic: "Movies",
          img:'https://www.shareicon.net/download/2016/07/05/791306_cinema_512x512.png',
          _id: 4, 
          url: 'localhost:3001/chat4'
        },
        {
          topic: "Books",
          img:'https://i.imgur.com/kCSiMNB.png',
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
      <img src="https://i.imgur.com/0HoUggK.png" alt="chatr" className="center"/>
      <div>
        <Row>
 {this.state.category.map(topic => (
          <Row>
            <Col size="md-6">
              <Jumbotron cardimage={topic.img} chaturl={topic.url} topic={topic.topic} userinfo={this.state.email}> 
        
              </Jumbotron>
            </Col>
          </Row>
        ))} 
        </Row>
        </div>
        </div>
        )}}}

        
  

export default Chat;
