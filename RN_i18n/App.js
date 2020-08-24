/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import I18n, {getLanguages} from 'react-native-i18n';
// OR const I18n = require('react-native-i18n').default

// getLanguages().then((languages) => {
//   console.log(languages); // ['en-US', 'en']
// });

class App extends React.Component {
  state = {languages: []};

  componentDidMount() {
    // I18n.locale();

    getLanguages().then((languages) => {
      this.setState({languages: languages});
    });

    console.log(this.state.languages);
  }

  render() {
    return <Text>{I18n.t('greeting')}</Text>;
  }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  ko: {
    greeting: '안녕',
  },
  fr: {
    greeting: 'Bonjour!',
  },
};
export default App;
