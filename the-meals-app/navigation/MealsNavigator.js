import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {
    Platform,
    Text
} from "react-native";
import Colors from "../constants/Colors";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FilterScreen from "../screens/FilterScreen";


const defaultStackNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: navigationData => {
            return {
                headerTitle: 'Meal Categories',
                headerLeft:
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() => {
                            navigationData.navigation.toggleDrawer();
                        }}/>
                    </HeaderButtons>
            }
        }
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
    defaultNavigationOptions: defaultStackNavOption
});

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: navigationData => {
            return {
                headerTitle: 'Your Favorite!',
                headerLeft:
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() => {
                            navigationData.navigation.toggleDrawer();
                        }}/>
                    </HeaderButtons>,
                tabBarLabel: Platform.OS ==='android' ? <Text style={{ fontFamily: 'open-sans-bold'}}>Favorite</Text> : "Favorite"
            }
        }
    },
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOption
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS ==='android' ? <Text style={{ fontFamily: 'open-sans-bold'}}>Meals</Text> : "Meals"
        }
    }
};


const MealFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
});

const FilterNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen,
        navigationOptions: navigationData => {
            return {
                headerTitle: 'Filter Meal!',
                headerLeft:
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() => {
                            navigationData.navigation.toggleDrawer();
                        }}/>
                    </HeaderButtons>
            }
        }
    }
}, { defaultNavigationOptions: defaultStackNavOption});

const MainNavigator = createDrawerNavigator({
    MealFavs: {
        screen: MealFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle : {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
