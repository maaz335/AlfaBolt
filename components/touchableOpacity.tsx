import { Text, TouchableOpacity } from "react-native";
import styles from "../screens/styles";

interface TouchableOpacityComponentProps {
    title: string;
    navigation: {
        navigate: (screen: string) => void;
    };
    navigationTitle:string;
}

const TouchableOpacityComponent = ({ title, navigation, navigationTitle }: TouchableOpacityComponentProps) => {
    return (
        <TouchableOpacity style={styles.loginTouchable} onPress={() => navigation.navigate(navigationTitle)}>
            <Text style={styles.loginTouchableText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default TouchableOpacityComponent;