import { View, Text, TouchableOpacity, Image } from "react-native";
import { cardStyles as styles } from "./Styles";
import AntIcon from "react-native-vector-icons/AntDesign";

const bgi = {
  uri: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000",
};

const RanchCard = ({ navigation, ranch }) => {
  const handlePress = () => {
    navigation.navigate("Detalle_Finca", { ranch: ranch, title: ranch.name });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.cardContent}>
        <Image source={bgi} style={styles.cardImage} />
        <Text>{ranch.name}</Text>
        <Text>{ranch.name}</Text>
      </View>
      {/* {props.ranch._id === "6303f95dc2f324fb76cbb991" && (
        <Text style={styles.isSelected}>
          <AntIcon name="checkcircle" size={24} color="#c79556" />
        </Text>
      )} */}
    </TouchableOpacity>
  );
};

export default RanchCard;
