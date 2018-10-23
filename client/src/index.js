import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const express = require("express");

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

ReactDOM.render(<App />, document.getElementById("root"));
