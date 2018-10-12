import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from 'react-materialize'
import Nav from "../../components/Nav"
import io from "socket.io-client";
import Login from "../Login/Login"




class Chat extends Component {
  componentDidMount() {
    const {email} = this.props.location.state
  }
  constructor(props) {
    super(props);

  

    this.state = {
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

   

    // this.socket = io(this.state.url)

    // this.socket.on('RECEIVE_MESSAGE', function (data) {
    //   addMessage(data);
    // });

    // const addMessage = data => {
    //   console.log(data);
    //   this.setState({ messages: [...this.state.messages, data] });
    //   console.log(this.state.messages);
    // };

    // this.sendMessage = ev => {
    //   ev.preventDefault();
    //   this.socket.emit('SEND_MESSAGE', {
    //     author: this.state.username,
    //     message: this.state.message
    //   })
    //   this.setState({ message: '' })

    // }
  }

  render() {
    return (
      <div>
        {this.state.category.map(topic => (
          <Row>
            <Col size="md-6">
              <Jumbotron chaturl={topic.url} topic={topic.topic}> 
        
              </Jumbotron>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default Chat;
