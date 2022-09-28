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
// import { setRanch } from "../../../store/slices/ranchs";
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
  Fontisto,
  SimpleLineIcons, Feather,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const CowRegister = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [cow, setCowData] = useState({
    nombre: "",
    picture:
      "https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2017-03/finca_productiva.jpg",
    genero: "",
    raza: "",
    utp: "",
    fechaNacimiento: "",
    etapa: "",
    peso: {
      nacer: "",
      destetar: "",
      unAnio: "",
    },
    padres: {
      padre: "",
      madre: "",
    },
    ranch: "ss",
  });
  const gender = ["Macho", "Hembra"];
  const phase = ["Destetado", "Novillo", "Ternero", "Toro", "Vaca"];
  const breed = ["Machito F1", "Suizo", "Brahman", "Holandes"];

  // const production = ["Natural", "Inseminación"];

  // const updatecowStore = async () => {
  //   const { data, status } = await getUserById(id, token);
  //   if (status === 200) {
  //     dispatch(setCow(data.cows));
  //   }
  // };

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

    setCowData({ ...cow, picture: picker.uri });
  };

  const register = async () => {
    /* /* for (const [key, value] of Object.entries(cow)) {
      if (cow[key] === "") {
        console.log(`El campo ${key} no puede estar vacio`);
        return false;
      }
    } */ */
    console.log(cow);

    /* try {
      const { data, status } = await postAPI.post("/cows", cow, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 201) {
        updateCowStore();
        CustomAlert(
          "MuuApp",
          "Tu registro ha sido exitoso",
          navigation.navigate("Finca")
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert("error");
    } */
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitule}>Ingresa los datos de tu bobino</Text>

        <Image
          source={{
            uri: cow.picture,
          }}
          style={styles.cowPicture}
        />
        <TouchableOpacity style={styles.buttont} onPress={openImagePickerAsync}>
          <Text style={styles.textButton}>Seleccionar imagen</Text>
        </TouchableOpacity>

        <InputForm
          value={cow.nombre}
          onChangeText={(nombre) => setCowData({ ...cow, nombre })}
          name="account-box"
          placeholder="Nombre del bobino"
        />

        <View
          style={{
            flexDirection: "row",
            width: "31%",
            justifyContent: "center",
          }}
        >
          <View style={styles.inputBoxCont}>
            <Fontisto name="intersex" size={24} style={styles.iconStyle} />
            <SelectDropdown
              data={gender}
              onSelect={(selectedItem) => {
                setCowData({ ...cow, genero: selectedItem });
              }}
              defaultButtonText="Genero"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
            />
          </View>
          <View style={styles.inputBoxCont}>
            <MaterialCommunityIcons name="chart-donut" size={24} style={styles.iconStyle} />
            <SelectDropdown
              data={breed}
              onSelect={(selectedItem) => {
                setCowData({ ...cow, raza: selectedItem });
              }}
              defaultButtonText="Raza"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
            />
          </View>
          <View style={styles.inputBoxCont}>
            <Feather name="bar-chart" size={24} style={styles.iconStyle} />
            <SelectDropdown
              data={phase}
              onSelect={(selectedItem) => {
                setCowData({ ...cow, etapa: selectedItem });
              }}
              defaultButtonText="Etapa"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              dropdownStyle={{ marginLeft: -100 }}
              dropdownStyle={{ marginLeft: -100 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "47.6%",
            justifyContent: "center",
          }}
        >
          <InputForm
            data={cow.utp}
            onChangeText={(utp) => setCowData({ ...cow, utp })}
            name="1k"
            placeholder="Número de Arete"
          />

          <DateTimeInput />
        </View>
        <View style={styles.textInput}>
          <Entypo name="phase" size={24} style={styles.iconStyle} />
          <Text style={styles.subtitule2}>Padres</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "47.6%",
            justifyContent: "center",
          }}
        >
          <View style={styles.inputBoxCont}>
            <SimpleLineIcons
              name="symbol-male"
              size={24}
              style={styles.iconStyle}
            />
            <SelectDropdown
              data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              onSelect={(selectedItem) => {
                setCowData({
                  ...cow,
                  padres: { padre: selectedItem, madre: cow.padres.madre },
                });
              }}
              defaultButtonText="Padre"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
            />
          </View>
          <View style={styles.inputBoxCont}>
            <SimpleLineIcons
              name="symbol-female"
              size={24}
              style={styles.iconStyle}
            />
            <SelectDropdown
              data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              onSelect={(selectedItem) => {
                setCowData({
                  ...cow,
                  padres: { padre: cow.padres.padre, madre: selectedItem },
                });
              }}
              defaultButtonText="Madre"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
            />
          </View>
        </View>

        <View style={styles.textInput}>
          <MaterialCommunityIcons
            name="weight-kilogram"
            size={24}
            style={styles.iconStyle}
          />
          <Text style={styles.subtitule2}>Pesos</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "32%",
            justifyContent: "center",
          }}
        >
          <InputForm
            value={cow.peso.nacer}
            onChangeText={(nacer) =>
              setCowData({
                ...cow,
                peso: {
                  nacer,
                  destetar: cow.peso.destetar,
                  unAnio: cow.peso.unAnio,
                },
              })
            }
            name="keyboard-arrow-right"
            placeholder="Al nacer"
          />
          <InputForm
            value={cow.peso.destetar}
            onChangeText={(destetar) =>
              setCowData({
                ...cow,
                peso: {
                  nacer: cow.peso.nacer,
                  destetar,
                  unAnio: cow.peso.unAnio,
                },
              })
            }
            name="keyboard-arrow-right"
            placeholder="Destetar"
          />
          <InputForm
            value={cow.peso.unAnio}
            onChangeText={(unAnio) =>
              setCowData({
                ...cow,
                peso: {
                  nacer: cow.peso.nacer,
                  destetar: cow.peso.destetar,
                  unAnio,
                },
              })
            }
            name="keyboard-arrow-right"
            placeholder="1 año"
          />
        </View>

        <PrimaryButton text="Registrar bobino" onPress={register} />
      </View>
    </ScrollView>
  );
};

export default CowRegister;
