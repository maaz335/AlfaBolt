import { Alert, Image, Text, View } from 'react-native';
import styles from '../components/styles';
import TextField from '../components/textField';
import Button from '../components/button';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import Images from '../components/images';

export default function ForgetPassword({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    } else if (!email.includes('@gmail.com')) {
      Alert.alert('Validation Error', 'Please enter a valid Gmail address.');
      return;
    } else {
      try {
        await auth().sendPasswordResetEmail(email);
        Alert.alert('Success', 'Password reset email sent successfully.');
        navigation.navigate('LoginScreen'); // Navigate to LoginScreen after reset
      } catch (error) {
        console.error('Reset password error:', error);
        Alert.alert('Error', 'Failed to send password reset email.');
      }
    }
  };
  return (
    <View style={styles.mainView}>
      <Image style={styles.loginImage} source={Images.Login} />
      <Text style={styles.buttonText}>Reset your Password</Text>
      <TextField
        title="Enter Email"
        validationType="email"
        secureTextEntry={false}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.loginScreenButtonView}>
        <Button
          textStyle={styles.quoteText}
          navigation={navigation}
          onPress={handleResetPassword}
          title="Reset"
          pressableStyle={styles.signUpButtonPressable}
          navigationTitle=""
        />
      </View>
    </View>
  );
}
