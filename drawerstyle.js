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
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
          drawerPosition: 'left',
          overlayColor: 'transparent',
          drawerType: 'front',
          swipeEnabled: true,
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
        }}>
        <Drawer.Screen
          name="Screen_C"
          component={ScreenA}
          options={{
            title: 'ScreenA_title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: 'ScreenB_title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
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


import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    //navigation.navigate('Screen_B');
    //navigation.replace('Screen_B');
    //navigation.openDrawer();
    //navigation.closeDrawer();
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : '#00ff00'},
        ]}>
        <Text style={styles.text}>Open Drawer</Text>
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

