import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
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
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'item 18'}]);
    setRefreshing(false);
  };
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onrefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
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
