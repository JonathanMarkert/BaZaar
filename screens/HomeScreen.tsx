import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Theme from "../components/Theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        {/* <Header title="Home" /> */}
        <View style={styles.containerContent}>
          <Image source={require("../assets/logo.png")} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.defaultBg,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  containerContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
