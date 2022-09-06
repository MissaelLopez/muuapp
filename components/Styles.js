import { StyleSheet } from "react-native";

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
});

export const ranchsView = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ranchCard = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: "5%",
    borderRadius: 10,
    marginVertical: "2.5%",
    marginHorizontal: "5%",
    flexDirection: "row",
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  isSelected: {
    paddingHorizontal: 16,
  },
});
