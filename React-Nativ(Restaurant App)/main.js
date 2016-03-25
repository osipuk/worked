"use strict";
/**
 ==================================================================================
 Description:       desc
 Creation Date:     3/10/16
 Author:            Osipe
 ==================================================================================
 Revision History
 ==================================================================================
 Rev    Date        Author           Task                Description
 ==================================================================================
 1      3/10/16     Osipe          TaskNumber          Created
 ==================================================================================
 */
var React = require('react-native')
var {
  Navigator,
  StyleSheet,
  Deliverto,
} = React;

var Login = require('./components/login');
var Beginhome = require('./components/begin_home');
var Deliverto = require('./components/deliverto');
var Ordersummary = require('./components/ordersummary');
var Payment = require('./components/payment');
var Confirmpay = require('./components/confirm');
var Trackmyorder = require('./components/trackmyorder');
var Wallet = require('./components/wallet');
var Walletfull = require('./components/walletfull');
var Myorder = require('./components/myorder');
var Profile = require('./components/profile');
var Placefold = require('./components/placefold');
var ROUTES = {
  login: Login,
  behome:Beginhome,
  deliverto:Deliverto,
  ordersummary:Ordersummary,
  payment:Payment,
  confirmpay:Confirmpay,
  trackmyorder:Trackmyorder,
  wallet:Wallet,
  walletfull:Walletfull,
  myorder:Myorder,
  profile:Profile,
  placefold:Placefold,
};

module.exports = React.createClass({
  getInitialState: function() {	  
    
	return {
      testval: 'jax',     
    }
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} testval={this.state.testval} />;
  },
  render: function() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'deliverto'} }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
