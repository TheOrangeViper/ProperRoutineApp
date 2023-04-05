import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, FONTS, COLORS, SHADOW } from "../constants";
import { Countdown } from "./countdown";
const styles = StyleSheet.create({
  container: {
    ...SHADOW,
    width: "100%",
    height: 180,
    marginBottom: 20,
  },
  view: {
    width: "100%",
    height: "100%",
    paddingVertical: 12,
    borderRadius: SIZES.borderRadius,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...FONTS.h1_semiBold, //if you look back at where h2_semiBold is stored there are curly braces, the ... removed the curly braces by saying that it wants to go inside of it.
  },
  image: {
    position: "absolute",
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: SIZES.borderRadius,
  },
  viewLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  viewRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default function Card(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/upload1.png")}
        style={styles.image}
      ></Image>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.viewLeft}
          onPress={() => console.log(props.timeset)}
        >
          <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
        <View style={styles.viewRight}>
          <TouchableOpacity>
            <Countdown timeSet={props.timeSet}></Countdown>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
