import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MoviesScreen from "../screen/Movies";
import TVScreen from "../screen/TV";
import SearchScreen from "../screen/Search";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Movies: MoviesScreen,
        TV: TVScreen,
        Search: SearchScreen
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
