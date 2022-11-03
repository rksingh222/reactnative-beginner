//Android react native vector icon
//1. Run this in terminal or iterm    ——  $ npm install --save react-native-vector-icons — done
//2. Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following: apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
//3. To sync the gradle go to android in terminal and ./gradlew clean
//4. npm run android

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#0ff',
          inativeBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 14},
        }}>
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
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
