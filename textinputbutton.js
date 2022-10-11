import React, {useState} from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
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
      <Button
        title={submitted ? 'clear' : 'submit'}
        color={'#ff00ff'}
        onPress={onPressHandler}
      />
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
});

export default App;
