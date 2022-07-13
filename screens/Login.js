import React, { useState } from "react";
import { Alert, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "../app.json";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import { styles } from "../components/Styles";
import logo from "../assets/images/logo.png";
import Subtitle from "../components/Subtitle";
import ForgotPassText from "../components/ForgotPassText";
import SecondaryButton from "../components/SecondaryButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = async () => {
    try {
      const res = await fetch(`${Config.env.SERVER_URL}/api/auth/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const resp = await res.json();

      if (resp.token) {
        const token = await AsyncStorage.setItem("@token", resp.token);
        navigation.navigate("Home");
      } else {
        Alert.alert("Usuario o contraseña incorrecta");
      }
    } catch (error) {
      Alert.alert("Ha ocurrido un error. Intente de nuevo");
    }
  };

  const onSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Subtitle text="Ingresa a tu cuenta" />
      <Input
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Correo Electrónico"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Contraseña"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <ForgotPassText text="¿Olvidaste tu contraseña?" />
      <PrimaryButton text="Iniciar sesión" onPress={onLogin} />
      <ForgotPassText text="---------------------------------- O -----------------------------------" />
      <SecondaryButton text="Registrate" onPress={onSignup} />
    </View>
  );
};

export default Login;
