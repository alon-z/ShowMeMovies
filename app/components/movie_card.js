import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'
import testParse from '../logic/YesPlanet.js'

export default class Movie_Card extends Component {
  render() {
    testParse();
    return (
      <View style={styles.container}>
        <Card title='Movie Name Here'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
