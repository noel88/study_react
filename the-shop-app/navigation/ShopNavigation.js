import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailsScreen";

const ProductNavigation = createStackNavigator({
    ProductOverview: {
        screen: ProductOverviewScreen,
        navigationOptions: {
            headerTitle: 'All Products'
        }
    },
    ProductDetail: {
        screen: ProductDetailScreen,
        navigationOptions: navData =>  {
            return {
                headerTitle: navData.navigation.getParam('productTitle')
            }
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
