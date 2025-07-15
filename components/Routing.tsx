import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import UserDashBoardScreen from '../screens/UserDashboard';
import LawyerFormScreen from '../screens/lawyerForm';

type RootStackParamList = {
  Home: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  ForgetPassword: undefined;
  UserDashBoardScreen: undefined;
  LawyerForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen
          name="UserDashBoardScreen"
          component={UserDashBoardScreen}
        />
        <Stack.Screen name="LawyerForm" component={LawyerFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
export type { RootStackParamList };
