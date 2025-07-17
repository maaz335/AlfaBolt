import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import UserDashBoardScreen from '../screens/UserDashboard';
import LawyerFormScreen from '../screens/lawyerForm';
import Options from './options';
import FlatListScreen from '../screens/FlatList';
import SectionListScreen from '../screens/SectionList';

type RootStackParamList = {
  Home: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  ForgetPassword: undefined;
  UserDashBoardScreen: undefined;
  LawyerForm: undefined;
  FlatList: undefined;
  SectionList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={Options({ title: 'Finding a Lawyer' })}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={Options({ title: 'SignUp' })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={Options({ title: 'Login' })}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={Options({ title: 'Forget Password' })}
        />
        <Stack.Screen
          name="UserDashBoardScreen"
          component={UserDashBoardScreen}
          options={Options({ title: 'Home', backButton: false })}
        />
        <Stack.Screen
          name="LawyerForm"
          component={LawyerFormScreen}
          options={Options({ title: 'Questionnaire' })}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListScreen}
          options={Options({ title: 'Flat List' })}
        />
        <Stack.Screen
          name="SectionList"
          component={SectionListScreen}
          options={Options({ title: 'Section List' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
export type { RootStackParamList };
