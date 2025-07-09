import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  navigationTitle: string;
  navigation: {
    navigate: (screen: string) => void;
  };
  pressableStyle: any;
  textStyle: any;
  onPress?: () => void;
};

const Button = ({
  title,
  navigationTitle,
  navigation,
  pressableStyle,
  textStyle,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      style={pressableStyle}
      onPress={() => {
        if (typeof onPress === 'function') {
          onPress();
        }
        navigation.navigate(navigationTitle);
      }}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;
