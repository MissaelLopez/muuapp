import { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import { styles } from "../../components/Styles";

const RanchRegister = () => {
  const { ranchs } = useSelector((state) => state.ranchs);
  const [ranch, setRanch] = useState({
    name: "",
    picture: "",
    purpose: "",
    location: [
      {
        country: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
      },
    ],
    production: "",
    areaSpace: "",
    user: "",
  });

  useEffect(() => {
    console.log(ranch);
  }, []);

  return (
    <View style={styles.container}>
      <Input placeholder="Nombre" autoCapitalize="none" />
    </View>
  );
};

export default RanchRegister;
