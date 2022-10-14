React Native Modal with inline styling 

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
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
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <View style={styles.body}>
      <Modal
        transparent
        visible={showWarning}
        animationType="fade"
        //animationType="slide"
        //works only on android
        //hardwareAccelerated
        onRequestClose={() => {
          setShowWarning(false);
        }}>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text
                style={{
                  fontSize: 24,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {showWarning ? 'true' : 'false'}Enter More than 3 characters
              </Text>
            </View>
            <Pressable
              style={styles.warning_button}
              onPress={() => {
                setShowWarning(false);
              }}>
              <Text style={styles.text}>ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    fontSize: 24,
    color: '#ff0000',
    textAlign: 'center',
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
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#00ffff',
    height: 50,
  },
});

export default App;

