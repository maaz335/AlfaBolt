import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface TextFieldProps {
  title: string;
  validationType?: 'email' | 'password' | 'name' | 'phone' | 'username';
  secureTextEntry?: boolean;
}

const TextField = ({
  title,
  validationType,
  secureTextEntry = false,
}: TextFieldProps) => {
  const [value, setValue] = useState('');
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const [isValid, setIsValid] = useState(true);

  const validateInput = (text: string) => {
    let valid = true;

    if (validationType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailRegex.test(text);
    } else if (validationType === 'password') {
      valid = text.length >= 6;
    } else if (validationType === 'name') {
      valid = text.trim().length > 3;
    } else if (validationType === 'phone') {
      const phoneRegex = /^\d{11}$/;
      valid = phoneRegex.test(text);
    } else if (validationType === 'username') {
      const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
      valid = usernameRegex.test(text);
    }
    setIsValid(valid);
  };

  const handleChange = (text: string) => {
    setValue(text);
    validateInput(text);
  };

  return (
    <View
      style={[styles.inputWrapper, { borderColor: isValid ? 'gray' : 'red' }]}
    >
      <TextInput
        style={styles.loginTextInput}
        placeholder={title}
        value={value}
        secureTextEntry={isSecure}
        onChangeText={handleChange}
        placeholderTextColor="gray"
      />
      {/* Suffix Icon */}
      {validationType === 'password' ? (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Icon
            name={isSecure ? 'visibility-off' : 'visibility'}
            size={20}
            color="gray"
            style={styles.suffixIcon}
          />
        </TouchableOpacity>
      ) : (
        value.length > 0 && (
          <Icon
            name={isValid ? 'check-circle' : 'error'}
            size={20}
            color={isValid ? 'green' : 'red'}
            style={styles.suffixIcon}
          />
        )
      )}
    </View>
  );
};

export default TextField;
