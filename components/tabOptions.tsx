import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';

type TabOptionsProps = {
  title: string;
  image: ImageSourcePropType;
};

const TabOptions = ({
  title,
  image,
}: TabOptionsProps): BottomTabNavigationOptions => {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: 'dodgerblue' },
    headerTintColor: 'white',

    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Image
        source={image}
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
