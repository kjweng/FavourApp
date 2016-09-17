import React from 'react';
import {
  View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          permissions={["public_profile", "email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log(error);
                alert("Login failed with error: " + error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});

module.exports = Login;
