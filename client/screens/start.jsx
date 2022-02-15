import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Start() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.titulo}>Get Started!</Text>
        <Text style={styles.cuerpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante nunc eu sit lectus magna. Enim dui purus, tortor malesuada vitae praesent sit sed mi. Pharetra mus ut quis leo id. Nam consectetur consectetur nec eget diam mi tortor. At.</Text>

      </View>
      <View style={styles.containerButon}>
        <Text style={styles.log}>Log in with :</Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Log")}>
          <Text style={styles.icono}><FontAwesome style={styles.icono} name="phone" size={35} color="rgba(0, 117, 167, 1)" /></Text><Text style={styles.buttonText}>Phone Number</Text>
        </TouchableOpacity>

      </View>



      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292F3F',
    color: '#ffffff',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    width: '80%',
  },
  titulo: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 40,
    marginTop: '30%',

  },
  cuerpo: {
    marginTop: '5%',
    fontSize: 22,
    color: '#A1B9CF',
    textAlign: 'left',
    letterSpacing: 0.4,
  },
  containerButon: {
    flex: 1,
    width: '80%',
    marginTop: '60%',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    width: 315,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 12,
    alignItems:'baseline',
   

  },
  buttonText: {
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 29,
    marginTop: '1%',
    alignItems: 'center',
  },
  log: {
    color: '#A1B9CF',
    fontSize: 18,
    marginTop: '5%',
    marginBottom: '5%',
  },
  icono:{
    
   
  }

});