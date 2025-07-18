import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type OptionsProps = {
  title: string;
  backButton?: boolean;
  headerShown?: boolean;
};

const Options = ({
  title,
  backButton = true,
  headerShown = true,
}: OptionsProps): NativeStackNavigationOptions => {
  return {
    title,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: 'dodgerblue' },
    headerTintColor: 'white',
    headerBackVisible: backButton,
    headerShown: headerShown,
  };
};

export default Options;
