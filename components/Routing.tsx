import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import UserDashBoardScreen from '../screens/UserDashboard';
import LawyerFormScreen from '../screens/lawyerForm';
import Options from './options';
import FlatListScreen from '../screens/FlatList';
import SectionListScreen from '../screens/SectionList';
import SCREENS from './screen';
import Images from './images';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import TabOptions from './tabOptions';
import ModalScreen from '../screens/ModalScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import styles from './styles';
import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
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
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SCREENS.UserDashBoard}
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={SCREENS.LawyerForm}
      component={LawyerFormScreen}
      options={Options({ title: 'Questionnaire' })}
    />
    <Stack.Screen
      name={SCREENS.News}
      component={NewsScreen}
      options={Options({ title: 'News' })}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator initialRouteName={SCREENS.UserDashBoard}>
    <Tab.Screen
      name={SCREENS.UserDashBoard}
      component={UserDashBoardScreen}
      options={TabOptions({
        title: 'Home',
        image: Images.Home,
      })}
    />
    <Tab.Screen
      name={SCREENS.FlatList}
      component={FlatListScreen}
      options={TabOptions({
        title: 'Flat List',
        image: Images.FlatList,
      })}
    />
    <Tab.Screen
      name={SCREENS.SectionList}
      component={SectionListScreen}
      options={TabOptions({
        title: 'Section List',
        image: Images.SectionList,
      })}
    />
    <Tab.Screen
      name={SCREENS.Modal}
      component={ModalScreen}
      options={TabOptions({
        title: 'Modal',
        image: Images.Profile,
      })}
    />
  </Tab.Navigator>
);

const Routing = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (authUser: FirebaseAuthTypes.User | null) => {
        setUser(authUser);
        if (initializing) setInitializing(false);
      },
    );
    return subscriber;
  }, [initializing]);

  if (initializing) {
    return (
      <View style={styles.initializingView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routing;
