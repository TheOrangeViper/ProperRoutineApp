import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_Mono_Light: require("./assets/fonts/RobotoMono-Light.ttf"),
    Roboto_Mono_Regular: require("./assets/fonts/RobotoMono-Regular.ttf"),
    Roboto_Mono_SemiBold: require("./assets/fonts/RobotoMono-SemiBold.ttf"),
    Roboto_Mono_Bold: require("./assets/fonts/RobotoMono-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return <Navigation />;
}
