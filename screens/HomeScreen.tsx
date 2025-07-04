import {  Text, View, Pressable, Image } from "react-native";
import styles from "./styles";
import myImage from '../assets/app_logo.jpeg';
import { RootStackParamList } from "../App";
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen({navigation}: {navigation: HomeScreenNavigationProp}) {
  return (
    <View style={styles.mainView}>
    <Image
      style={styles.appLogoImage}
     source={myImage}
    />
    <Text style={styles.buttonText}>
      "Explore the expert lawyers with ease"</Text>
      <View style={styles.columnView}>
        <Pressable style={styles.loginButtonPressable} onPress={()=>navigation.navigate("LoginScreen")} ><Text style={styles.buttonText}>Login</Text></Pressable>
<Pressable style={styles.signUpButtonPressable} onPress={()=>navigation.navigate("SignUpScreen")}>
  <Text style={styles.quoteText}>Sign Up</Text>
</Pressable>      
</View>
   </View>
  );
}

