import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import Theme from "../components/Theme";

export default function CoinLottie() {
  return (
    <LottieView
      source={require("../assets/8687-cions.json")}
      autoPlay
      speed={-1}
      loop={false}
    />
  );
}

const styles = StyleSheet.create({});
