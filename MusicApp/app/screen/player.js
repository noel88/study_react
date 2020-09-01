import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayerComponent from '../components/playerComponent';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlayerComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
