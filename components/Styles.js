import { StyleSheet } from "react-native";

const primaryColor = "#785a35";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    paddingLeft: 6,
  },
  button: {
    alignItems: "center",
    backgroundColor: primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textButton: {
    color: "#fff",
  },
});
