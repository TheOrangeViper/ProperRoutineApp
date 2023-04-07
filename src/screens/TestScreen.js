import React, { useState, useEffect } from "react";
import { Text, View, Button, FlatList, SafeAreaView } from "react-native";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { app, database, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Card } from "../components";

import { COLORS } from "../constants";

const dbRef = ref(database);

function writeUserData(userId, text) {
  if (userId) {
    set(ref(database, "users/" + userId), {
      text: text,
    });
  }
}

function readUserData(userId) {
  if (userId) {
    const userDataRef = ref(database, "users/" + userId);
    onValue(userDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }
}

function readUserDataAnotherWay(userId) {
  get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No Data Available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const TestScreen = () => {
  const [userID, setUserID] = useState();
  const [cardsData, setCardsData] = useState([]);

  const sendUserCards = () => {
    if (userID) {
      set(ref(database, "users/" + userID), {
        cardsData,
      });
    }
  };

  const receiveUserCards = () => {
    if (userID) {
      const userDataRef = ref(database, "users/" + userID);
      onValue(userDataRef, (snapshot) => {
        const data = snapshot.val();
        setCardsData(data.cardsData);
      });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
      }
    });
  });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={cardsData}
        renderItem={({ item }) => (
          <Card text={item.text} timeSet={item.timeSet}></Card>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title={"click to store data"}
        onPress={() => sendUserCards()}
      ></Button>
      <Button
        title={"click to receive data"}
        onPress={() => receiveUserCards()}
      ></Button>
    </SafeAreaView>

    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     backgroundColor: COLORS.black,
    //   }}
    // >
    //   {/* <Card text={"Calculus"} timeSet={100}></Card> */}

    // {/* <Button
    //   title={"click to store data"}
    //   onPress={() => writeUserData(userID, "This is a fcustom message")}
    // ></Button> */}
    //   <Button
    //     title={"click to receive data"}
    //     onPress={() => readUserData(userID)}
    //   ></Button>
    //   {/* <Button
    //     title={"click to receive data another way"}
    //     onPress={() => readUserDataAnotherWay("69")}
    //   ></Button> */}
    // </View>
  );
};
export default TestScreen;
