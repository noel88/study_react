import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screen/Detail";

const MainNavigation = createStackNavigator({
    Tabs: TabNavigation,
    Detail: DetailScreen
},{

});

export default createAppContainer(MainNavigation);
