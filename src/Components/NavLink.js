import React from 'react';
import { Link } from 'react-router';

function NavLink(props) {
  return (
    // es6 destructuring assignment - unwraps the object
    // fancy footwork
    <Link {...props} activeClassName='active' />
  )
}

export default NavLink;
