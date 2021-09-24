import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, ImageBackground, Image} from "react-native";
import { StatusBar } from 'expo-status-bar'
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={require('../assets/bkg1.png')} style={styles.backgroundImg}>
        <Header title="Home" />
        <View style={styles.containerContent}>
          <Image source={require('../assets/logo.png')}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  containerContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }
});
