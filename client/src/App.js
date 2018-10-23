import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Chat from "./pages/Chat";
import ChatRoom from "./pages/ChatRoom";
// import ChatRoom2 from "./pages/ChatRoom2";
// import ChatRoom3 from "./pages/ChatRoom3";
// import ChatRoom4 from "./pages/ChatRoom4";
// import ChatRoom5 from "./pages/ChatRoom5";
import NoMatch from "./pages/NoMatch";
import Register from "./pages/Register";
import Nav from "./components/Nav";

const App = () => (
  <div>
  <Nav />
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  </div>
);

export default App;
