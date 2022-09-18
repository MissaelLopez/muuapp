import React, { useState } from "react";
import { Alert, View, Image } from "react-native";
import Config from "../../app.json";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Subtitle from "../components/Subtitle";
import ForgotPassText from "../components/ForgotPassText";
import logo from "../assets/images/logo.png";
import { styles } from "../components/Styles";
import InputForm from "../components/InputForm";

const Signup = ({ navigation }) => {
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const version = "free";

  const sendAlert = () => {
    return Alert.alert(
      "MuuApp",
      "Tu registro ha sido exitoso",
      [
        {
          text: "Aceptar",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const onSignup = async () => {
    try {
      const user = { fullname, username, email, password, version };
      const res = await fetch(`${Config.env.SERVER_URL}/api/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const resp = await res.json();
      if (res.status === 201) {
        sendAlert();
      } else {
        Alert.alert(`${resp.msg}`);
      }
    } catch (error) {
      Alert.alert("Ha ocurrido un error. Intente de nuevo");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Subtitle text="Registrate" />
      <InputForm
        name="portrait"
        value={fullname}
        onChangeText={(fullname) => setFullname(fullname)}
        placeholder="Nombre Completo"
      />
      <InputForm
        name="perm-identity"
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Nombre de usuario"
        autoCapitalize="none"
      />
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
      <PrimaryButton text="Registrarse" onPress={onSignup} />
      <ForgotPassText text="---------------------------------- O -----------------------------------" />
      <SecondaryButton text="Iniciar sesión" onPress={onLogin} />
    </View>
  );
};

export default Signup;
