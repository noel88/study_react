import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = props => {
    return (
        <View style={screen}>
            <Text> this is Favorites Screen! </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;
