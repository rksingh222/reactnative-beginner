//Applying custom fonts
/*
1. Inside assets folder create a font folder
2. Go to fonts.google.com
3. From search select dancing script and download family
4. Copy the fonts or ttf file to DancingScript
5. Create react-native.config.js 
6. Insert this code in the file
7.   module.exports = {
  assets: ['./assets/fonts']
}
8. Go to terminal in your project main director which is projectone
9. Hit in terminal npx react-native-asset
10. Run your app using npm run iOS
11. fontFamily: 'DancingScript-Regular',
12.  Name of the font downloaded from google fonts
13. 
*/

import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useState} from 'react';

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
        <Text style={styles.text}>Go to screenB</Text>
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

