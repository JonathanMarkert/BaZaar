import LottieView from "lottie-react-native";
import React from "react";

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
