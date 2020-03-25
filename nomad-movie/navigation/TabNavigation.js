import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from "react";
import {
    Platform
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import MoviesScreen from "../screen/Movies";
import TVScreen from "../screen/TV";
import SearchScreen from "../screen/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
         screen: MoviesScreen,
         navigationOptions: {
             tabBarIcon : ({focused}) => (
                 <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-film' : 'md-film'} />
             )
         }
        },
        TV: {
            screen: TVScreen,
            navigationOptions: {
                tabBarIcon : ({focused}) => (
                    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'} />
                )
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarIcon : ({focused}) => (
                    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
                )
            }
        }
    },{
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR,
            }
        }
    }
);

export default createAppContainer(TabNavigation);
