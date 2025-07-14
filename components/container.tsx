import { Image, Text, View } from 'react-native';
import styles from './styles';

type ContainerProps = {
  title: string;
  image: any;
};

const Container = ({ title, image }: ContainerProps) => {
  return (
    <View style={styles.userDashBoardScreenView}>
      <Image style={styles.userDashBoardScreenImage} source={image} />
      <Text style={styles.userDashBoardScreenText}>{title}</Text>
    </View>
  );
};

export default Container;
