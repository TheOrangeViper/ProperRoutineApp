import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Card, Button1, TextInput1 } from "../components";
import { COLORS, SIZES, FONTS, SHADOW } from "../constants";

export default HomeScreen = () => {
  const [newTimerValue, setNewTimerValue] = useState("");
  const [newRoutineValue, setNewRoutineValue] = useState("");
  const [cards, setCards] = useState([]);

  const handleAdd = () => {
    var allCards = cards;
    allCards.push(
      <Card
        key={allCards.length}
        text={newRoutineValue}
        timeSet={newTimerValue}
      ></Card>
    );
    console.log(cards);

    setCards(allCards);
    setNewRoutineValue("");
    setNewTimerValue("");
  };

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}></View>
      <View>
        {cards.length === 0 ? (
          <View>
            <Text style={FONTS.h1_semiBold}>There are no timers to show!</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={[cards]}
              renderItem={({ item }) => item}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
      <View style={styles.textBoxWrapper}>
        <TextInput1
          placeholder="New Routine"
          setValue={setNewRoutineValue}
          value={newRoutineValue}
          width={"36%"}
        ></TextInput1>
        <TextInput1
          placeholder="Timer Value"
          placeholderTextColor={COLORS.secondary}
          setValue={setNewTimerValue}
          value={newTimerValue}
          width={"36%"}
        ></TextInput1>
        <Button1 onPress={handleAdd} width="15%"></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: SIZES.padding,
    paddingTop: 0,
    paddingBottom: 0,
  },
  view: {
    heigth: "10%",
  },
  textBoxWrapper: {
    ...SHADOW,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding,
  },
  textInput: {
    flex: 2,
    ...SHADOW, //if you look back at where SHADOW is stored there are curly braces, the ... removed the curly braces by saying that it wants to go inside of it.
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    color: COLORS.primary,
    height: 70,
    // width: "85%",
    marginRight: 15, // puts outside border on the right to serperate the send button and the textbox
    paddingLeft: 15, // creates some space in the TextInput to make the text look nicer inside the box
    ...FONTS.h2_semiBold,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    height: "100%",
    // width: "15%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
