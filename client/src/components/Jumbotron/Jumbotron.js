import React from "react";
import {Card, CardTitle} from 'react-materialize'
import ChatRoom from "../../pages/ChatRoom/ChatRoom"

const Jumbotron = (props) => (
  <Card header={<CardTitle reveal image='http://www.mericar.com/chat_logo.png' waves='light'/>}
    reveal={<ChatRoom user={props.userinfo} usethisurl={props.chaturl}/>}>
    {/* <p>Enter This Chat to talk about {children}!</p> */}
   {props.topic}
</Card>
);

export default Jumbotron;
