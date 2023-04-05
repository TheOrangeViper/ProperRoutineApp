import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { SIZES, FONTS, COLORS, SHADOW } from "../constants";

const styles = StyleSheet.create({});

const Countdown = (props) => {
  const [remainingTime, setRemainingTime] = useState(props.timeSet);
  const [countdownStatus, setCountdownStatus] = useState("paused");
  var remainingMinutes;
  var remainingSeconds;

  useEffect(() => {
    {
      if (countdownStatus === "unpaused") {
        const intervalId = setInterval(() => {
          setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      } else {
        setRemainingTime(remainingTime);
        return () => null;
      }
    }
  }, [countdownStatus]);

  const resetTimer = () => {
    setRemainingTime(props.timeSet);
  };

  const changePauseState = () => {
    if (countdownStatus === "unpaused") {
      setCountdownStatus("paused");
    } else if (countdownStatus === "paused") {
      setCountdownStatus("unpaused");
    }
  };

  remainingMinutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");

  remainingSeconds = Math.floor(remainingTime % 60)
    .toString()
    .padStart(2, "0");

  const CountDownDisplay = () => {
    if (remainingTime < 0) {
      return (
        <Text style={{ fontSize: 60, color: "#f54516" }}>Timer's Up!</Text>
      );
    } else {
      return (
        <Text style={{ fontSize: 80, color: "#f54516" }}>
          {remainingMinutes}:{remainingSeconds}
        </Text>
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={resetTimer}>
        <CountDownDisplay />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => changePauseState()}> */}
      <TouchableOpacity onPress={() => changePauseState()}>
        <View>
          <Text>press me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export { Countdown };
