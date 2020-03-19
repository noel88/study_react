import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    source={{uri:'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg'}}
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
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    resultContainer: {
      marginVertical: 15,
      marginHorizontal: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;
