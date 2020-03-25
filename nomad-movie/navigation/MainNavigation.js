import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screen/Detail";
import {headerStyles} from "./config";

const MainNavigation = createStackNavigator({
    Tabs: {
        screen: TabNavigation,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            ...headerStyles
        }
    }
},{
    headerMode: 'screen',
    headerBackTitleVisible: false
});

export default createAppContainer(MainNavigation);
