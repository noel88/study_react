/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
// import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNGooglePlaces from 'react-native-google-places';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// const getMoviesFromApi = () => {
//   let key = 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
//   let location = `${this.state.latitude},${this.state.longitude}`;
//   let radius = '500';
//   let type = 'food';
//   return fetch(
//     `https://maps.googleapis.com/maps/api/place/nearbysearch/output?key=${key}&location=${location}&radius=${radius}&type=${type}`,
//   )
//     .then((response) => {
//       console.log(response.json());
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
let photo1 = new Array();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      types: [],
      foodPlaces: [],
      cafePlaces: [],
      photo: [],
      placeDetails: [],
      test: '',
    };
  }

  // componentDidUpdate(prevProps: Props, prevState: State, prevContext: *): * {
  //   console.log('prestate', prevState);
  //   if (prevState.foodPlaces.length > 0 && prevState.cafePlaces.length > 0) {
  //     console.log('조건만족');
  //     this.setState({photo: photo1}, () => {
  //       console.log('Update', this.state.photo);
  //     });
  //   }
  // }

  // componentWillUpdate(nextProps: Props, nextState: State, nextContext: *): * {
  //   console.log('shouldComponentUpdate', nextState);
  //   this.setState({photo: photo1}, () => {
  //     console.log('Update', this.state.photo);
  //   });
  // }

  // shouldComponentUpdate(
  //   nextProps: Props,
  //   nextState: State,
  //   nextContext: *,
  // ): boolean {
  //   console.log('shouldComponentUpdate', nextState);
  //   this.setState({photo: photo1}, () => {
  //     console.log(this.state.photo);
  //   });
  // }

  getkey() {
    return 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
  }

  getData() {
    fetch(
      `https://openapi.naver.com/v1/search/local.json?query=${encodeURI(
        '음식점',
      )}&display=5&start=1&sort=random`,
      {
        headers: {
          'X-Naver-Client-Id': 'Do8ASBMnczvPUUEkNzxG',
          'X-Naver-Client-Secret': 'Wibqs5cojH',
        },
      },
    )
      .then((res) => res.json())
      .then((response) => console.log('Success:', response))
      .catch((error) => console.error('Error:', error));
  }

  getPlacePhoto(place_id) {
    let key = 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
    let photoreference = '';
    // if (photo1 == place_id) {
    //   photoreference = photo1.photo_reference;
    //   return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${photoreference}&key=${key}`;
    // }
    //return 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=CmRaAAAAGStaVBWM0taiTN_7zv53FjV5CfFqKJYG7wdnX--nX5rizGGLi5RSt4A851KL9Hhw9n7rQiMq59Okhn31IsPYDfHw6tIifXt1ctx5TG_Mzox3Bwf5_8ihQnN4iTqmro2tEhAV9Gxf6CahOekphkAUUcJ9GhSKRp2KpyL6SksAvEHAk-HmUOjybA&key=AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
    this.state.photo
      .filter((value) => value.id === place_id)
      .map((value) => {
        // console.log('filter');
        // console.log(value);
        // console.log(
        //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${value.photo_reference}&key=${key}`,
        // );
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${value.photo_reference}&key=${key}`;
      });
    // console.log('getphoto1:', this.state.photo);
    // console.log('getphoto:', photo1);
    // if (this.state.photo.id == place_id) {
    //   console.log('photo_reference', this.state.photo.photo_reference);
    // }
    // photoreference = this.state.photo.photo_reference;
    //return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${photoreference}&key=${key}`;
    // 'https://maps.googleapis.com/maps/api/place/details/json?photoreference=CmRaAAAAGStaVBWM0taiTN_7zv53FjV5CfFqKJYG7wdnX--nX5rizGGLi5RSt4A851KL9Hhw9n7rQiMq59Okhn31IsPYDfHw6tIifXt1ctx5TG_Mzox3Bwf5_8ihQnN4iTqmro2tEhAV9Gxf6CahOekphkAUUcJ9GhSKRp2KpyL6SksAvEHAk-HmUOjybA&key=AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY',
  }
  getPlaceDetails(placeId) {
    let key = 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';

    let test = new Array();
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=price_level,name,photos,business_status,rating,formatted_phone_number,formatted_address,geometry&key=${key}&language=ko`,
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log('placeId:', placeId);
        // console.log('PlaceDetails:', json.result);
        this.setState({placeDetails: json.result});
        // console.log(json.result.photos.length);

        // test.push({
        //   id: placeId,
        //   photo_reference: '',
        // });

        if (json.result.photos) {
          // console.log(json.result.photos[0]);
          // this.getPlacePhoto(json.result.photos[0].photo_reference);

          photo1.push({
            id: placeId,
            photo_reference: json.result.photos[0].photo_reference,
          });

          // this.setState({
          //   photo: photo.concat({
          //     id: placeId,
          //     photo_reference: json.result.photos[0].photo_reference,
          //   }),
          // });
          // this.setState({
          //   photo: {
          //     id: placeId,
          //     photo_reference: json.result.photos[0].photo_reference,
          //   },
          // });
        } else {
          // this.setState({
          //   photo: {id: placeId, photo_reference: ''},
          // });
          // this.setState({
          //   photo: photo.concat({
          //     id: placeId,
          //     photo_reference: '',
          //   }),
          // });
          photo1.push({
            id: placeId,
            photo_reference: '',
          });
        }
        //
        // this.setState({photo: {id: 1, ad: '22222'}, {id:2, ad: '235235'}});
        // console.log('Photo1::', this.state.photo);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getRadiusPlace() {
    let key = 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
    let location = `${this.state.latitude},${this.state.longitude}`;
    // console.log(location);
    let radius = '500';
    let type = 'restaurant';
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${location}&radius=${radius}&type=${type}&language=ko`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        this.setState({foodPlaces: json.results});
        this.state.foodPlaces.forEach((value, index) => {
          this.getPlaceDetails(value.place_id);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getRadiusCafePlace() {
    let key = 'AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY';
    let location = `${this.state.latitude},${this.state.longitude}`;
    // console.log(location);
    let radius = '500';
    let type = 'cafe';
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${location}&radius=${radius}&type=${type}&language=ko`,
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results);
        this.setState({cafePlaces: json.results});
        // this.playsType(this.state.places);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // componentDidUpdate(prevProps: Props, prevState: State, prevContext: *): * {
  //   // return super.componentDidUpdate(prevProps, prevState, prevContext);
  //   console.log(prevState);
  //   this.setState({photo: photo1});
  //   console.log('update');
  // }

  setTimePassed() {
    this.setState({photo: photo1}, () => {
      console.log(
        'Update',
        this.state.foodPlaces.map((value) =>
          this.state.photo
            .filter((value1) => value.place_id == value1.id)
            .map((value2) => Object.assign(value, value2)),
        ),
      );
    });
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        this.setState({latitude: position.coords.latitude});
        this.setState({longitude: position.coords.longitude});
        this.getRadiusPlace();
        this.getRadiusCafePlace();
        this.getData();
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    // console.log('timeOut');
    // console.log(photo1);
    // this.setState({photo: photo1});
    // console.log('photo:', this.state.photo);
    // this.getRadiusPlace();
    // this.getRadiusCafePlace();
    setTimeout(() => {
      this.setTimePassed();
      // this.setState({photo: photo1}, () => {
      //   console.log('Update', this.state.photo);
      // });
      // console.log('photo:', this.state.photo);
    }, 4000);
    // Geolocation.getCurrentPosition((info) => console.log(info));
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     // console.log(position);
    //     this.setState({latitude: position.coords.latitude});
    //     this.setState({longitude: position.coords.longitude});
    //     this.getRadiusPlace();
    //     this.getRadiusCafePlace();
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );
    // RNGooglePlaces.getAutocompletePredictions('food', {
    //   language: 'ko',
    //   type: 'establishments',
    //   country: 'KR',
    //   locationBias: {
    //     latitudeSW: Number(this.state.latitude),
    //     longitudeSW: Number(this.state.longitude),
    //     latitudeNE: 6.6967964,
    //     longitudeNE: 4.351055,
    //   },
    // })
    //   .then((place) => {
    //     //console.log('getAutocompletePredictions:', place);
    //     this.setState({places: place});
    //     // this.playsType(this.state.places);
    //     // this.onGetPlaceByIDPress(...this.state.places.placeID);
    //   })
    //   .catch((error) => console.log(error.message));
  }

  playsType(value) {
    // const arr = new Array();
    for (let i = 0; i < value.length; i++) {
      // const val = value[0];
      RNGooglePlaces.lookUpPlaceByID(value[i].place_id)
        .then((results) => {
          console.log('Place Details:: ', results);
          // arr.push(results);
          // console.log('array111::', arr);
        })
        .catch((error) => console.log(error.message));
      //console.log('states::', this.state.placeDetails);
    }
    // this.setState({placeDetails: arr});
  }

  // openSearchModal() {
  //   RNGooglePlaces.openAutocompleteModal(
  //     {
  //       // language: {
  //       //   code: 'ko',
  //       // },
  //       initialQuery: '',
  //       // locationRestriction: {
  //       //   latitudeSW: 6.3670553,
  //       //   longitudeSW: 2.7062895,
  //       //   latitudeNE: 6.6967964,
  //       //   longitudeNE: 4.351055,
  //       // },
  //       country: 'KR',
  //       type: 'establishments',
  //     },
  //     [
  //       'placeID',
  //       'location',
  //       'name',
  //       'address',
  //       'types',
  //       'openingHours',
  //       'plusCode',
  //       'rating',
  //       'userRatingsTotal',
  //       'viewport',
  //     ],
  //   )
  //     .then((place) => {
  //       console.log(place);
  //       // console.log(JSON.stringify(place));
  //
  //       this.setState({latitude: place.location.latitude});
  //       this.setState({longitude: place.location.longitude});
  //       this.setState({types: place.types});
  //       // RNGooglePlaces.getAutocompletePredictions(...this.state.types, {
  //       RNGooglePlaces.getAutocompletePredictions(['cafe', 'restaurant'], {
  //         type: 'establishments',
  //         country: 'KR',
  //         locationBias: {
  //           latitudeSW: this.state.latitude,
  //           longitudeSW: this.state.longitude,
  //           latitudeNE: 6.6967964,
  //           longitudeNE: 4.351055,
  //         },
  //       })
  //         .then((place) => {
  //           console.log('getAutocompletePredictions:', place);
  //           this.setState({places: place});
  //           this.playsType(this.state.places);
  //           // this.onGetPlaceByIDPress(...this.state.places.placeID);
  //         })
  //         .catch((error) => console.log(error.message));
  //       // place represents user's selection from the
  //       // suggestions and it is a simplified Google Place object.
  //     })
  //     .catch((error) => console.log(error.message)); // error is a Javascript Error object
  // }

  render() {
    return (
      <>
        {/*<View stlye={styles.search}>*/}
        {/*  <TouchableOpacity*/}
        {/*    style={styles.button}*/}
        {/*    onPress={() => this.openSearchModal()}>*/}
        {/*    <Text>Pick a Place</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</View>*/}
        <ScrollView>
          {this.state.photo.length > 0 && (
            <FlatList
              data={this.state.foodPlaces.map((value) =>
                this.state.photo
                  .filter((value1) => value.place_id == value1.id)
                  .map((value2) => Object.assign(value, value2)),
              )}
              renderItem={({item, index}) => {
                return (
                  <TouchableWithoutFeedback style={styles.songContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={styles.img}
                        source={{
                          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${
                            item[0].photo_reference
                          }&key=${this.getkey()}`,
                        }}
                      />
                      <View style={styles.dataContainer}>
                        <Text style={styles.songTitle}>{item[0].name}</Text>
                        <Text style={styles.subTitle}>{item[0].vicinity}</Text>
                        <Text>{item[0].rating ? item[0].rating : 0} / 5</Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          )}

          {/*<FlatList*/}
          {/*  data={this.state.photo}*/}
          {/*  renderItem={({item, index}) => {*/}
          {/*    return (*/}
          {/*      <TouchableWithoutFeedback style={styles.songContainer}>*/}
          {/*        <View style={{flexDirection: 'row'}}>*/}
          {/*          <Image*/}
          {/*            style={styles.img}*/}
          {/*            source={{*/}
          {/*              uri:*/}
          {/*                // 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=CmRaAAAAGStaVBWM0taiTN_7zv53FjV5CfFqKJYG7wdnX--nX5rizGGLi5RSt4A851KL9Hhw9n7rQiMq59Okhn31IsPYDfHw6tIifXt1ctx5TG_Mzox3Bwf5_8ihQnN4iTqmro2tEhAV9Gxf6CahOekphkAUUcJ9GhSKRp2KpyL6SksAvEHAk-HmUOjybA&key=AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY',*/}
          {/*                this.getPlacePhoto(item.id),*/}
          {/*            }}*/}
          {/*          />*/}
          {/*          <View style={styles.dataContainer}>*/}
          {/*            <Text style={styles.songTitle}>{item.id}</Text>*/}
          {/*            <Text style={styles.songTitle}>{item.id}</Text>*/}
          {/*            /!*<Text style={styles.subTitle}>{item.vicinity}</Text>*!/*/}
          {/*            /!*<Text>{item.rating ? item.rating : 0} / 5</Text>*!/*/}
          {/*          </View>*/}
          {/*        </View>*/}
          {/*      </TouchableWithoutFeedback>*/}
          {/*    );*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<FlatList*/}
          {/*  data={this.state.cafePlaces}*/}
          {/*  renderItem={({item, index}) => {*/}
          {/*    return (*/}
          {/*      <TouchableWithoutFeedback style={styles.songContainer}>*/}
          {/*        <View style={{flexDirection: 'row'}}>*/}
          {/*          <Image*/}
          {/*            style={styles.img}*/}
          {/*            source={{*/}
          {/*              uri:*/}
          {/*                // 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=CmRaAAAAGStaVBWM0taiTN_7zv53FjV5CfFqKJYG7wdnX--nX5rizGGLi5RSt4A851KL9Hhw9n7rQiMq59Okhn31IsPYDfHw6tIifXt1ctx5TG_Mzox3Bwf5_8ihQnN4iTqmro2tEhAV9Gxf6CahOekphkAUUcJ9GhSKRp2KpyL6SksAvEHAk-HmUOjybA&key=AIzaSyAk1ee0v21XhJ6sD84Nencc4KYUiB0jVjY',*/}
          {/*                this.getPlacePhoto(item.place_id),*/}
          {/*            }}*/}
          {/*          />*/}
          {/*          <View style={styles.dataContainer}>*/}
          {/*            <Text style={styles.songTitle}>{item.name}</Text>*/}
          {/*            <Text style={styles.subTitle}>{item.vicinity}</Text>*/}
          {/*            <Text>{item.rating ? item.rating : 0} / 5</Text>*/}
          {/*          </View>*/}
          {/*        </View>*/}
          {/*      </TouchableWithoutFeedback>*/}
          {/*    );*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<Text>{this.state.mar}</Text>*/}
          <View style={styles.container}>
            <MapView
              zoom={8}
              mapTypeControl="true"
              // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: Number(this.state.latitude),
                longitude: Number(this.state.longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
              {this.state.foodPlaces.map((marker, index) => (
                <MapView.Marker
                  key={index}
                  // coordinate={marker.geometry.location}
                  coordinate={{
                    latitude: marker.geometry.location.lat
                      ? marker.geometry.location.lat
                      : 0,
                    longitude: marker.geometry.location.lng
                      ? marker.geometry.location.lng
                      : 0,
                  }}
                  image={marker.icon}
                  title={marker.name}
                />
              ))}
              {this.state.cafePlaces.map((marker, index) => (
                <MapView.Marker
                  key={index}
                  // coordinate={marker.geometry.location}
                  coordinate={{
                    latitude: marker.geometry.location.lat
                      ? marker.geometry.location.lat
                      : 0,
                    longitude: marker.geometry.location.lng
                      ? marker.geometry.location.lng
                      : 0,
                  }}
                  image={marker.icon}
                  title={marker.name}
                />
              ))}
              <Marker
                coordinate={{
                  latitude: Number(this.state.latitude),
                  longitude: Number(this.state.longitude),
                }}
                title="ME"
              />
            </MapView>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
  },
  button: {},
  container: {
    flex: 1,
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  list: {
    //width: width,
  },
  songContainer: {
    //width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    // width: width - 160,
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

export default App;
