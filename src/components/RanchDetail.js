import { View, Text, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRanch } from "../../store/slices/ranchs";
import { deleteRanch, getUserById } from "../api";
import CustomAlert from "./CustomAlert";
import { ranchRegisterStyles as styles } from "./Styles";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import DeleteButton from "./DeleteButton";

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
    <View style={styles.container}>
      <View style={styles.textInput}>
        <MaterialCommunityIcons
          name="card-bulleted-outline"
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.subtitule}>Datos Generales</Text>
      </View>
      <Image source={{ uri: ranch.picture, }} style={styles.ranchPicture} />
      <View style={styles.textInput}>
        <MaterialIcons name="house-siding" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule2}>Nombre de la finca: </Text>
        <Text style={styles.subtituleTh}>{ranch.name}</Text>
      </View>

      <View style={styles.textInput}>
        <MaterialCommunityIcons
          name="food-steak"
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.subtitule2}>Propósito: </Text>
        <Text style={styles.subtituleTh}>{ranch.purpose}</Text>
      </View>

      <View style={styles.textInput}>
        <Fontisto name="injection-syringe" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule2}>Producción: </Text>
        <Text style={styles.subtituleTh}>{ranch.production}</Text>
      </View>

      <View style={styles.textInput}>
        <MaterialIcons name="6-ft-apart" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule2}>Area: </Text>
        <Text style={styles.subtituleTh}>{ranch.areaspace}</Text>
      </View>

      <View style={styles.textInput}>
        <Entypo name="location" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule}>Ubicación</Text>
      </View>
      <View style={styles.textInput}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.subtitule2}>País: </Text>
        <Text style={styles.subtituleTh}>{ranch.country}</Text>
      </View>
      <View style={styles.textInput}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.subtitule2}>Estado: </Text>
        <Text style={styles.subtituleTh}>{ranch.state}</Text>
      </View>
      <View style={styles.textInput}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          style={styles.iconStyle}
        />
        <Text style={styles.subtitule2}>Municipio: </Text>
        <Text style={styles.subtituleTh}>{ranch.city}</Text>
      </View>

      <DeleteButton onPress={handlePress} text="Eliminar" />
    </View>
  );
};

export default RanchDetail;
