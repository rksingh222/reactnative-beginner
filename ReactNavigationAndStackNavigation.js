/*


This whole process for Mac iOS phones development
Go to official website of reactnavigation
https://reactnavigation.org/docs/getting-started/

Inside the react native project directory in terminal iterm Mac Terminal /Mac default terminal
Step 1: npm install @react-navigation/native
After I got this o/p in my terminal
added 12 packages, and audited 1307 packages in 5s

Step 2: npm install react-native-screens react-native-safe-area-context
added 4 packages, and audited 1311 packages in 2s
Step3 : Stack Navigator package need to be installed
For that in official link
https://reactnavigation.org/docs/getting-started/
API Reference -> Navigators ->Stack
npm install @react-navigation/stack
O/p added 13 packages, and audited 1324 packages in 4s
Step4 : You also need to install react-native-gesture-handler.
npm install react-native-gesture-handler
O/p up to date, audited 1324 packages in 1s

Step 5: npx pod-install ios 
// if you are developing for Mac iOS Apps

*/

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const Stack = createStackNavigator();
function screenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View>
      <Text>Screen A</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go To screenB</Text>
      </Pressable>
    </View>
  );
}
function screenB() {
  return (
    <View>
      <Text>Screen B</Text>
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={screenA} />
        <Stack.Screen name="Screen_B" component={screenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
