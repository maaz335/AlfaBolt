import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import styles from "./styles";
import myImage from '../assets/login.png';
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

type SignUpScreenNavigation = StackNavigationProp<RootStackParamList, "SignUpScreen">;

export default function SignUpScreen({navigation}:{navigation: SignUpScreenNavigation}) {
      return(
        <View style={styles.mainView}>
        <Image style={styles.loginImage} source={myImage}/>      
        <Text style={styles.buttonText}>Create Account</Text>  
        <TextInput style={styles.loginTextInput} placeholder="Enter Name" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Username" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Phone" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Email" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Password" placeholderTextColor="black"></TextInput>
        <View style={styles.loginTouchableView}><TouchableOpacity style={styles.loginTouchable} onPress={()=>navigation.navigate("LoginScreen")}><Text style={styles.loginTouchableText}>Don't have an acoount?</Text></TouchableOpacity></View>
        <View style={styles.loginScreenButtonView}><Pressable style={styles.signUpButtonPressable}><Text style={styles.quoteText}>SignUp</Text></Pressable></View>
        </View>
    );
}