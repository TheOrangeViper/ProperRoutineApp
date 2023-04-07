import React from "react";
import { Text, View, Button } from "react-native";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { app } from "../../firebase";

const db = getDatabase(app);
const dbRef = ref(db);

function writeUserData(userId, name, email) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
  });
}

function readUserData(userId) {
  const userDataRef = ref(db, "users/" + userId);
  onValue(userDataRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
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
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button
        title={"click to store data"}
        onPress={() =>
          writeUserData("69", "Sebastian and Oscar", "gay@gmail.com")
        }
      ></Button>
      <Button
        title={"click to receive data"}
        onPress={() => readUserData("69")}
      ></Button>
      <Button
        title={"click to receive data another way"}
        onPress={() => readUserDataAnotherWay("69")}
      ></Button>
    </View>
  );
};
export default TestScreen;
