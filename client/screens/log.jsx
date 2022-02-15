import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Log() {
    const navigation = useNavigation();

    


    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.titulo}>Please Insert Your Phone Number</Text>
                <Text style={styles.log}>Enter your Phone Number below:</Text>
                <View style={styles.input} onPress={() => navigation.navigate("Verify")}>
                    
                    <View style={styles.cicono}>
                        <Text style={styles.icono}>+54</Text>
                    </View>
                    <View style={styles.cinputText}>
                        <TextInput  keyboardType='numeric' maxLength={10}  style={styles.inputText} 
                        placeholder='Phone' placeholderTextColor='#ffffff' ></TextInput>
                        
                    </View>
                </View>
    
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
        marginTop:'10%'


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
    buttonText: {
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 29,
        marginTop: '1%',
        alignItems: 'center',
    },
    inputText: {
        color: '#ffffff',
        fontSize: 28,
        
        width: '100%',
        textAlign: 'center',
        height: '90%',
        
        

    },
    log: {
        color: '#A1B9CF',
        fontSize: 13,
        marginTop: '25%',
        
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