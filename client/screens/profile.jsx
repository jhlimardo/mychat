import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Porfile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.titulo}>Phone Number</Text>
                <View style={styles.input} onPress={() => navigation.navigate("Verify")}>
                    
                    <View style={styles.cicono}>
                        <Text style={styles.icono}>+54</Text>
                    </View>
                    <View style={styles.cinputText}>
                        <Text style={styles.inputText}>2657716465</Text>
                    </View>
                </View>
            </View>
            <View style={styles.text}>
            <Text style={styles.enter}>Choose your photo:</Text>
                <View style={styles.inputFoto}>
                    
                    <View style={styles.ciconoFoto}>
                        <MaterialCommunityIcons name="camera-plus" size={40} color="#A1B9CF" style={styles.camara}/>
                    </View>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={styles.log}>Enter your name:</Text>
                <View style={styles.inputName}/>
    
            </View>
            
            <View style={styles.containerButon}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Verify")}>
                    <Text style={styles.buttonText}>Send</Text>
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
    enter:{
        color: '#A1B9CF',
        fontSize: 13,
        marginTop: '5%',
    },
    cuerpo: {
        marginTop: '5%',
        fontSize: 22,
        color: '#A1B9CF',
        textAlign: 'left',
        letterSpacing: 0.4,
    },
    containerButon: {
        flex: 0.5,
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        width: 315,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 12,
        alignItems: 'baseline',


    },
    input: {
        marginTop: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 12,
        alignItems: 'baseline',
    },
    inputName:{
        
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        
        alignItems: 'baseline',
    },
    inputFoto: {
        marginTop: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 32,
        width: '100%',
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ciconoFoto: {
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    camara: {
         
        fontSize: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5%',
        borderRadius: 100,
    
    
    },  
    buttonText: {
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 29,
        marginTop: '1%',
        alignItems: 'center',
    },
    inputText: {
        color: '#ffffff',
        fontSize: 30,

        width: '100%',
        textAlign: 'center',
        height: '90%',

    },
    log: {
        color: '#A1B9CF',
        fontSize: 13,
        marginTop: '30%',
        
    },
    icono: {
        fontSize: 30,
        color: '#ffffff',
        height: '90%',
        

    },
    cicono: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 12,
    },
    cinputText: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});