'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// To use HTML5 history api, use the parameter Router.HistoryLocation
Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});