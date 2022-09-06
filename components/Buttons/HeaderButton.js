import { Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { styles } from "./Styles";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={styles.headerButton} onPress={props.onPress}>
      <AntIcon name="pluscircle" size={24} color="#c79556" />
    </TouchableOpacity>
  );
};

export default HeaderButton;
