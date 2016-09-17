import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton
} = FBSDK;

var Login = React.createClass({
  render: function(route, navigator) {
    return (
      <View>
        <LoginButton
          permissions={["public_profile", "email"]}
          loginBehaviorIOS="web"
          onLoginFinished={
            (error, result) => {
              var navigator = this.props.navigator;
              if (error) {
                console.log(error);
                alert("Login failed with error: " + error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
          }}
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});

module.exports = Login;
