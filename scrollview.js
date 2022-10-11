import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 8'},
    {key: 9, item: 'item 9'},
    {key: 10, item: 'item 10'},
    {key: 11, item: 'item 11'},
    {key: 12, item: 'item 12'},
    {key: 13, item: 'item 13'},
    {key: 14, item: 'item 14'},
    {key: 15, item: 'item 15'},
    {key: 16, item: 'item 16'},
    {key: 17, item: 'item 17'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onrefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 18, item: 'item 18'}]);
    setRefreshing(false);
  };
  return (
    <ScrollView
      horizontal={false}
      style={styles.body}
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onrefresh} />
      }>
      {items.map(object => {
        return (
          <View style={styles.item} key={object.key}>
            <Text style={styles.text}>{object.item}</Text>
          </View>
        );
      })}
    </ScrollView>
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

