import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row} from 'react-materialize'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Nav from "../../components/Nav";
import io from "socket.io-client";
import Login from "../Login/Login";
import "./Chat.css";
import ReactDOM from 'react-dom';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ChatRoom from "../ChatRoom/ChatRoom";
import loginlogo from "../../public/images/chatr-login.png";
import logo from "../../public/images/chatr-logo.png";
import techLogo from '../../public/images/font-awesome/techChat.png';
import musicLogo from '../../public/images/font-awesome/musicChat.png';
import sportsLogo from '../../public/images/font-awesome/sportsChat.png';
import moviesLogo from '../../public/images/font-awesome/moviesChat.png';
import booksLogo from '../../public/images/font-awesome/booksChat.png';
import techPage from '../../public/images/font-awesome/chatpagetech.png';
// Importing Animation Libraries
// import anime from 'animejs'
// import animationTimings from './common/animationTimings';
// import Transition from 'react-transition-group/Transition';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// 

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
          img: techLogo,
          _id: 1, 
          className: "techChat",
          url: 'localhost:3001',
          color: '#F8DF76'

        }, {
          topic: "Music",
          img: musicLogo,
          _id: 2, 
          className: "musicChat",
          url: 'localhost:3001/chat2',
          color: '#F6B5D2'
        }, {
          topic: "Sports",
          img: sportsLogo,
          _id: 3, 
          className: "sportsChat",
          url: 'localhost:3001/chat3',
          color: '#F0D1E4'
        }, {
          topic: "Movies",
          img: moviesLogo,
          _id: 4, 
          className: "moviesChat",
          url: 'localhost:3001/chat4',
          color: '#A6D1F0'
        },
        {
          topic: "Books",
          img: booksLogo,
          _id: 5, 
          className: "booksChat",
          url: 'localhost:3001/chat5',
          color: '#AFD794'
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
        if (res.data === "no user" || res.data === "already exists") {
          alert("Wrong Email/Password")
          event.preventDefault();
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
        <div className = 'chatMain'>
        <img src={loginlogo} alt="chatr" className="center loginLogo"/>
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
          <div className="footer"></div>
          {/* Hidden Chat DIVS */}
          {/* <div id="chatBar" class="hidden">
              <p>This is my chatBar div!</p>
          </div> */}
      </div>
    );
    } else {

    return (
      <div className="chatMain">
      <img src={logo} alt="chatr" className="center"/>
      <div>
        <Row style={{display: 'flex', justifyContent: 'center', marginBottom: '5em'}}>
 {this.state.category.map(topic => (
          <Col key={topic.url} size="xs-12 md-6 lg-4 xl-4">
            <Jumbotron cardimage={topic.img} className={topic.className} chaturl={topic.url} topic={topic.topic} userinfo={this.state.email}> 
      
            </Jumbotron>
          </Col>
        ))} 
        </Row>
        </div>
        <div className = "footerMain"></div>
        <div className = "chat1"></div>
        </div>
        )}}}

        
  

export default Chat;
