import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { Button1, TextInput1 } from "../components";
import { COLORS, SIZES } from "../constants";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignUp = () => {
    navigation.navigate("RegisterScreen");
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:" + user.email);
        if (user.emailVerified === true) {
          navigation.navigate("HomeScreen");
        } else {
          navigation.navigate("RegisterConfirmScreen");
        }
      })
      .catch((error) => alert(error.message));
  };

  const forgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/adaptive-icon.png")}
      ></Image>
      <TextInput1
        setValue={setEmail}
        value={email}
        placeholder={"Email"}
      ></TextInput1>
      <TextInput1
        setValue={setPassword}
        value={password}
        placeholder={"Password"}
        secureTextEntry={true}
      ></TextInput1>
      <Button1 title={"Login"} width={"80%"} onPress={handleLogin}></Button1>
      <Button1
        title={"Get Started"}
        width={"80%"}
        onPress={handleSignUp}
      ></Button1>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  logo: {
    height: 300,
    width: 300,
    margin: SIZES.largeMargin,
  },
});
