import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {
    Platform,
    Text
} from "react-native";
import Colors from "../constants/Colors";
import {MEALS} from "../data/dummy-data";
import React from "react";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: navigationData => {
            const mealId = navigationData.navigation.getParam('mealId');
            const selectedMeal = MEALS.find(meal => meal.id === mealId);
            return {
                headerTitle: selectedMeal.title,
                headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {}}
                    />
                </HeaderButtons>
            }
        },
    }
}, {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
    }
});

export default createAppContainer(MealsNavigator);
