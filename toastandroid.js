React Native ToastAndroid

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      ToastAndroid.show(
        'Please enter more than three text',
        ToastAndroid.SHORT,
      );
      ToastAndroid.showWithGravity(
        'Please enter more than three text',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      ToastAndroid.showWithGravityAndOffset(
        'Please enter more than three text',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        200,
      );
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Enter Input</Text>
      <TextInput
        style={styles.box}
        placeholder="e.g Rahul"
        onChangeText={value => {
          setName(value);
        }}
        maxLength={10}
      />
      <Pressable
        onPress={onPressHandler}
        /*onLongPress={onPressHandler}
        delayLongPress={200}
        disabled={submitted}*/
        android_ripple={{color: '#686868'}}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'clear' : 'submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text2}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#ff0000',
  },
  text2: {
    fontSize: 20,
    color: '#686868',
  },
  box: {
    width: 200,
    height: 80,
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;

