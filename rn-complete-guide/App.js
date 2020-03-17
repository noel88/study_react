import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 100}}>
     <View>
       <TextInput
           placeholder="Course Goal"
           style={{ borderColor: 'black', borderBottomWidth: 1, padding: 10}}
       />
       <Button title="ADD" />
     </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
