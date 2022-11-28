/*
Global Custom Fonts 

Before this Custom Font.js should be done
1.Create a Globalstyle.js
In Globalstyle.js  write the below code upto the font family*/

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  CustomFont: {
    fontFamily: 'DancingScript-Regular',
  },
});

/*
Whereever you want to apply the font
I wanted to apply this custom global font in Screen A
First import it and please check this code how it 
Has applied Global Custom font*/

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useState} from 'react';

import Globalstyle from '../utils/Globalstyle.js';

export default function ScreenA({navigation, route}) {
  const Users = [
    {
      id: 1,
      name: 'User A',
    },
    {
      id: 2,
      name: 'User B',
    },
    {
      id: 3,
      name: 'User C',
    },
  ];

  const [name, setName] = useState('');
  const onPressHandler = () => {
    //navigation.navigate('Screen_B');
    //navigation.replace('Screen_B');
    //navigation.openDrawer();
    //navigation.closeDrawer();
    //navigation.toggleDrawer();
    for (let user of Users) {
      setName(user.name);
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#ddd' : '#00ff00'},
        ]}>
        <Text style={[Globalstyle.CustomFont, styles.text]}>Go to screenB</Text>
      </Pressable>
      <Text style={styles.text}>{name}</Text>
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
    fontFamily: 'DancingScript-Regular',
  },
});

