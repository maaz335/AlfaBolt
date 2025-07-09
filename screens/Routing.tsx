import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import ForgetPassword from './ForgetPasswordScreen';
import UserDashBoardScreen from './UserDashboard';

type RootStackParamList = {
  Home: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  ForgetPassword: undefined;
  UserDashBoardScreen: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
export type { RootStackParamList };
