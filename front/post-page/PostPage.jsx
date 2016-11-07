import React from 'react';
import $ from 'jquery';
import EditablePost from '../post/EditablePost.jsx'
import Nav from '../navBar/navBar.jsx';
import allPost from '../allPost/allPost.jsx';

const PostPage = React.createClass({
  getInitialState() {
    return {post: null}
  },
  componentDidMount() {
    $.ajax({
      url: `/posts/${this.props.params.id}`,
      type: 'GET'
    })
    .done((data) => {
      console.log('AJAX data', data);
      this.setState({post: data});
    })
  },
  render: function() {
    return this.state.post ? (
      <div style={postsStyle}>
        <Nav />{this.props.children}
        <h1> Edit Page-Blog </h1>
        <EditablePost post={this.state.post} />
      </div>
    ) : null;
  }
});

const postsStyle = {
    backgroundColor: 'azure',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
}

export default PostPage;
