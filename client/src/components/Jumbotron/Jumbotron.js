import React from "react";
import {Card, CardTitle} from 'react-materialize'

const Jumbotron = ({children}) => (
  <Card name={children} header={<CardTitle reveal image='http://www.mericar.com/chat_logo.png' waves='light'/>}
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p>Enter This Chat to talk about {children}!</p>
   
</Card>
);

export default Jumbotron;
