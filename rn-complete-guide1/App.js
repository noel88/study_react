import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreens from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StartGameScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
