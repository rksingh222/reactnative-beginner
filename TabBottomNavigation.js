//Go to official website of React Navigation
//https://reactnavigation.org/docs/tab-based-navigation/
//Step 1: In terminal inside project directory : npm install @react-navigation/bottom-tabs
//Step 2: import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Step 3: const Tab = createBottomTabNavigator();


//App.js

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    //navigation.navigate('Screen_A');
    navigation.goBack();
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

//ScreenA.js
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    //navigation.replace('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : '#00ff00'},
        ]}>
        <Text style={styles.text}>Go To screenB</Text>
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

//ScreenB.js

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    //navigation.navigate('Screen_A');
    navigation.goBack();
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



