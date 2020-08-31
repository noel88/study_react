import React, {Component, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Surface from 'react-native-paper/src/components/Surface';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Surface style={styles.surface}>
            <Image
              source={require('../assets/icon_black.png')}
              style={styles.profile}
            />
          </Surface>
          <View style={styles.dataContainer}>
            <Text style={styles.name}>AppDevBlg</Text>
            <Text style={styles.uname}>appdevblog_100100</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 10,
    flexDirection: 'row',
  },
  surface: {
    height: 80,
    width: 80,
    borderRadius: 75,
    elevation: 15,
    overflow: 'hidden',
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 75,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
  uname: {
    fontSize: 18,
    color: 'grey',
  },
});

export default ProfileComponent;
