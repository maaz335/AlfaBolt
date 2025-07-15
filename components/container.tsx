import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type ContainerProps = {
  title: string;
  image: any;
  navigation: {
    navigate: (screen: string) => void;
  };
  navigationTitle: string;
};

const Container = ({
  title,
  image,
  navigation,
  navigationTitle,
}: ContainerProps) => {
  return (
    <View style={styles.userDashBoardScreenView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigationTitle);
        }}
      >
        <Image style={styles.userDashBoardScreenImage} source={image} />
        <Text style={styles.userDashBoardScreenText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Container;
