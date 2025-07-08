import { Image, Text, View } from 'react-native';
import styles from './styles';
import myImage from '../assets/login.png';
import TextField from '../components/textField';
import Button from '../components/button';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type ForgetPasswordNavigation = StackNavigationProp<
  RootStackParamList,
  'ForgetPassword'
>;

export default function ForgetPassword({
  navigation,
}: {
  navigation: ForgetPasswordNavigation;
}) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.loginImage} source={myImage} />
      <Text style={styles.buttonText}>Reset your Password</Text>
      <TextField title="Enter Email" />
      <View style={styles.loginScreenButtonView}>
        <Button
          textStyle={styles.quoteText}
          navigation={navigation}
          title="Reset"
          pressableStyle={styles.signUpButtonPressable}
          navigationTitle="LoginScreen"
        />
      </View>
    </View>
  );
}
