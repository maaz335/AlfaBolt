import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../components/styles';
import CustomRadio from '../components/customRadio';
import LawyerFormTextField from '../components/lawyerFormTextField';
import Button from '../components/button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../components/Routing';

type lawyerFormNavigatipm = StackNavigationProp<
  RootStackParamList,
  'LawyerForm'
>;

export default function LawyerFormScreen({navigation}:{navigation: lawyerFormNavigatipm}) {
  const [lawyerType, setLawyerType] = useState('Civil Lawyer');
  const [court, setCourt] = useState('Federal Shariat Court');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Which type of lawyer you need?</Text>
      {[
        'Civil Lawyer',
        'Criminal Lawyer',
        'Tax Lawyer',
        'Corporate Lawyer',
        'Banking Lawyer',
      ].map(type => (
        <CustomRadio
          key={type}
          label={type}
          selected={lawyerType === type}
          onPress={() => setLawyerType(type)}
        />
      ))}

      <Text style={styles.heading}>Which location's lawyer do you need?</Text>
       <LawyerFormTextField
        title="Enter your location"
        validationType="name"
        secureTextEntry={false}
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.heading}>
        What level of experience should the lawyer have?
      </Text>
       <LawyerFormTextField
        title="Enter experience level"
        validationType="name"
        secureTextEntry={false}
        value={experience}
        onChangeText={setExperience}
      />

      <Text style={styles.heading}>
        If litigation is already pending, in which court is it ongoing?
      </Text>
      {[
        'Federal Shariat Court',
        'High Court',
        'Session Court',
        'Civil Court',
      ].map(type => (
        <CustomRadio
          key={type}
          label={type}
          selected={court === type}
          onPress={() => setCourt(type)}
        />
      ))}
      <Button title='Search Relevant Lawyer' navigation={navigation} navigationTitle='' pressableStyle={styles.signUpButtonPressable} textStyle={styles.quoteText}/>
    </View>
  );
}
