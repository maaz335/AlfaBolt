import { Alert, Image, Text, View } from 'react-native';
import styles from '../components/styles';
import myImage from '../assets/login.png';
import { StackNavigationProp } from '@react-navigation/stack';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';
import Button from '../components/button';
import { RootStackParamList } from '../components/Routing';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

type LoginScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export default function LoginScreen({
  navigation,
}: {
  navigation: LoginScreenNavigation;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email are required.');
      return;
    } else if (email && !email.includes('@gmail.com')) {
      Alert.alert('Validation Error', 'Please enter a valid Gmail address.');
      return;
    } else if (!password) {
      Alert.alert('Validation Error', 'Password are required.');
      return;
    } else if (password.length < 6) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 6 characters long.',
      );
      return;
    } else {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log('User logged in:', userCredential);

        const userId = userCredential.user.uid;
        console.log('User ID:', userId);
        // Optionally fetch user info from database
        const snapshot = await database().ref(`/users/${userId}`).once('value');
        const userInfo = snapshot.val();

        console.log('User logged in:', userInfo);
        navigation.navigate('UserDashBoardScreen'); // or wherever you want
        return;
      } catch (error) {
        console.error('Login error:', error);
        const errorMessage =
          error && typeof error === 'object' && 'message' in error
            ? (error as { message?: string }).message
            : 'Login failed!';
        Alert.alert('Login Error', errorMessage || 'Something went wrong!');
        return;
      }
    }
  };
  return (
    <View style={styles.mainView}>
      <Image style={styles.loginImage} source={myImage} />
      <Text style={styles.buttonText}>Welcome Back</Text>
      <TextField
        title="Enter Email"
        validationType="email"
        secureTextEntry={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        title="Enter Password"
        validationType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.loginTouchableView}>
        <TouchableOpacityComponent
          navigation={navigation}
          navigationTitle="SignUpScreen"
          title="Don't have an Account?"
        />
        <TouchableOpacityComponent
          navigation={navigation}
          navigationTitle="ForgetPassword"
          title="Forget Password?"
        />
      </View>
      <View style={styles.loginScreenButtonView}>
        <Button
          title="Login"
          navigation={navigation}
          navigationTitle=""
          pressableStyle={styles.signUpButtonPressable}
          textStyle={styles.quoteText}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}
