import React, { useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Button, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';

function App() {
  const [number, setNumber] = useState('');

  function alert(_arg0: string): void {
    throw new Error('Function not implemented.');
  }

  function onChangeNumber(text: string): void {
    setNumber(text);
  }

  return (
   <View style={styles.container}>
    <Text>Hello World!</Text>
    <ActivityIndicator />
    <Text>Loading...</Text>
<Button
  onPress={() => alert('Button Pressed!')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Image
        style={styles.tinylogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Pressable onPress={() => alert('Pressable Pressed!')}>
  <Text>I'm pressable!</Text>
</Pressable>
<TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity Pressed!')}>
          <Text>Press Here</Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  tinylogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
export default App;
