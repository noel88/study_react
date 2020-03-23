import React from 'react';
import {StyleSheet, Text, FlatList, View, Button} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <MealList listData={displayMeals} navigation={props.navigation}/>
    )
};

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};


export default CategoryMealScreen;
