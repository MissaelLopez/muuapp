import { View, TextInput } from "react-native";
import { styles } from "./Styles";
import { MaterialIcons} from "@expo/vector-icons";

const InputForm = (props) => {
  return (
    <View style={styles.inputBoxCont}>
      <MaterialIcons name={props.name} size={24} style={styles.iconStyle} />

      <TextInput {...props} style={styles.inputBox} />
    </View>
  )
};

export default InputForm;
