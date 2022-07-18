import { StyleSheet } from "react-native";

const primaryColor = "#785a35";
const secondaryColor = "#785a35";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9dcb7",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitule: {
    fontSize: 20,
    color: "#c79556",
  },
  logo: {
    height: 220,
    width: 230,
  },
  forgotPass: {
    fontSize: 14,
    color: "#c79556",
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    padding: 10,
    paddingStart: 30,
    borderColor: "#936037",
    borderWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 4,
  },
  primaryButton: {
    backgroundColor: "#c79556",
    padding: 7,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 4,
    width: "80%",
  },
  secondaryButton: {
    backgroundColor: "#fcea10",
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
});
