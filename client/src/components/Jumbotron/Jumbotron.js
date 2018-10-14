import React from "react";
import {Card, CardTitle} from 'react-materialize'
import ChatRoom from "../../pages/ChatRoom/ChatRoom"

const Jumbotron = (props) => (
  <Card style={{ width: '500px', height: '450px' }} header={<CardTitle reveal image={props.cardimage} waves='light'/>}
    reveal={<ChatRoom currenttopic={props.topic} user={props.userinfo} usethisurl={props.chaturl}/>}>
    {/* <p>Enter This Chat to talk about {children}!</p> */}
   {props.topic}
</Card>
);

export default Jumbotron;

// {<CardTitle reveal image='https://i.imgur.com/0HoUggK.png' waves='light'/>}