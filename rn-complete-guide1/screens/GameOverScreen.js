import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/success.png')}
                        // source={{uri:'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg'}}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>
                            {props.roundsNumber}
                        </Text>
                        rounds to guess the number{' '}
                        <Text style={styles.highlight}>
                            {props.userNumber}
                            </Text>
                        </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.4,
        borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16: 20
    },
    resultContainer: {
      marginVertical: Dimensions.get('window').height / 60,
      marginHorizontal: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;
