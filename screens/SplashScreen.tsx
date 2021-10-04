import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import Theme from "../components/Theme";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/37153-basic-spinner.json")}
        loop={true}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.defaultBg,
  },
});
