import React, { useState } from 'react';
import { Button, View, Modal } from 'react-native';
import styles from '../components/styles';
import TextField from '../components/textField';

export default function ModalScreen() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.mainView}>
      <TextField
        title="Enter Number 1"
        validationType="number"
        secureTextEntry={false}
        value={number1}
        onChangeText={setNumber1}
      />
      <TextField
        title="Enter Number 2"
        validationType="number"
        secureTextEntry={false}
        value={number2}
        onChangeText={setNumber2}
      />
      <Button title="Submit" onPress={() => setIsModalVisible(true)} />
      <Modal visible={isModalVisible}>
        <TextField
          title="Result"
          validationType="number"
          secureTextEntry={false}
          value={(parseFloat(number1) + parseFloat(number2)).toString()}
          onChangeText={() => {}}
        />
        <Button title="Close" onPress={() => setIsModalVisible(false)} />
      </Modal>
    </View>
  );
}
