//App.JS file

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import screenA from './ScreenA';
import screenB from './ScreenB';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen
          name="Screen_A"
          component={screenA}
          //options={{header: () => null}}
        />
        <Stack.Screen name="Screen_B" component={screenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
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

export default App;


//ScreenA.JS file

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function screenA({navigation}) {
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

//ScreenB.JS file

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function screenB({navigation}) {
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

