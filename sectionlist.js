import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'},
    {name: 'item 8'},
    {name: 'item 9'},
    {name: 'item 10'},
    {name: 'item 11'},
    {name: 'item 12'},
    {name: 'item 13'},
    {name: 'item 14'},
    {name: 'item 15'},
    {name: 'item 16'},
    {name: 'item 17'},
  ]);
  const DATA = [
    {title: 'Title 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3']},
    {title: 'Title 2', data: ['Item 2-1', 'Item 2-2']},
    {title: 'Title 3', data: ['Item 3-1', 'Item 3-2', 'Item 3-3']},
  ];
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'item 18'}]);
    setRefreshing(false);
  };
  return (
    <SectionList
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  item: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff',
  },
  text: {
    fontSize: 40,
    color: '#ff0000',
  },
});

export default App;

