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
import LoginForm from "../components/LoginForm";
import Theme from "../components/Theme";

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
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {open && (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => setOpen(false)}
        >
          <View style={styles.modalView}>
            <LoginForm />
          </View>
        </Modal>
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
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Theme.colors.bazaarBlue,
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
