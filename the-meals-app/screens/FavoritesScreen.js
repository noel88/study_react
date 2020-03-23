import React from "react";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';


const FavoritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList listData={availableMeals} navigation={props.navigation}/>
    )
};


export default FavoritesScreen;

