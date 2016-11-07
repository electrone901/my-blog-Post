import React from 'react';
import {Link} from 'react-router';

const Post = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <Link to={`/posts/${this.props.post._id}`}><h3>Edit Blog Post</h3></Link><br/>

        <img src={this.props.post.images}/> 
        <p>{this.props.post.text}</p>
        
        Submit a comment: <br/>
    	<form action="/cgi-bin/hello_get.cgi" method="get">
			<input type="text" name="last_name" value="" maxlength="100" />
			<input type="submit" value="Submit" />
		</form>
      </div>
    );
  }
});

Post.propTypes = {
  post: React.PropTypes.object
}


export default Post;
// {this.props.post.title}