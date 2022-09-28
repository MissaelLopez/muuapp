import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, ImageBackground, Text, View } from "react-native";
import { useSelector } from "react-redux";

const CustomDrawer = (props) => {
  const { user } = useSelector((state) => state.user);
  const { selectedRanch } = useSelector((state) => state.ranchs);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#c79556" }}
      >
        <ImageBackground
          source={{ uri: selectedRanch && selectedRanch[0].picture }}
          style={{ padding: 20 }}
          imageStyle={{ opacity: 0.5 }}
        >
          <Image
            source={{
              uri: "https://cresord.org/wp-content/uploads/2021/07/avatar-1577909_960_720.png",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#fff", fontSize: 18 }}>{user.fullname}</Text>
          <Text style={{ color: "#fff", fontSize: 18 }}>
            {selectedRanch && selectedRanch[0].name}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
