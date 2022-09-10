import { useSelector } from "react-redux";
import { ScrollView, Text } from "react-native";
import { ranchsView as styles } from "../../components/Styles";
import RanchCard from "../../components/Card";

const Ranchs = ({ navigation }) => {
  const { ranchs } = useSelector((state) => state.ranchs);
  if (ranchs.length) {
    return (
      <ScrollView style={styles.container}>
        {ranchs &&
          ranchs.map((ranch) => (
            <RanchCard key={ranch._id} ranch={ranch} navigation={navigation} />
          ))}
      </ScrollView>
    );
  } else {
    return <Text>Comienza a registrar</Text>;
  }
};

export default Ranchs;
