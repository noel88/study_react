import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BannerComponent from '../components/bannerComponent';
import CatogComponent from '../components/catogComponent';
import SongComponent from '../components/songComponent';
import Icon from 'react-native-vector-icons/Ionicons';

class Discover extends Component {
  // const [state, setState] = useState('');

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Music App</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter text here" />
          <TouchableOpacity style={styles.searchBtn}>
            <Icon name="ios-search" size={25} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={[styles.title, {marginTop: 0}]}>Recently Searched</Text>
          <SongComponent navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
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
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    color: '#000',
    borderRadius: 20,
    borderColor: 'gray',
    marginLeft: 10,
    marginRight: 5,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  searchBtn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
  },
});

export default Discover;
