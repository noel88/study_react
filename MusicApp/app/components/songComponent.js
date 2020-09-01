import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class SongComponent extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };

  playSong = (item) => {
    this.props.navigation.navigate();
  };

  render() {
    let song = [
      {
        title: 'Believer',
        subTitle: 'Imagine Dragons',
        duration: 201.6,
        img: require('../assets/a1.jpg'),
      },
      {
        title: 'Hell Of Fame',
        subTitle: 'The Script',
        duration: 201.6,
        img: require('../assets/a2.jpg'),
      },
      {
        title: "It's My Life",
        subTitle: 'Dr. Alban',
        duration: 201.6,
        img: require('../assets/a3.jpg'),
      },
      {
        title: 'Not Afraid',
        subTitle: 'Eminem',
        duration: 201.6,
        img: require('../assets/a4.jpg'),
      },
      {
        title: 'I Will Survive',
        subTitle: 'Gloria Gaynor',
        duration: 201.6,
        img: require('../assets/a5.jpg'),
      },
    ];
    return (
      <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={song}
            ItemSeparatorComponent={() => this.separator()}
            showVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableWithoutFeedback
                  style={styles.songContainer}
                  onPress={() => this.playSong()}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={item.img} style={styles.img} />
                    <View style={styles.dataContainer}>
                      <Text style={styles.songTitle}>{item.title}</Text>
                      <Text style={styles.subTitle}>{item.subTitle}</Text>
                      <Text style={styles.subTitle}>{item.duration / 60}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <Icon
                        name="download"
                        color="gray"
                        size={30}
                        style={{marginTop: 10}}
                      />
                      <Icon name="dots-vertical" color="gray" size={30} />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songTitle: {
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SongComponent;
