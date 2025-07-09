import { Text, View, Image } from 'react-native';
import styles from '../components/styles';
import myImage from '../assets/app_logo.jpeg';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/button';
import { RootStackParamList } from '../components/Routing';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.appLogoImage} source={myImage} />
      <Text style={styles.buttonText}>
        "Explore the expert lawyers with ease"
      </Text>
      <View style={styles.columnView}>
        <Button
          title="Login"
          navigation={navigation}
          navigationTitle="LoginScreen"
          pressableStyle={styles.loginButtonPressable}
          textStyle={styles.buttonText}
        />
        <Button
          title="Sign-Up"
          navigation={navigation}
          navigationTitle="SignUpScreen"
          pressableStyle={styles.signUpButtonPressable}
          textStyle={styles.quoteText}
        />
      </View>
    </View>
  );
}
