import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CreatePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      body: '',
      images: ''
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  submitNewPost() {
    $.ajax({
      url: '/my-posts',
      type: 'POST',
      data: {
        title: this.state.title,
        images: this.state.images,
        text: this.state.body,
        
      }
    })
  },
  render(){
    return (
      <form>
        <h1>Submit a post:</h1>
        <label>Title: </label>
        <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        <br/>
        <br/>
        <label>Add Images: </label>
        <input onChange={this.handleChange.bind(this, 'images')} type="body" name="images" />
        <br/>
        <br/>
        <label>Body: </label>
        <input onChange={this.handleChange.bind(this, 'body')} type="body" name="body" />
        <br/>
        <br/>
        <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
      </form>
    )
  }
})

export default CreatePost;
