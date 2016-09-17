import React from 'react';
import { View, Text } from 'react-native';

var JobListing = React.createClass({
    render() {
      return (
        <View>
          <Text>Hi! My name is {this.props.title}.</Text>
        </View>
      )
    }
});

module.exports = JobListing;
