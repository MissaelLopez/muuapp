import React from "react";
import "react-native-gesture-handler";
import AuthStack from "./navigate/AuthStack";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
