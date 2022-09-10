import { Alert } from "react-native";
import React from "react";

const CustomAlert = (title, text, action) => {
  return Alert.alert(
    title,
    text,
    [
      {
        text: "Aceptar",
        onPress: () => {
          action || null;
        },
      },
    ],
    {
      cancelable: false,
    }
  );
};

export default CustomAlert;
