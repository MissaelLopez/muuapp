import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { ranchsView as styles } from "../../components/Styles";
import RanchCard from "../../components/Card";

const Ranchs = ({ navigation }) => {
  const { ranchs } = useSelector((state) => state.ranchs);
  return (
    <ScrollView style={styles.container}>
      {ranchs && ranchs.map((ranch) => (
        <RanchCard key={ranch._id} ranch={ranch} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default Ranchs;
