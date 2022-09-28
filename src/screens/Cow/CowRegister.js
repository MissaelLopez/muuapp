import { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import PrimaryButton from "../../components/PrimaryButton";
import { ranchRegisterStyles as styles } from "../../components/Styles";
import CustomAlert from "../../components/CustomAlert";
import InputForm from "../../components/InputForm";
import {
  MaterialCommunityIcons,
  Entypo,
  Fontisto,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getCowsByRanchId, postAPI } from "../../api";
import { setCows } from "../../../store/slices/cows/cowSlice";

const CowRegister = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const { selectedRanch } = useSelector((state) => state.ranchs);
  const { cows } = useSelector((state) => state.cows);
  const dispatch = useDispatch();

  const [cow, setCowData] = useState({
    nombre: "",
    picture:
      "https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2017-03/finca_productiva.jpg",
    genero: "",
    raza: "",
    utp: "",
    fechaNacimiento: new Date(),
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
    ranch: selectedRanch[0]._id,
  });
  const [datePicker, setDatePicker] = useState(false);
  const [machos, setMachos] = useState([]);
  const [hembras, setHembras] = useState([]);

  const gender = ["Macho", "Hembra"];
  const phase = ["Destetado", "Novillo", "Ternero", "Toro", "Vaca"];
  const breed = ["Machito F1", "Suizo", "Brahman", "Holandes"];

  const getMachos = () => {
    const machos = cows.filter((cow) => cow.genero === "Macho");
    setMachos(machos);
  };

  const getHembras = () => {
    const hembras = cows.filter((cow) => cow.genero === "Hembra");
    setHembras(hembras);
  };

  const updateCowStore = async (id) => {
    const { data, status } = await getCowsByRanchId(id, token);

    if (status === 200) {
      dispatch(setCows(data.cows));
    }
  };

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setCowData({ ...cow, fechaNacimiento: value });
    setDatePicker(false);
  }

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
    for (const [key, value] of Object.entries(cow)) {
      if (cow[key] === "") {
        console.log(`El campo ${key} no puede estar vacio`);
        return false;
      }
    }

    try {
      const { data, status } = await postAPI.post("/cows", cow, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 201) {
        updateCowStore(selectedRanch[0]._id);
        CustomAlert(
          "MuuApp",
          "Tu registro ha sido exitoso",
          navigation.navigate("Bobino")
        );
      }
    } catch (error) {
      Alert.alert(error.response.data.msg);
    }
  };

  useEffect(() => {
    getMachos();
    getHembras();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitule}>Ingresa los datos de tu bovino</Text>

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
          placeholder="Nombre del bovino"
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
            <MaterialCommunityIcons
              name="chart-donut"
              size={24}
              style={styles.iconStyle}
            />
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
          <View style={styles.inputBoxCont}>
            {datePicker && (
              <DateTimePicker
                timeZoneOffsetInMinutes={60}
                value={cow.fechaNacimiento}
                mode={"date"}
                is24Hour={true}
                onChange={onDateSelected}
              />
            )}
            <MaterialIcons
              name="date-range"
              size={24}
              style={styles.iconStyle}
            />

            <TouchableOpacity onPress={showDatePicker}>
              <Text style={{ color: "#936037" }}>
                {cow.fechaNacimiento.toDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textInput}>
          <MaterialCommunityIcons
            name="cow"
            size={24}
            style={styles.iconStyle}
          />
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
              data={machos.map((macho) => macho.nombre)}
              onSelect={(selectedItem) => {
                const idMacho = machos.filter(
                  (macho) => macho.nombre === selectedItem
                )[0]._id;
                setCowData({
                  ...cow,
                  padres: { padre: idMacho, madre: cow.padres.madre },
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
              data={hembras.map((hembra) => hembra.nombre)}
              onSelect={(selectedItem) => {
                const idHembra = hembras.filter(
                  (hembra) => hembra.nombre === selectedItem
                )[0]._id;
                setCowData({
                  ...cow,
                  padres: { padre: cow.padres.padre, madre: idHembra },
                });
              }}
              defaultButtonText="Madre"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              dropdownStyle={{ marginLeft: -50 }}
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
            keyboardType="numeric"
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
            keyboardType="numeric"
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
            keyboardType="numeric"
          />
        </View>

        <PrimaryButton text="Registrar bovino" onPress={register} />
      </View>
    </ScrollView>
  );
};

export default CowRegister;
