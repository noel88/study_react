import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";

const ProductNavigation = createStackNavigator({
    ProductOverview: {
        screen: ProductOverviewScreen,
        navigationOptions: {
            headerTitle: 'All Product'
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductNavigation);
