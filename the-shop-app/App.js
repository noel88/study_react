import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import productsReducer from './store/reducer/products';
import ShopNavigation from "./navigation/ShopNavigation";

const rootReducer = combineReducers({
  products: productsReducer
});

const fetchFont = () => {
    return Font.loadAsync({
        'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

const store = createStore(rootReducer);

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFont}
                onFinish={() => {
                    setFontLoaded(true);
                }
            }/>
        )
    }

  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

