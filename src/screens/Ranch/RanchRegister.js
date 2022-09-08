import { useState } from "react";
import { View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateRanch } from "../../../store/slices/ranchs";
import SelectDropdown from "react-native-select-dropdown";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { postAPI } from "../../api";
import { styles } from "../../components/Styles";

const RanchRegister = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
    production: "Natural",
    areaSpace: "",
    user: id,
  });
  const purpose = ["Carne", "Leche", "Doble Propósito"];

  const sendAlert = () => {
    return Alert.alert(
      "MuuApp",
      "Tu registro ha sido exitoso",
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
        sendAlert();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <Input
        onChangeText={(name) => setRanchData({ ...ranch, name })}
        value={ranch.name}
        placeholder="Nombre"
      />
      <SelectDropdown
        data={purpose}
        onSelect={(selectedItem) => {
          setRanchData({ ...ranch, purpose: selectedItem });
        }}
        defaultButtonText="Selecciona una opción"
        buttonStyle={styles.input}
      />
      <Input
        onChangeText={(country) => setRanchData({ ...ranch, country })}
        value={ranch.country}
        placeholder="País"
      />
      <Input
        onChangeText={(state) => setRanchData({ ...ranch, state })}
        value={ranch.state}
        placeholder="Estado"
      />
      <Input
        onChangeText={(city) => setRanchData({ ...ranch, city })}
        value={ranch.city}
        placeholder="Ciudad"
      />
      <Input
        onChangeText={(areaSpace) => setRanchData({ ...ranch, areaSpace })}
        value={ranch.areaSpace}
        placeholder="Área"
      />
      <PrimaryButton text="Registrar" onPress={register} />
    </View>
  );
};

export default RanchRegister;
