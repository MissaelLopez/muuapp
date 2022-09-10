import { TextInput } from "react-native";
import { styles } from "./Styles";

const Input = (props) => {
  return <TextInput {...props} style={props.style || styles.input} />;
};

export default Input;
