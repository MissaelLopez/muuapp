import { View, Text } from "react-native";
import React from "react";

const RanchDetail = (props) => {
  const ranch = props.route.params.ranch;

  return (
    <View>
      <Text>{ranch.name}</Text>
    </View>
  );
};

export default RanchDetail;
