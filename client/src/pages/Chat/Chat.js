import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Col, Row} from 'react-materialize'
import Nav from "../../components/Nav"



class Chat extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    category: [
      {
        topic: "Tech",
        _id: 1
      }, {
        topic: "Music",
        _id: 2
      }, {
        topic: "Sports",
        _id: 3
      }, {
        topic: "Movies",
        _id: 4
      }, 
    {
      topic: "Books",
      _id: 5
    }]
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>

        {this.state.category.map(topic => (
          <Row>
          <Col size="md-6">
                  <Jumbotron key={topic.topic}>
                    <Link to={"/chat/" + topic._id}>
                      <strong>
                        {topic.topic} {this.props.value}
                      </strong>
                    </Link>
                  </Jumbotron>
           </Col>
           </Row>
                ))}
        
      </div>
    );
  }
}

export default Chat;
