import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { ranchsView as styles } from "../../components/Styles";
import RanchCard from "../../components/Ranch/RanchCard";

const Ranchs = ({ navigation }) => {
  const { ranchs } = useSelector((state) => state.ranchs);
  return (
    <View style={styles.container}>
      {ranchs.map((ranch) => (
        <RanchCard key={ranch._id} ranch={ranch} navigation={navigation} />
      ))}
    </View>
  );
};

export default Ranchs;
