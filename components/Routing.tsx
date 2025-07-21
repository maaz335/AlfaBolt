import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import UserDashBoardScreen from '../screens/UserDashboard';
import LawyerFormScreen from '../screens/lawyerForm';
import Options from './options';
import FlatListScreen from '../screens/FlatList';
import SectionListScreen from '../screens/SectionList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SCREENS from './screen';
import Images from './images';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import TabOptions from './tabOptions';
import ModalScreen from '../screens/ModalScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.Home}>
        <Stack.Screen
          name={SCREENS.Home}
          component={HomeScreen}
          options={Options({ title: 'Finding a Lawyer' })}
        />
        <Stack.Screen
          name={SCREENS.SignUp}
          component={SignUpScreen}
          options={Options({ title: 'SignUp' })}
        />
        <Stack.Screen
          name={SCREENS.Login}
          component={LoginScreen}
          options={Options({ title: 'Login' })}
        />
        <Stack.Screen
          name={SCREENS.ForgetPassword}
          component={ForgetPassword}
          options={Options({ title: 'Forget Password' })}
        />
        <Stack.Screen
          name={SCREENS.UserDashBoard}
          component={TabNavigator}
          options={Options({
            title: 'Home',
            backButton: false,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={SCREENS.LawyerForm}
          component={LawyerFormScreen}
          options={Options({ title: 'Questionnaire' })}
        />
        <Stack.Screen
          name={SCREENS.FlatList}
          component={FlatListScreen}
          options={Options({ title: 'Flat List' })}
        />
        <Stack.Screen
          name={SCREENS.SectionList}
          component={SectionListScreen}
          options={Options({ title: 'Section List' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={SCREENS.UserDashBoard}>
      <Tab.Screen
        name={SCREENS.UserDashBoard}
        component={UserDashBoardScreen}
        options={TabOptions({
          title: "Home",
          image: Images.Home,
        })}
      />
      <Tab.Screen
        name={SCREENS.FlatList}
        component={FlatListScreen}
        options={TabOptions({
          title: "Flat List",
          image: Images.FlatList,
        })}
      />
      <Tab.Screen
        name={SCREENS.SectionList}
        component={SectionListScreen}
        options={TabOptions({
          title: "Section List",
          image: Images.SectionList,
        })}
      />
       <Tab.Screen
        name={SCREENS.Modal}
        component={ModalScreen}
        options={TabOptions({
          title: "Modal",
          image: Images.Profile,
        })}
      />
    </Tab.Navigator>
  );
};

export default Routing;
