// import { useSelector } from "react-redux";
import { ScrollView, Text, View, Image } from "react-native";
// import { View } from "react-native-web";
// import { ranchsView as styles } from "../../components/Styles";
// import RanchCard from "../../components/Card";
import { ranchRegisterStyles as styles } from "../../components/Styles";
import logo from "../../assets/vaca-triste2.png";
import PrimaryButton from "../../components/PrimaryButton";



const Cows = ({ navigation }) => {
  //   const { ranchs } = useSelector((state) => state.ranchs);
  //   if (ranchs.length) {
  //     return (
  //       <ScrollView style={styles.container}>
  //         {ranchs &&
  //           ranchs.map((ranch) => (
  //             <RanchCard key={ranch._id} ranch={ranch} navigation={navigation} />
  //           ))}
  //       </ScrollView>
  //     );
  //   } else {
  // return <Text style={styles.subtitule}>Comienza a registrar a tus bobinos</Text>
  //   }

  const onCow = () => {
    navigation.navigate("Registrar_Vaca");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.subtitule}>No tienes ningun bobino registrado</Text>
      <Image source={logo} style={{height:"50%", width:"100%" }} />
      <Text style={styles.subtitule}>Comienza a registrar a tus bobinos</Text>
      <PrimaryButton text="Toca aquí" onPress={onCow}/>
      
    </View>
  );
};

export default Cows;
