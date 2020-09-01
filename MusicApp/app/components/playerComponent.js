import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class PlayerComponent extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

export default PlayerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
