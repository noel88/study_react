import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const BannerComponent = ({props}) => {
  // const [state, setState] = useState('');

  let banners = [
    {
      title: 'Metal City',
      subTitle: 'Dead April',
      img: require('../assets/b1.jpg'),
    },
    {
      title: 'Return To Forever',
      subTitle: '',
      img: require('../assets/b2.jpg'),
    },
    {
      title: 'Your Love Remains',
      subTitle: 'The Rock Music',
      img: require('../assets/b3.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        horizontal={true}
        pagingEnabled={true}
        showHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.banner} key={index}>
              <ImageBackground source={item.img} style={styles.bannerImage}>
                <TouchableOpacity style={styles.btn}>
                  {/*<Icon2 name="ios-book" size={18} color="#000" />*/}
                  <Icon name="play" size={18} color="#000" />
                  <Text style={styles.text}>Play Now</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 250,
    backgroundColor: '#fff',
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
});

export default BannerComponent;