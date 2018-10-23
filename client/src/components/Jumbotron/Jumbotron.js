import React from "react";
import {Card, CardTitle, Modal} from 'react-materialize';
import ChatRoom from "../../pages/ChatRoom/ChatRoom";
import '../../pages/Chat/Chat.css';

const Jumbotron = (props) => (

<Modal
  trigger={ <Card className={props.className} style={{ width: '200px', height: '200px', borderRadius: '50%', margin: 'auto' }} header={<CardTitle style={{ width: '182px', height: '200px', borderRadius: '50%', margin: 'auto' }} image={props.cardimage} waves='light'/>}
  >
  {/* <p>Enter This Chat to talk about {children}!</p> */}
 {props.topic}
</Card>}>
<ChatRoom currenttopic={props.topic} user={props.userinfo} usethisurl={props.chaturl}/>
</Modal>
//   <Card className={props.className} style={{ width: '200px', height: '200px', borderRadius: '50%', margin: 'auto' }} header={<CardTitle reveal image={props.cardimage} waves='light'/>}
//     reveal={<ChatRoom currenttopic={props.topic} user={props.userinfo} usethisurl={props.chaturl}/>}>
//     {/* <p>Enter This Chat to talk about {children}!</p> */}
//    {props.topic}
// </Card>
);



export default Jumbotron;

// {<CardTitle reveal image='https://i.imgur.com/0HoUggK.png' waves='light'/>}

