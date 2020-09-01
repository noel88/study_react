import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ProfileComponent from '../components/profileComponent';
import SongComponent from '../components/songComponent';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <ScrollView>
          <ProfileComponent />
          <Text style={[styles.title, {marginTop: 10, fontSize: 18}]}>
            History
          </Text>
          <SongComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});

export default Profile;
