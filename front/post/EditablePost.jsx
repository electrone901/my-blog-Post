import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const EditablePost = React.createClass({
  getInitialState() {
    return {
      title: '',
      body: '',
      images: ''
    }
  },
  componentWillMount(){
    this.setState({
      title: this.props.post.title,
      body: this.props.post.text,
      images: this.props.post.images
    })
  },
  submitUpdate() {
    $.ajax({
      url: '/edit-post',
      type: 'POST',
      data: {
        title: this.state.title,
        text: this.state.body,
        images: this.state.images,
        id: this.props.post._id
      }
    })
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <form>
         Edit Title:         <br/>
          <textarea onChange={this.handleChange.bind(this, 'title')}>
              {this.props.post.title}
          </textarea><br/><br/>

          Edit image:        <br/>
          <textarea onChange={this.handleChange.bind(this, 'images')}type="text" name="images">
              {this.props.post.images}
          </textarea><br/><br/>

          Edit Text:         <br/>
        	<textarea onChange={this.handleChange.bind(this, 'body')}>
           		{this.props.post.text}
         	</textarea><br/>
         	 <Link to="/"><input onClick={this.submitUpdate} type="button" value="Submit" /></Link>
         </form>
      </div>
    );
  }
});

EditablePost.propTypes = {
  post: React.PropTypes.object
}


export default EditablePost;

