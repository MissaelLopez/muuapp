import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={props.onPress}>
      <Text style={styles.textPrimaryButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
