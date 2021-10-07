import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import CoinLottie from "../components/CoinLottie";
import Header from "../components/Header";
import Theme from "../components/Theme";
import { AuthContext } from "../contexts/AuthContext";

export default function HomeScreen() {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.containerContent}>
          <Image source={require("../assets/logo.png")} />
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Welcome {user.firstName}!</Text>
          </View>
          <CoinLottie />
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
    marginTop: 120,
  },
  textContainer: {
    width: "100%",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#AA92F2",
    textAlign: "center",
    textShadowColor: Theme.colors.shadowColor,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
