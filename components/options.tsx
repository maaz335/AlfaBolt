import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type OptionsProps = {
  title: string;
  backButton?: boolean;
};

const Options = ({
  title,
  backButton = true,
}: OptionsProps): NativeStackNavigationOptions => {
  return {
    title,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: 'dodgerblue' },
    headerTintColor: 'white',
    headerBackVisible: backButton,
  };
};

export default Options;
