import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import BannerComponent from '../components/bannerComponent';
import CatogComponent from '../components/catogComponent';
import SongComponent from '../components/songComponent';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Music App</Text>
        <ScrollView>
          <BannerComponent navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
          <Text style={[styles.title, {marginTop: 0}]}>Songs</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});

export default Home;
