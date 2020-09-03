import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const strikethrough = require('../assets/strikethrough.png');

class Memo extends Component {
  richText = React.createRef();

  constructor(props) {
    super(props);
  }

  async save() {
    let html = await this.richText.current?.getContentHtml();
    console.log('saveData: ', html);
    await AsyncStorage.setItem('@memo', html);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.iconContainer}>
          <Text style={styles.title}>Memo</Text>
          <TouchableWithoutFeedback
            style={{marginRight: 15}}
            onPress={() => this.save()}>
            <Icon color="gray" size={30} name="content-save-outline" />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView style={styles.scroll} keyboardDismissMode={'none'}>
          <RichEditor
            ref={this.richText}
            placeholder={
              '하단의 에디터를 이용하여 오늘 하루 메모를 작성하세요😀'
            }
            setContentHTML={() => this.save()}
          />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <RichToolbar
            editor={this.richText}
            iconSize={40}
            actions={[
              ...defaultActions,
              actions.setStrikethrough,
              actions.heading1,
              actions.heading2,
              actions.heading3,
            ]}
            iconMap={{
              [actions.setStrikethrough]: strikethrough,
              [actions.heading1]: ({tintColor}) => (
                <Text style={[styles.tib]}>H1</Text>
              ),
              [actions.heading2]: ({tintColor}) => (
                <Text style={[styles.tib]}>H2</Text>
              ),
              [actions.heading3]: ({tintColor}) => (
                <Text style={[styles.tib]}>H3</Text>
              ),
            }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveBtn: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
  tib: {
    textAlign: 'center',
    color: '#6e6d6d',
  },
});

export default Memo;
