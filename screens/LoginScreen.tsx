import { Alert, Image, Text, View } from 'react-native';
import styles from '../components/styles';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';
import Button from '../components/button';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Images from '../components/images';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    } else if (email && !email.includes('@gmail.com')) {
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
    }

    setIsLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const userId = userCredential.user.uid;

      // Optionally fetch user info from database
      const snapshot = await database().ref(`/users/${userId}`).once('value');
      snapshot.val();

      // Reset navigation stack to prevent going back to login
      navigation.reset({
        index: 0,
        routes: [{ name: 'UserDashBoard' }],
      });
    } catch (error: any) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed!';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      Alert.alert('Login Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.mainView}>
      <Image style={styles.loginImage} source={Images.Login} />
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
          navigationTitle="SignUp"
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
          title={isLoading ? 'Logging in...' : 'Login'}
          navigation={navigation}
          navigationTitle=""
          pressableStyle={styles.signUpButtonPressable}
          textStyle={styles.quoteText}
          onPress={handleLogin}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}
