import { StyleSheet } from "react-native";

const primaryColor = "#c79556";
const secondaryColor = "#fcea10";

export const buttonsStyle = StyleSheet.create({
  primaryButton: {
    backgroundColor: primaryColor,
    padding: 7,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 4,
    width: "90%",
  },
  secondaryButton: {
    backgroundColor: secondaryColor,
    padding: 7,
    marginTop: 20,
    borderRadius: 4,
    width: "90%",
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9dcb7",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
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
    backgroundColor: "transparent",
    color: "#936037",
    fontSize: 16,
  },
  selectText: {
    color: "#936037",
    textAlign: "left",
    fontSize: 16,
  },

  //estilos formulario rancho
  inputBoxCont: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#936037',
    borderRadius: 4,
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: '4%',
    marginLeft: '4%',

  },
  inputBox: {
    marginHorizontal: 5,
    flex: 1,
    fontSize: 14,

  },
  iconStyle: {
    color: '#936037'
  },
});

export const ranchsView = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const cardStyles = StyleSheet.create({
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

export const ranchRegisterStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
  input: {
    padding: 10,
    borderColor: "#936037",
    borderBottomWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: "transparent",
    color: "#936037",
    fontSize: 16,
  },
  select: {
    borderColor: "#936037",
    backgroundColor: "transparent",
    color: "#936037",
    borderColor: '#936037',
    borderRadius: 4,
    paddingHorizontal: 0,
    height: 40,
    
  },
  selectText: {
    color: "#936037",
    textAlign: "left",
    fontSize: 14,
  },
  ranchPicture: {
    height: 150,
    width: 150,
    borderRadius: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  inputBoxCont: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#936037',
    borderRadius: 4,
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: '4%',
    marginLeft: '4%',
  },
  iconStyle: {
    color: '#936037'
  },
  subtitule: {
    fontSize: 20,
    color: '#936037',
    paddingBottom: 10,
  },
  textInput: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: '4%',
    marginLeft: '4%',
  },
  subtitule2: {
    fontSize: 18,
    color: '#936037',
    paddingTop: 8,
    flex: 1,
    paddingHorizontal: 5,
  },
  buttont: {
    backgroundColor: "#785a35",
    padding: 5,
    marginTop: 15,
    borderRadius: 4,
    width: '45%',
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
});



  
