import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from "react-native";
import Header from "../components/Header";

export default function LoginScreen() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ImageBackground
          source={require("../assets/bkg1.png")}
          style={styles.backgroundImg}
        >
          <Header title="Login" />
          <View style={styles.containerContent}>
            <Image source={require("../assets/logo.png")} />
          </View>
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpen(true)}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {open && (
        <View
          style={{
            height: "60%",
            marginTop: "auto",
            backgroundColor: "white",
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => setOpen(false)}
          ></Modal>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  button: {
    backgroundColor: "green",
    width: 150,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
