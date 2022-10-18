import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const Mashbutton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      /*onLongPress={onPressHandler}
                  delayLongPress={200}
                  disabled={submitted}*/
      android_ripple={{color: '#686868'}}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
        styles.button,
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ff0000',
    textAlign: 'center',
  },
});

export default Mashbutton;
