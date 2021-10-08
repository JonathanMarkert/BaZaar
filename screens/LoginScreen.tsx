import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    color: Theme.colors.buttonText,
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
    backgroundColor: Theme.colors.defaultBg,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: Theme.colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
