import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MealsNavigator from "../navigation/MealsNavigator";

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> this is Categories Screen! </Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals'
                });
            }} />
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

export default CategoriesScreen;
