import React from "react";
import io from "socket.io-client";
import "./ChatRoom.css"
import {Row, Col, Chip} from 'react-materialize'

class ChatRoom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: props.user,
            message: '',
            messages: [],
            url: props.usethisurl,
            img:''
        };

        let numUsers = 0
        this.socket = io(this.state.url);


        

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
            console.log(data)
        });

        this.socket.on('USER LOGIN', function(data) {
            console.log(data)
            ++numUsers
            console.log(numUsers)
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            if (this.state.message.length !== 0) {
                ev.preventDefault();
                this.socket.emit('SEND_MESSAGE', {
                    author: this.props.user,
                    message: this.state.message
                })
                this.setState({ message: '' })
                this.socket.emit('add user', {username: this.state.username});

            } else {
                alert("You Must Type a Message First!")
                ev.preventDefault();
                this.setState({ message: this.state.message })
            }
        };

        this.onKeyPress = (e) => {
            if(e.which === 13) {
              this.sendMessage(e);
            }
          };
    };

    render(){
        return (
            <div className="container modal-container" >
                <div className="row">
                    <div className="col s6 m6">
                        <div className="card modal-card">
                            <div className="card-body">
                                <div className="card-title chatBox-title valign center" style={{color: this.props.color}}>{this.props.currenttopic}</div>
                                <hr />
                            </div>
                            <div className="messages">
                                {this.state.messages.map(message => {
                                    return (
                                        <Row>
                                            <Col s={12} style={{margin: '0 15px 0 15px', width: '15em'}}>
                                                <Chip key={message.username}>
                                                    {message.author}
                                                </Chip>
                                                {message.message}
                                                {this.numUsers}
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="card-action">
                            {/* <input type="text" placeholder={this.props.user} value={this.props.user} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" id="usernamefield" /> */}
                            <br />
                            <textarea onKeyPress={this.onKeyPress} type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} className="form-control" />
                            <br />
                            <button type="submit" onClick={this.sendMessage} className="waves-effect btn chatBox-send">Send</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ChatRoom;

