import React from "react";
import {
    View,
    StyleSheet
} from 'react-native';
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';
import DefaultText from "../components/DefaultText";


const FavoritesScreen = props => {

    const favMeal = useSelector(state => state.meals.favoriteMeals);

    if (favMeal.length === 0 || !favMeal) {
        return (
            <View style={styles.content}>
                <DefaultText>No Favorite meals found. Start adding Some!</DefaultText>
            </View>
        )
    }

    return (
        <MealList listData={favMeal} navigation={props.navigation}/>
    )
};

const styles = StyleSheet.create({
   content: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default FavoritesScreen;

