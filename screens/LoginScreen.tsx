import { Image, Text, TextInput, TouchableOpacity, Pressable, View } from "react-native";
import styles from "./styles";
import myImage from '../assets/login.png';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type LoginScreenNavigation = StackNavigationProp<RootStackParamList, "LoginScreen">;


export default function LoginScreen({navigation}:{navigation: LoginScreenNavigation}) {
    return(
        <View style={styles.mainView}>
        <Image style={styles.loginImage} source={myImage}/>      
        <Text style={styles.buttonText}>Welcome Back</Text>  
        <TextInput style={styles.loginTextInput} placeholder="Enter Email" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.loginTextInput} placeholder="Enter Password" placeholderTextColor="black"></TextInput>
        <View style={styles.loginTouchableView}>
        <TouchableOpacity style={styles.loginTouchable} onPress={()=>navigation.navigate("SignUpScreen")}><Text style={styles.loginTouchableText}>Already have an account?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginTouchable}><Text style={styles.loginTouchableText} onPress={()=>navigation.navigate("ForgetPassword")}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <View style={styles.loginScreenButtonView}><Pressable style={styles.signUpButtonPressable} onPress={()=>navigation.navigate("UserDashBoardScreen")}><Text style={styles.quoteText}>Login</Text></Pressable></View>
        </View>
    );
}