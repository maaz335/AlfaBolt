import {
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import myImage from '../assets/login.png';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/button';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';
import { RootStackParamList } from './Routing';

type SignUpScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export default function SignUpScreen({
  navigation,
}: {
  navigation: SignUpScreenNavigation;
}) {
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
