import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Map from "../components/Map";
import { ProductsStackScreenProps } from '../navigation/ProductsNavigator';

export default function MapScreen({route}: ProductsStackScreenProps<'Map'>) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        {/* <Header title="Map" /> */}
        <View style={styles.containerContent}>
          <Map />
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
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 90,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
