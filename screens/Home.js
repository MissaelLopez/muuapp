import React, { useEffect } from "react";
import { Text, Alert } from "react-native";
import { BackHandler } from "react-native";
import { useSelector } from "react-redux";

const Home = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPressHandler);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackPressHandler
      );
    };
  }, []);

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

  return <Text>MuuApp</Text>;
};

export default Home;
