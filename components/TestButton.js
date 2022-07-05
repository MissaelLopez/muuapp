import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";

const TestButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{ props.title }</Text>
    </TouchableOpacity>
  );
};

export default TestButton;
