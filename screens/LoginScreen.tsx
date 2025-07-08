import { Image, Text, View } from "react-native";
import styles from "./styles";
import myImage from '../assets/login.png';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import TextField from "../components/textField";
import TouchableOpacityComponent from "../components/touchableOpacity";
import Button from "../components/button";

type LoginScreenNavigation = StackNavigationProp<RootStackParamList, "LoginScreen">;


export default function LoginScreen({navigation}:{navigation: LoginScreenNavigation}) {
    return(
        <View style={styles.mainView}>
        <Image style={styles.loginImage} source={myImage}/>      
        <Text style={styles.buttonText}>Welcome Back</Text>  
        <TextField title="Enter Email" />
        <TextField title="Enter Password" />
        <View style={styles.loginTouchableView}>
        <TouchableOpacityComponent navigation={navigation} navigationTitle="SignUpScreen" title="Don't have an Account?"/>
        <TouchableOpacityComponent navigation={navigation} navigationTitle="ForgetPassword" title="Forget Password?"/>
        </View>
        <View style={styles.loginScreenButtonView}><Button title="Login" navigation={navigation} navigationTitle="UserDashBoardScreen" pressableStyle={styles.signUpButtonPressable} textStyle={styles.quoteText}/></View>
        </View>
    );
}