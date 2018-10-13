import React from "react";
import io from "socket.io-client";




class ChatRoom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            url: props.usethisurl
        };

        this.socket = io(this.state.url);

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.user,
                message: this.state.message
            })
            this.setState({message: ''})

        }
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">{this.state.url}</div>
                                <hr/>
                                <div className="messages">
                                {this.state.messages.map(message => {
                                  return (
                                    <div key={message.username}>{message.author}: {message.message}</div>
                                    )
                                  })}
                                </div>
                            </div>
                            <div className="card-footer">
                
                            
                                    <input type="text" placeholder={this.props.user} value={this.props.user} onChange={ev => this.setState({username: ev.target.value})} className="form-control" id="usernamefield"/>
                                    <br/>
                                    <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} className="form-control"/>
                                    <br/>
                                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;
