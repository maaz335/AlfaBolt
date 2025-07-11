import {
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../components/styles';
import myImage from '../assets/login.png';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/button';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';
import { RootStackParamList } from '../components/Routing';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useState } from 'react';

type SignUpScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export default function SignUpScreen({
  navigation,
}: {
  navigation: SignUpScreenNavigation;
}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (!name) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    } else if (!username) {
      Alert.alert('Validation Error', 'Username is required.');
      return;
    } else if (!phone) {
      Alert.alert('Validation Error', 'Phone number is required.');
      return;
    } else if (phone.length !== 11) {
      Alert.alert(
        'Validation Error',
        'Phone number must be exactly 11 digits long.',
      );
      return;
    } else if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    } else if (!email.includes('@gmail.com')) {
      Alert.alert('Validation Error', 'Please enter a valid Gmail address.');
      return;
    } else if (!password) {
      Alert.alert('Validation Error', 'Password is required.');
      return;
    } else if (password.length < 6) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 6 characters long.',
      );
      return;
    } else if (!confirmPassword) {
      Alert.alert('Validation Error', 'Confirm Password is required.');
      return;
    } else if (confirmPassword.length < 6) {
      Alert.alert(
        'Validation Error',
        'Confirm Password must be at least 6 characters long.',
      );
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Password Error', 'Passwords do not match.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const userId = userCredential.user.uid;

      // Save additional info in Realtime Database
      await database().ref(`/users/${userId}`).set({
        name,
        username,
        phone,
        email,
        createdAt: new Date().toISOString(),
      });

      console.log('User created and saved in database!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing up:', error);
      const errorMessage =
        error && typeof error === 'object' && 'message' in error
          ? (error as { message?: string }).message
          : 'Something went wrong!';
      Alert.alert('Signup Error', errorMessage || 'Something went wrong!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.signUpScreenKeyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 20}
    >
      <ScrollView>
        <View style={styles.mainView}>
          <Image style={styles.loginImage} source={myImage} />
          <Text style={styles.buttonText}>Create Account</Text>
          <TextField
            title="Enter Name"
            validationType="name"
            secureTextEntry={false}
            onChangeText={setName}
            value={name}
          />
          <TextField
            title="Enter Username"
            validationType="username"
            secureTextEntry={false}
            onChangeText={setUsername}
            value={username}
          />
          <TextField
            title="Enter Phone"
            validationType="phone"
            secureTextEntry={false}
            onChangeText={setPhone}
            value={phone}
          />
          <TextField
            title="Enter Email"
            validationType="email"
            secureTextEntry={false}
            onChangeText={setEmail}
            value={email}
          />
          <TextField
            title="Enter Password"
            validationType="password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TextField
            title="Enter Confirm Password"
            validationType="password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />

          <View style={styles.loginTouchableView}>
            <TouchableOpacityComponent
              navigation={navigation}
              navigationTitle="LoginScreen"
              title="Already have an Account?"
            />
          </View>
          <View style={styles.loginScreenButtonView}>
            <Button
              title="Sign-Up"
              onPress={handleSignUp}
              navigation={navigation}
              navigationTitle=""
              pressableStyle={styles.signUpButtonPressable}
              textStyle={styles.quoteText}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
