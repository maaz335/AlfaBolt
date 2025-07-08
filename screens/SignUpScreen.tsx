import { Text, View, Image } from 'react-native';
import styles from './styles';
import myImage from '../assets/login.png';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/button';
import TextField from '../components/textField';
import TouchableOpacityComponent from '../components/touchableOpacity';

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
    <View style={styles.mainView}>
      <Image style={styles.loginImage} source={myImage} />
      <Text style={styles.buttonText}>Create Account</Text>
      <TextField title="Enter Name" />
      <TextField title="Enter Username" />
      <TextField title="Enter Phone" />
      <TextField title="Enter Email" />
      <TextField title="Enter Password" />
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
  );
}
