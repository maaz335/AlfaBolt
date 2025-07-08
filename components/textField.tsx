import styles from "../screens/styles";
import { TextInput } from "react-native";

interface TextFieldProps {
    title: string;
}

const TextField = ({ title }: TextFieldProps) => {
    return (
        <TextInput style={styles.loginTextInput} placeholder={title} placeholderTextColor="black" />
    );
};

export default TextField;