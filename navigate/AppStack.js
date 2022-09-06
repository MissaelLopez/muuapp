import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/user";
import { setRanch } from "../store/slices/ranchs";
import { getAPI } from "../api";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Ranchs from "../screens/Ranch/Ranchs";
import CustomDrawer from "../components/CustomDrawer";
import { View } from "react-native";
import HeaderButton from "../components/Buttons/HeaderButton";

const Drawer = createDrawerNavigator();

const AppStack = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const { data } = await getAPI.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const userData = {
      email: data.email,
      fullname: data.fullname,
      username: data.username,
      version: data.version,
    };

    dispatch(setRanch(data.ranchs));
    dispatch(setUser(userData));
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handlePress = () => {
    navigation.navigate("Registrar_Finca")
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: "#c79556",
        drawerActiveTintColor: "#fff",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Ganado"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="cow" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Finca"
        component={Ranchs}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="warehouse" size={2} color={color} />
          ),
          headerRight: () => (
            <View style={{ width: "50%" }}>
              <HeaderButton text="Nuevo" onPress={handlePress}/>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
