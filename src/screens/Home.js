import React, { useEffect } from "react";
import { Alert, Text, View, BackHandler } from "react-native";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";

const Home = ({ navigation }) => {
  const { ranchs } = useSelector((state) => state.ranchs);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPressHandler);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackPressHandler
      );
    };
  }, []);

  const handlePress = () => {
    navigation.navigate("Finca");
  };

  const handleBackPressHandler = () => {
    Alert.alert(
      "MuuApp",
      "¿Desea salir de la aplicación?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Salir",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

  return (
    <View>
      {ranchs.length ? (
        <Text>Hay Finca, se puede registar</Text>
      ) : (
        <PrimaryButton text="Registar Finca" onPress={handlePress} />
      )}
    </View>
  );
};

export default Home;
