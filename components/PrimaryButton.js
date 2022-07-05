import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./Styles";

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.textButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
