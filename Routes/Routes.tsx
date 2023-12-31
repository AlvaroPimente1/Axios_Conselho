import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home/Home";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}