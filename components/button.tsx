import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  navigationTitle: string;
  navigation: {
    navigate: (screen: string) => void;
  };
  pressableStyle: any;
  textStyle: any;
};

const Button = ({
  title,
  navigationTitle,
  navigation,
  pressableStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <Pressable
      style={pressableStyle}
      onPress={() => navigation.navigate(navigationTitle)}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;
