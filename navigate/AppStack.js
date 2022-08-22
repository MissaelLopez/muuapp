import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/user";
import { getAPI } from "../api";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import RanchRegister from "../screens/RanchRegister";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
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

    dispatch(setUser(userData));
  };

  useEffect(() => {
    getUserData();
  }, []);

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
        component={RanchRegister}
        options={{
          drawerIcon: ({ color }) => (
            <MCIcon name="warehouse" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
