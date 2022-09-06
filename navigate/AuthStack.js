import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import AppStack from "./AppStack";
import RanchDetail from "../components/Ranch/RanchDetail";
import RanchRegister from "../screens/Ranch/RanchRegister";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Signup} name="Signup" />
      <Stack.Screen component={AppStack} name="App" />
      <Stack.Screen
        component={RanchDetail}
        name="Detalle_Finca"
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
        })}
      />
      <Stack.Screen
        component={RanchRegister}
        name="Registrar_Finca"
        options={{ title: "Registrar Finca", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
