import { Text, View, Image } from 'react-native';
import styles from '../components/styles';
import Button from '../components/button';
import Images from '../components/images';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.appLogoImage} source={Images.Logo} />
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
