import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

export default class App extends Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({loaded: true});

  loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };


  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
      );
    } else {
      return (
          <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
