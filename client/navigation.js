import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//screens
import Start from "./screens/start";
import Log from "./screens/log";
import Verify from "./screens/verify";
import Profile from "./screens/profile";



export default function Navigation() {
    const Stack = createNativeStackNavigator();
    function MyStack(){
        return(
            <Stack.Navigator
                initialRouteName="Start"
            >
                <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
                <Stack.Screen name="Log" component={Log} options={{headerShown: false}}/>
                <Stack.Screen name="Verify" component={Verify} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            </Stack.Navigator>

        )

    }
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}