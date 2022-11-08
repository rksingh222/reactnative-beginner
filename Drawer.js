//Installation Guide
//1.  In terminal inside project npm install @react-navigation/drawer
//2.  In terminal inside project npm install react-native-gesture-handler react-native-reanimated
//3. Cd iOS
//4. Pod install
//5. import 'react-native-gesture-handler';
//6. import { createDrawerNavigator } from '@react-navigation/drawer'
//7. const Drawer = createDrawerNavigator();
//8. I got this error after this
//9. Failed to initialize react-native-reanimated library, make sure you followed installation steps here
//10. I found some article to add 
//11. In babel.config.js add this after the preset comma  plugins: ['react-native-reanimated/plugin']
//12.  npm start -- --reset-cache
//13. It started working 
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Screen_A" component={ScreenA} />
        <Drawer.Screen name="Screen_B" component={ScreenB} />
      </Drawer.Navigator>
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



