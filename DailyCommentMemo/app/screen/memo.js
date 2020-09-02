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
  TouchableOpacity,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const strikethrough = require('../assets/strikethrough.png');

class Memo extends Component {
  richText = React.createRef();

  constructor(props) {
    super(props);
  }

  changeTxt = (value) => {
    console.log('value: ', value);
  };

  async save() {
    // Get the data here and call the interface to save the data
    let html = await this.richText.current?.getContentHtml();
    // console.log(html);
    console.log('saveData: ', html);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.iconContainer}>
          <Text style={styles.title}>Memo</Text>
          <TouchableOpacity style={{marginRight: 15}} onPress={this.save}>
            <Icon color="gray" size={30} name="content-save-outline" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll} keyboardDismissMode={'none'}>
          <RichEditor
            ref={(r) => (this.richText = r)}
            initialContentHTML={
              '<span style="color:gray;">하단의 <b>에디터</b>를 이용하여 오늘 하루의 <span style="color: olivedrab"> 메모</span>를 작성하세요.</span>'
            }
            onChange={() => this.changeTxt()}
          />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <RichToolbar
            getEditor={() => this.richText}
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
