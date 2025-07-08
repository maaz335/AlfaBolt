import { Image, Text, TextInput, Pressable, View } from "react-native";
import styles from "./styles";
import myImage from '../assets/login.png';

export default function ForgetPassword() {
    return(
        <View style={styles.mainView}>
        <Image style={styles.loginImage} source={myImage}/>      
        <Text style={styles.buttonText}>Reset your Password</Text>  
        <TextInput style={styles.loginTextInput} placeholder="Enter Email" placeholderTextColor="black"></TextInput>
        <View style={styles.loginScreenButtonView}><Pressable style={styles.signUpButtonPressable}><Text style={styles.quoteText}>ForgetPassword</Text></Pressable></View>
        </View>
    );
}