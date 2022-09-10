import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRanch } from "../../store/slices/ranchs";
import { deleteRanch, getUserById } from "../api";
import CustomAlert from "./CustomAlert";

const RanchDetail = (props) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ranch = props.route.params.ranch;

  const updateRanchStore = async () => {
    const { data, status } = await getUserById(id, token);
    if (status === 200) {
      dispatch(setRanch(data.ranchs));
    }
  };

  const handlePress = async () => {
    const { status } = await deleteRanch(id, ranch._id, token);
    if (status === 200) {
      updateRanchStore();
      CustomAlert(
        "MuuApp",
        "Rancho Eliminado",
        props.navigation.navigate("Finca")
      );
    }
  };

  return (
    <View>
      <Text>{ranch.name}</Text>
      <Button onPress={handlePress} title="Eliminar" />
    </View>
  );
};

export default RanchDetail;
