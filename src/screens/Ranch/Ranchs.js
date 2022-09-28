import { useSelector } from "react-redux";
import { ScrollView, Text, View, Image } from "react-native";
// import { ranchRegisterStyles as styles } from "../../components/Styles";
import RanchCard from "../../components/Card";
import logo from "../../assets/ranch.png";
import PrimaryButton from "../../components/PrimaryButton";
import { ranchsView as styles } from "../../components/Styles";


// const Ranchs = ({ navigation }) => {
//   const onRanch = () => {
//     navigation.navigate("Registrar_Finca");
//   };
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

//     return (
//       <View style={styles.container}>
//         <Text style={styles.subtitule}>No tienes ninguna finca registrada</Text>
//         <Image source={logo} style={{height:"50%", width:"100%" }} />
//         <Text style={styles.subtitule}>Comienza a registrar tus fincas</Text>
//         <PrimaryButton text="Toca aquí" onPress={onRanch}/>
        
//       </View>
      
//     );
//   };
//   }

const Ranchs = ({ navigation }) => {
  const { ranchs } = useSelector((state) => state.ranchs);
  if (ranchs.length) {
    return (
      <ScrollView style={styles.container}>
        {ranchs &&
          ranchs.map((ranch) => (
            <RanchCard key={ranch._id} ranch={ranch} navigation={navigation} />
          ))}
      </ScrollView>
    );
  } else {
    return <Text>Comienza a registrar</Text>;
  }

};

export default Ranchs;
