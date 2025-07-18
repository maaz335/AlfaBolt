import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';

type TabOptionsProps = {
  title: ImageSourcePropType;
};

const TabOptions = ({ title }: TabOptionsProps): BottomTabNavigationOptions => {
  return {
    title: 'Section List',
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: 'dodgerblue' },
    headerTintColor: 'white',

    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Image
        source={title}
        style={{
          width: 20,
          height: 20,
          tintColor: focused ? '#2093ffff' : '#222',
        }}
      />
    ),
  };
};

export default TabOptions;
