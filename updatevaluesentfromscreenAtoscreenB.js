import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    //navigation.navigate('Screen_B');
    //navigation.replace('Screen_B');
    //navigation.openDrawer();
    //navigation.closeDrawer();
    //navigation.toggleDrawer();
    navigation.navigate('Screen_B', {
      ItemName: 'Item from Screen A',
      ItemId: 12,
    });
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : '#00ff00'},
        ]}>
        <Text style={styles.text}>Go to screenB</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenB({navigation, route}) {
  const {ItemName, ItemId} = route.params;

  const onPressHandler = () => {
    //navigation.navigate('Screen_A');
    //navigation.goBack();
    navigation.setParams({ItemId: 14});
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : '#00ff00'},
        ]}>
        <Text style={styles.text}>Go Back To screenA</Text>
      </Pressable>
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>{ItemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
