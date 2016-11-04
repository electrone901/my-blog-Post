import React from 'react';
import $ from 'jquery';
import EditablePost from '../post/EditablePost.jsx'

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
      
        <h1> Edit PageBlog </h1>
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
