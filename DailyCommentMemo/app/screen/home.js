import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };

  render() {
    let data = [
      {
        title: '2020-08-01',
        subTitle: 'Text Description',
      },
      {
        title: '2020-08-02',
        subTitle: 'Text Description',
      },
      {
        title: '2020-08-03',
        subTitle: 'Text Description',
      },
      {
        title: '2020-08-04',
        subTitle: 'Text Description',
      },
      {
        title: '2020-08-05',
        subTitle: 'Text Description',
      },
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <SwipeListView
          useFlatList={true}
          data={data}
          renderItem={(rowData, rowMap) => (
            <TouchableHighlight
              onPress={() => console.log('You touched me')}
              style={styles.rowFront}>
              <View>
                <Text style={styles.text}>{rowData.item.title}</Text>
                <Text style={styles.subText}>{rowData.item.subTitle}</Text>
              </View>
            </TouchableHighlight>
          )}
          renderHiddenItem={(rowData, rowMap) => (
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}>
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          )}
          leftOpenValue={0}
          rightOpenValue={-70}
          onRowOpen={(rowKey, rowMap) => {
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 2000);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#fff',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 70,
  },
  text: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  subText: {
    alignItems: 'flex-start',
    fontSize: 12,
    marginLeft: 45,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 70,
  },
  backRightBtnLeft: {
    backgroundColor: 'lightgray',
    right: 0,
  },
});

export default Home;

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TouchableHighlight,
//   View,
// } from 'react-native';
//
// import {SwipeListView} from 'react-native-swipe-list-view';
//
// export default function SectionList() {
//   const [listData, setListData] = useState(
//     Array(5)
//       .fill('')
//       .map((_, i) => ({
//         title: `title${i + 1}`,
//         data: [
//           ...Array(5)
//             .fill('')
//             .map((_, j) => ({
//               key: `${i}.${j}`,
//               text: `item #${j}`,
//             })),
//         ],
//       })),
//   );
//
//   const closeRow = (rowMap, rowKey) => {
//     if (rowMap[rowKey]) {
//       rowMap[rowKey].closeRow();
//     }
//   };
//
//   const deleteRow = (rowMap, rowKey) => {
//     closeRow(rowMap, rowKey);
//     const [section] = rowKey.split('.');
//     const newData = [...listData];
//     const prevIndex = listData[section].data.findIndex(
//       (item) => item.key === rowKey,
//     );
//     newData[section].data.splice(prevIndex, 1);
//     setListData(newData);
//   };
//
//   const onRowDidOpen = (rowKey) => {
//     console.log('This row opened', rowKey);
//   };
//
//   const renderItem = (data) => (
//     <TouchableHighlight
//       onPress={() => console.log('You touched me')}
//       style={styles.rowFront}
//       underlayColor={'#AAA'}>
//       <View>
//         <Text>I am {data.item.text} in a SwipeListView</Text>
//       </View>
//     </TouchableHighlight>
//   );
//
//   const renderHiddenItem = (data, rowMap) => (
//     <View style={styles.rowBack}>
//       <Text>Left</Text>
//       <TouchableOpacity
//         style={[styles.backRightBtn, styles.backRightBtnLeft]}
//         onPress={() => closeRow(rowMap, data.item.key)}>
//         <Text style={styles.backTextWhite}>Close</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.backRightBtn, styles.backRightBtnRight]}
//         onPress={() => deleteRow(rowMap, data.item.key)}>
//         <Text style={styles.backTextWhite}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
//
//   const renderSectionHeader = ({section}) => <Text>{section.title}</Text>;
//
//   return (
//     <View style={styles.container}>
//       <SwipeListView
//         useSectionList
//         sections={listData}
//         renderItem={renderItem}
//         renderHiddenItem={renderHiddenItem}
//         renderSectionHeader={renderSectionHeader}
//         leftOpenValue={75}
//         rightOpenValue={-150}
//         previewRowKey={'0'}
//         previewOpenValue={-40}
//         previewOpenDelay={3000}
//         onRowDidOpen={onRowDidOpen}
//       />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   backTextWhite: {
//     color: '#FFF',
//   },
//   rowFront: {
//     alignItems: 'center',
//     backgroundColor: '#CCC',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     justifyContent: 'center',
//     height: 50,
//   },
//   rowBack: {
//     alignItems: 'center',
//     backgroundColor: '#DDD',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingLeft: 15,
//   },
//   backRightBtn: {
//     alignItems: 'center',
//     bottom: 0,
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     width: 75,
//   },
//   backRightBtnLeft: {
//     backgroundColor: 'blue',
//     right: 75,
//   },
//   backRightBtnRight: {
//     backgroundColor: 'red',
//     right: 0,
//   },
// });