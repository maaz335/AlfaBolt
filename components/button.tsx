import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  navigationTitle: string;
  navigation: {
    navigate: (screen: string) => void;
  };
  pressableStyle: any;
  textStyle: any;
  onPress?: () => void;
  disabled?: boolean;
};

const Button = ({
  title,
  navigationTitle,
  navigation,
  pressableStyle,
  textStyle,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressableStyle,
        disabled && styles.disabledButton,
        pressed && !disabled && styles.pressedButton,
      ]}
      onPress={() => {
        if (disabled) return;

        if (typeof onPress === 'function') {
          onPress();
        }
        if (navigationTitle) {
          navigation.navigate(navigationTitle);
        }
      }}
      disabled={disabled}
    >
      <Text style={[textStyle, disabled && styles.disabledText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    opacity: 0.6,
    backgroundColor: '#cccccc', // You can adjust this color
  },
  pressedButton: {
    opacity: 0.8,
  },
  disabledText: {
    color: '#666666', // You can adjust this color
  },
});

export default Button;
