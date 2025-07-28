import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IconsProps = {
  theme: String;
};

const Icons = ({ theme }: IconsProps) => {
  return (
    <MaterialIcons
      name={theme === 'dark' ? 'sunny' : 'moon'}
      size={24}
      color={theme === 'dark' ? 'white' : 'black'}
    />
  );
};

export default Icons;
