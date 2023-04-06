import React from "react";
import { useCallback } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Poppins_Black: require("./assets/fonts/Poppins-Black.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Navigation />;
}
