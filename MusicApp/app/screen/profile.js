import React, {Component, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ProfileComponent from '../components/profileComponent';

const Profile = () => {
  // const [state, setState] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <ProfileComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});

export default Profile;
