import { useSelector } from "react-redux";
import { Text, View, Image } from "react-native";
import { ranchRegisterStyles as styles } from "../../components/Styles";
import logo from "../../assets/vaca-triste2.png";
import PrimaryButton from "../../components/PrimaryButton";

const Cows = ({ navigation }) => {
  const { cows } = useSelector((state) => state.cows);

  const onCow = () => {
    navigation.navigate("Registrar_Vaca");
  };

  return (
    <View style={styles.container}>
      {cows.length ? (
        cows.map((cow) => <Text>{cow.nombre}</Text>)
      ) : (
        <>
          <Text style={styles.subtitule}>
            No tienes ningun bovino registrado
          </Text>
          <Image source={logo} style={{ height: "50%", width: "100%" }} />
          <Text style={styles.subtitule}>
            Comienza a registrar a tus bovinos
          </Text>
          <PrimaryButton text="Toca aquí" onPress={onCow} />
        </>
      )}
    </View>
  );
};

export default Cows;
