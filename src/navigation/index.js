import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterConfirmScreen from "../screens/RegisterConfirmScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="TestScreen" component={TestScreen}></Stack.Screen>
        {/* <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="RegisterConfirmScreen"
          component={RegisterConfirmScreen}
        ></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
