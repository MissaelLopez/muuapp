import React, { useEffect } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/user";
import { setRanch } from "../../store/slices/ranchs";
import { getUserById } from "../api";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Ranchs from "../screens/Ranch/Ranchs";
import CustomDrawer from "../components/CustomDrawer";
import HeaderButton from "../components/HeaderButton";
import Cows from "../screens/Cow/Cows";

const Drawer = createDrawerNavigator();

const AppStack = ({ navigation }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const { data, status } = await getUserById(id, token);

    if (status === 200) {
      const userData = {
        email: data.email,
        fullname: data.fullname,
        username: data.username,
        version: data.version,
      };

      dispatch(setRanch(data.ranchs));
      dispatch(setUser(userData));
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handlePress = () => {
    navigation.navigate("Registrar_Finca");
  };

  const handlePressTwo = () => {
    navigation.navigate("Registrar_Vaca");
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
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="Home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ganado"
        component={Cows}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="cow" size={22} color={color} />
          ),
          headerRight: () => (
            <View style={{ width: "50%" }}>
              <HeaderButton text="New-cow" onPress={handlePressTwo} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Finca"
        component={Ranchs}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="warehouse" size={22} color={color} />
          ),
          headerRight: () => (
            <View style={{ width: "50%" }}>
              <HeaderButton text="New-ranch" onPress={handlePress} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
