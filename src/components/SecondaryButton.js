import { TouchableOpacity, Text } from "react-native";
import { buttonsStyle as styles } from "./Styles";

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={props.onPress}>
      <Text style={styles.textSecondaryButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
