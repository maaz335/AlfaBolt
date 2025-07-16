import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type CustomRadioProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const CustomRadio = ({ label, selected, onPress }: CustomRadioProps) => (
  <TouchableOpacity onPress={onPress} style={styles.radioRow}>
    <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
      {selected && <View style={styles.innerCircle} />}
    </View>
    <Text style={{ marginLeft: 10 }}>{label}</Text>
  </TouchableOpacity>
);
export default CustomRadio;
