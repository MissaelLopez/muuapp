import { TouchableOpacity, Text } from "react-native";
import { buttonsStyle as styles } from "./Styles";

const DeleteButton = (props) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={props.onPress}>
      <Text style={styles.textPrimaryButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
