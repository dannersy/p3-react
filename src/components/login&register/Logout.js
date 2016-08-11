var React = require('react');
var firebaseUtils = require('../../utilities/firebaseUtils');

var Logout = React.createClass({
  componentDidMount: function () {
    firebaseUtils.logout();
  },

  render: function () {
    return <p>You are now logged out</p>;
  }
});

module.exports = Logout;
