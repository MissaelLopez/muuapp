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
import InputForm from "../components/InputForm";
import { ImageBackground } from "react-native-web";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
  const image = {
    uri: "https://i2.wp.com/lh5.googleusercontent.com/proxy/dl0A0IenMiJX4uIOPiDMqn-6xvb3QwiOphgEuKnNlKQa0IklUC62QHo1UXUkqGG6Z1_i9GxuptIb4p7pfsWs8uNUNYd3_fjGZjSzetWfnkUch1SgMX8CRVLpYpzJy9xb=w1200-h630-p-k-no-nu",
  };
  return (
    <View style={styles.container}>
      {/* <ImageBackground style={{  alignItems:"center", width: "100%" }} source={image}>
        <Image source={logo} style={styles.logo} />
      </ImageBackground> */}
      <Image source={logo} style={styles.logo} />

        <Subtitle text="Ingresa a tu cuenta" />

        {/* <Input
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
/> */}
        <InputForm
          name="mail-outline"
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Correo Electrónico"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputForm
          name="lock-outline"
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
