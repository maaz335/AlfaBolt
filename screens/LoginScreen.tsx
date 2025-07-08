import { Image, Text, TextInput, TouchableOpacity, Pressable, View } from "react-native";
import styles from "./styles";
import myImage from '../assets/login.png';



export default function LoginScreen() {
    return(
        <View style={styles.mainView}>
        <Image style={styles.loginImage} source={myImage}/>      
        <Text style={styles.buttonText}>Welcome Back!</Text>  
        <TextInput style={styles.loginTextInput} placeholder="Enter Email" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Password" placeholderTextColor="black"></TextInput>
        <View style={styles.loginTouchableView}><TouchableOpacity style={styles.loginTouchable}><Text style={styles.loginTouchableText}>Forgot Password?</Text></TouchableOpacity></View>
        <View style={styles.loginScreenButtonView}><Pressable style={styles.signUpButtonPressable}><Text style={styles.quoteText}>Login</Text></Pressable></View>
        </View>
    );
}