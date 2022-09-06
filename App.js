import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthStack from "./src/navigate/AuthStack";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
