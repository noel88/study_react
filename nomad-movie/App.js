import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import MainNavigation from "./navigation/MainNavigation";

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
          <>
              <StatusBar barStyle="light-content"/>
              <MainNavigation/>
          </>
      );
    } else {
      return (
          <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>
      )
    }
  }
}

