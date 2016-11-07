import React from 'react';
import Post from '../post/Post.jsx';
import allPost from '../allPost/allPost.jsx';

const Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Should have full article and option to edit </h1>
        <h1>Posts:</h1>
        {this.props.posts.map((post, indx) => <Post key={indx} post={post} />)}
      </div>
    );
  }

});

Posts.propTypes = {
  posts: React.PropTypes.array
}


export default Posts;
