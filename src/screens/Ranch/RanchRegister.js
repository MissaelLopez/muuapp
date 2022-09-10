import { useState } from "react";
import { firebase } from "../../../firebaseConfig";
import { View, Alert, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setRanch } from "../../../store/slices/ranchs";
import { getUserById, postAPI } from "../../api";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { ranchRegisterStyles as styles } from "../../components/Styles";
import CustomAlert from "../../components/CustomAlert";

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
      <Image
        source={{
          uri: ranch.picture,
        }}
        style={styles.ranchPicture}
      />
      <Button title="Seleccionar imagen" onPress={openImagePickerAsync} />
      <Input
        onChangeText={(name) => setRanchData({ ...ranch, name })}
        value={ranch.name}
        placeholder="Nombre"
        style={styles.input}
      />
      <View style={styles.row}>
        <SelectDropdown
          data={purpose}
          onSelect={(selectedItem) => {
            setRanchData({ ...ranch, purpose: selectedItem });
          }}
          defaultButtonText="Selecciona una opción"
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
        />
        <SelectDropdown
          data={production}
          onSelect={(selectedItem) => {
            setRanchData({ ...ranch, production: selectedItem });
          }}
          defaultButtonText="Selecciona una opción..."
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
        />
      </View>
      <View style={styles.row}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem) => {
            setRanchData({ ...ranch, country: selectedItem });
          }}
          defaultButtonText="Selecciona una opción..."
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
        />
        <SelectDropdown
          data={states}
          onSelect={(selectedItem) => {
            setRanchData({ ...ranch, state: selectedItem });
          }}
          defaultButtonText="Selecciona una opción..."
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
        />
      </View>
      <Input
        onChangeText={(city) => setRanchData({ ...ranch, city })}
        value={ranch.city}
        placeholder="Ciudad"
        style={styles.input}
      />
      <View style={styles.row}>
        <Input
          onChangeText={(areaSpace) => setRanchData({ ...ranch, areaSpace })}
          value={ranch.areaSpace}
          placeholder="Área de espacio en hectáreas"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <PrimaryButton text="Registrar" onPress={register} />
    </View>
  );
};

export default RanchRegister;
