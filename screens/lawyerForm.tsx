import React, { useState } from 'react';
import { View, Text, TextInput, } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../components/styles';

export default function LawyerFormScreen() {
  const [lawyerType, setLawyerType] = useState('Civil Lawyer');
  const [court, setCourt] = useState('Federal Shariat Court');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Which type of lawyer you need?</Text>
      <RadioButton.Group onValueChange={setLawyerType} value={lawyerType}>
        {['Civil Lawyer', 'Criminal Lawyer', 'Tax Lawyer', 'Corporate Lawyer', 'Banking Lawyer'].map((type) => (
          <View key={type} style={styles.radioRow}>
            <RadioButton value={type} />
            <Text>{type}</Text>
          </View>
        ))}
      </RadioButton.Group>

      <Text style={styles.heading}>Which location's lawyer do you need?</Text>
      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Text style={styles.heading}>What level of experience should the lawyer have?</Text>
      <TextInput
        placeholder="Enter experience level"
        value={experience}
        onChangeText={setExperience}
        style={styles.input}
      />

      <Text style={styles.heading}>If litigation is already pending, in which court is it ongoing?</Text>
      <RadioButton.Group onValueChange={setCourt} value={court}>
        {['Federal Shariat Court', 'High Court', 'Session Court','Civil Court'].map((type) => (
          <View key={type} style={styles.radioRow}>
            <RadioButton value={type} />
            <Text>{type}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
}


