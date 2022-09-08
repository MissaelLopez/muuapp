import { View, Text, Button } from "react-native";
import { Alert } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { getAPI } from "../api";

const RanchDetail = (props) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ranch = props.route.params.ranch;

  const sendAlert = () => {
    return Alert.alert(
      "MuuApp",
      "La finca ha sido eliminada",
      [
        {
          text: "Aceptar",
          onPress: () => {
            dispatch(updateRanch(ranch));
            navigation.navigate("Finca");
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const handlePress = async () => {
    try {
      const { data, status } = await getAPI.delete(
        `/ranchs/${id}/${ranch._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        sendAlert();
      }
    } catch (error) {
      Alert.alert("Ha ocurrido un error al eliminar la finca");
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
