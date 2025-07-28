import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import Icons from './icons';
import styles from './styles';

type RoutingTouchableOpacityProps = {
  onPress: (event: GestureResponderEvent) => void;
  theme: String;
};

const RoutingTouchableOpacity = ({
  onPress,
  theme,
}: RoutingTouchableOpacityProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.routingTouchableOpacityStyle}
    >
      <Icons theme={theme} />
    </TouchableOpacity>
  );
};

export default RoutingTouchableOpacity;
