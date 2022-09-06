import { StyleSheet } from "react-native";

const primaryColor = "#c79556";
const secondaryColor = "#fcea10";

export const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: primaryColor,
    padding: 7,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 4,
    width: "80%",
  },
  secondaryButton: {
    backgroundColor: secondaryColor,
    padding: 7,
    marginTop: 20,
    borderRadius: 4,
    width: "80%",
  },
  textPrimaryButton: {
    textAlign: "center",
    color: "white",
  },
  textSecondaryButton: {
    textAlign: "center",
    color: "#c79556",
  },
  headerButton: {
    backgroundColor: "transparent",
    alignItems: "center",
    width: 30,
    alignSelf: "flex-end",
    marginHorizontal: 10,
  },
  textHeaderButton: {
    textAlign: "center",
    color: "#000",
  },
});
