import { useState } from "react";
import {
  View,
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRanch } from "../../../store/slices/ranchs";
import { getUserById, postAPI } from "../../api";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
// import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { ranchRegisterStyles as styles } from "../../components/Styles";
import CustomAlert from "../../components/CustomAlert";
import InputForm from "../../components/InputForm";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  Fontisto
} from "@expo/vector-icons";

const RanchRegister = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [ranch, setRanchData] = useState({
    name: "",
    picture:
      "https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2017-03/finca_productiva.jpg",
    purpose: "",
    country: "",
    state: "",
    city: "",
    lat: "-19.2345",
    lng: "19.293",
    production: "",
    areaSpace: "",
    user: id,
  });
  const purpose = ["Carne", "Leche", "Doble Propósito"];
  const production = ["Natural", "Inseminación"];
  const countries = ["México"];
  const states = ["Chiapas", "Oaxaca", "Puebla", "Sonora"];

  const updateRanchStore = async () => {
    const { data, status } = await getUserById(id, token);
    if (status === 200) {
      dispatch(setRanch(data.ranchs));
    }
  };

  const openImagePickerAsync = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      CustomAlert("MuuApp", "Se requiere permisos");
      return;
    }

    const picker = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (picker.cancelled === true) {
      return;
    }

    setRanchData({ ...ranch, picture: picker.uri });
  };

  // TODO: Recuperar url al subir la imagen a Firbase
  /* const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(ranch.picture);
    const blob = await response.blob();
    const filename = `${ranch.name}_img`;
    const ref = firebase.storage().ref().child(filename).put(blob);
    const url = (await ref).ref.getDownloadURL();

    setUploading(false);
    return url;
  }; */

  const register = async () => {
    for (const [key, value] of Object.entries(ranch)) {
      if (ranch[key] === "") {
        console.log(`El campo ${key} no puede estar vacio`);
        return false;
      }
    }

    try {
      const { data, status } = await postAPI.post("/ranchs", ranch, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 201) {
        updateRanchStore();
        CustomAlert(
          "MuuApp",
          "Tu registro ha sido exitoso",
          navigation.navigate("Finca")
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitule}>Ingresa los datos de tu Finca</Text>

      <Image
        source={{
          uri: ranch.picture,
        }}
        style={styles.ranchPicture}
      />
      <TouchableOpacity style={styles.buttont} onPress={openImagePickerAsync}>
        <Text style={styles.textButton}>Seleccionar imagen</Text>
      </TouchableOpacity>

      <InputForm
        onChangeText={(name) => setRanchData({ ...ranch, name })}
        value={ranch.name}
        name="house-siding"
        placeholder="Nombre de la finca"
      />

      <View
        style={{
          flexDirection: "row",
          width: "47.6%",
          justifyContent: "center",
        }}
      >
        <View style={styles.inputBoxCont}>
          <MaterialCommunityIcons
            name="food-steak"
            size={24}
            style={styles.iconStyle}
          />
          <SelectDropdown
            data={purpose}
            onSelect={(selectedItem) => {
              setRanchData({ ...ranch, purpose: selectedItem });
            }}
            defaultButtonText="Propósito..."
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
          />
        </View>

        <View style={styles.inputBoxCont}>
          <Fontisto name="injection-syringe" size={24} style={styles.iconStyle} />
          <SelectDropdown
            data={production}
            onSelect={(selectedItem) => {
              setRanchData({ ...ranch, production: selectedItem });
            }}
            defaultButtonText="Producción..."
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
          />
        </View>
      </View>

      <InputForm
        onChangeText={(areaSpace) => setRanchData({ ...ranch, areaSpace })}
        value={ranch.areaSpace}
        name="6-ft-apart"
        placeholder="Área de espacio en hectáreas"
      />
      <View style={styles.textInput}>
        <Entypo name="location" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule2}>Ubicación</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "47.6%",
          justifyContent: "center",
        }}
      >
        <View style={styles.inputBoxCont}>
          <MaterialIcons name="keyboard-arrow-right" size={24} style={styles.iconStyle} />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem) => {
              setRanchData({ ...ranch, country: selectedItem });
            }}
            defaultButtonText="País..."
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
          />
        </View>
        <View style={styles.inputBoxCont}>
          <MaterialIcons name="keyboard-arrow-right" size={24} style={styles.iconStyle} />
          <SelectDropdown
            data={states}
            onSelect={(selectedItem) => {
              setRanchData({ ...ranch, state: selectedItem });
            }}
            defaultButtonText="Estado..."
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
          />
        </View>
      </View>
      <InputForm
        onChangeText={(city) => setRanchData({ ...ranch, city })}
        value={ranch.city}
        name="keyboard-arrow-right"
        placeholder="Municipio"
      />

      <PrimaryButton text="Registrar Finca" onPress={register} />
    </View>
  );
};

export default RanchRegister;
