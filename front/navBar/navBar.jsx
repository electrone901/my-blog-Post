import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navbar navbar-default">
		<div className="container-fluid">
		  <div className="collapse navbar-collapse">
		    <ul className="nav navbar-nav">
		      <li className="linetext"><Link to="/">Home</Link></li>
		      <li className="linetext"><Link to="/create-post">Create a Post</Link></li>
		      <li className="linetext"><Link to="/">All Post & Edit</Link></li>
		      
		      
		    </ul>
		  </div>
		</div>
	  </nav>
      </div>
    );
  }
});

// Nav.propTypes = {
//   post: React.PropTypes.object
// }


export default Nav;
