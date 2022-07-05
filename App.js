import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, View } from "react-native";
import Input from "./components/Input";
import PrimaryButton from "./components/PrimaryButton";
import { styles } from "./components/Styles";

export default function App() {
  const [name, onChangeText] = React.useState(null);

  const onPress = () => {
    Alert.alert("MuuApp", `Hola ${name}`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Nombre"
        onChangeText={onChangeText}
        value={name}
      />
      <PrimaryButton text="Button" onPress={onPress} />
      <StatusBar style="auto" />
    </View>
  );
}
