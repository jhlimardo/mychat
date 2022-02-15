import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Verify() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.titulo}>Verification</Text>
        <Text style={styles.cuerpo}>Please insert your verification code</Text>
        
        <View style={styles.containerInputs} >
            <View style={styles.input} />
            <View style={styles.input} />
            <View style={styles.input} />
            <View style={styles.input} /> 
            <View style={styles.input} /> 
        </View>
      </View>
      <View style={styles.containerButon}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Profile")}>
          <Text style={styles.buttonText}>Verify</Text>
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
    marginTop: '10%',
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
  containerInputs: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    marginTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
  input: {
    marginTop: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    width: '15%',
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
    marginTop: '10%',
    marginBottom: '5%',
  },
  icono:{
    
   
  }

});