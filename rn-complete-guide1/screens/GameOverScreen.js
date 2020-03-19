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

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart}/>
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
    }
});

export default GameOverScreen;
