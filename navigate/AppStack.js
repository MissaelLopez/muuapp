import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import RanchRegister from "../screens/RanchRegister";
import CustomDrawer from "../components/CustomDrawer";
import Styles from "../components/Styles";

const Drawer = createDrawerNavigator();

const AppStack = () => {
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
