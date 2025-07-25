import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type TabOptionsProps = {
  title: string;
  image: ImageSourcePropType;
  theme: string;
  toggleTheme: () => void;
};

const TabOptions = ({
  title,
  image,
  theme,
  toggleTheme,
}: TabOptionsProps): BottomTabNavigationOptions => {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: theme === 'dark' ? '#1a1a1a' : 'dodgerblue',
    },
    headerTintColor: theme === 'dark' ? 'white' : 'white',
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <MaterialIcons
          name={theme === 'dark' ? 'wb-sunny' : 'nights-stay'}
          size={24}
          color={theme === 'dark' ? 'white' : 'white'}
        />
      </TouchableOpacity>
    ),
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Image
        source={image}
        style={{
          width: 20,
          height: 20,
          tintColor: focused ? '#2093ffff' : theme === 'dark' ? '#aaa' : '#222',
        }}
      />
    ),
    tabBarStyle: {
      backgroundColor: theme === 'dark' ? '#1a1a1a' : 'white',
    },
    tabBarActiveTintColor: '#2093ffff',
    tabBarInactiveTintColor: theme === 'dark' ? '#aaa' : '#222',
  };
};

export default TabOptions;