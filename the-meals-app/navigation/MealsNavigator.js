import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import {MEALS} from "../data/dummy-data";



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
                headerTitle: selectedMeal.title
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
