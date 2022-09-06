import React, { useState } from "react";
import { Alert, View, Image } from "react-native";
import { setAuth } from "../../store/slices/user";
import { authAPI } from "../api";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { styles } from "../components/Styles";
import logo from "../assets/images/logo.png";
import Subtitle from "../components/Subtitle";
import ForgotPassText from "../components/ForgotPassText";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("missaelnj8@gmail.com");
  const [password, setPassword] = useState("mbLL1110*");

  const onLogin = async () => {
    try {
      const { data, status } = await authAPI.post("/auth", {
        email,
        password,
      });

      if (status === 200) {
        dispatch(setAuth(data));
        navigation.navigate("App");
      }
    } catch (error) {
      Alert.alert("Usuario o contraseña incorrecta");
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
