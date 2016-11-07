
import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

const allPost = React.createClass({

  // getInitialState() {
  //   return {posts: []}
  // },
  // componentDidMount() {
  //   $.ajax({
  //     url: '/posts',
  //     type: 'GET'
  //   })
  //   .done((data) => {
  //     this.setState({posts: data});
  //     console.log('data?', data)
  //   })
  // },
  render: function() {
    return (
      <div>
        
     this is component AllPost <br/>
      Here is going to be all post with only title image
      <h2>{this.props.post.title}</h2>
        {console.log('working?',this.props.post.title)}



        
      </div>
    );
  }
});

allPost.propTypes = {
  post: React.PropTypes.object
}


export default allPost;
// {this.props.post.title}