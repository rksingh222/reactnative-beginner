
import React, {useState} from 'react';
import {
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);
  const [multiple, setMultiple] = useState(0);
  const onClickHandler = () => {
    setName('My new name is jake');
    setSession({number: 7, title: 'xyz'});
    setCurrent(false);
    setMultiple(multiple + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with {name}</Text>
      <Text style={styles.text}>
        {session.number} and {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Text style={styles.text}>{multiple * 5}</Text>
      <Text style={styles.text}>you clicked {multiple} times</Text>
      <Button title="youtube" onPress={onClickHandler} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>touch here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#00ff00',
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
  },
  buttontext: {
    color: '#ffffff',
  },
});
export default App;

