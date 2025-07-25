import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type OptionsProps = {
  title: string;
  backButton?: boolean;
  headerShown?: boolean;
  theme?: string;
  toggleTheme?: () => void;
};

const Options = ({
  title,
  backButton = true,
  headerShown = true,
  theme = 'light',
  toggleTheme = () => {},
}: OptionsProps): NativeStackNavigationOptions => {
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : 'dodgerblue',
  };

  const headerTintColor = theme === 'dark' ? 'white' : 'white';

  return {
    title,
    headerTitleAlign: 'center',
    headerStyle,
    headerTintColor,
    headerBackVisible: backButton,
    headerShown: headerShown,
    headerLeft: (props) => {
      // Show default back button when available
      if (props.canGoBack && backButton) {
        return props.canGoBack;
      }
      return null;
    },
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <MaterialIcons
          name={theme === 'dark' ? 'wb-sunny' : 'nights-stay'}
          size={24}
          color={headerTintColor}
        />
      </TouchableOpacity>
    ),
  };
};

export default Options;