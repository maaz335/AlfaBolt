import {
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../components/styles';
import myImage from '../assets/login.png';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/button';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';
import { RootStackParamList } from '../components/Routing';
import auth from '@react-native-firebase/auth';

type SignUpScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export default function SignUpScreen({
  navigation,
}: {
  navigation: SignUpScreenNavigation;
}) {

const handleSignUp = async () => {  
  try {
    // Example of creating a user with Firebase Authentication
    const email = 'mmaazahmad24@gmail.com'
    const password = '12345678'
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);  
    console.log('User account created & signed in!', userCredential);
  } catch (error) {
    console.error('Error signing up:', error);
  }
}
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
          />
          <TextField
            title="Enter Username"
            validationType="username"
            secureTextEntry={false}
          />
          <TextField
            title="Enter Phone"
            validationType="phone"
            secureTextEntry={false}
          />
          <TextField
            title="Enter Email"
            validationType="email"
            secureTextEntry={false}
          />
          <TextField
            title="Enter Password"
            validationType="password"
            secureTextEntry={true}
          />
          <TextField
            title="Enter Confirm Password"
            validationType="password"
            secureTextEntry={true}
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
              navigationTitle="Home"
              pressableStyle={styles.signUpButtonPressable}
              textStyle={styles.quoteText}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
