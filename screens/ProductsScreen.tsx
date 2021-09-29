import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";

export default function ProductsScreen({
  navigation,
  route,
}: ProductsStackScreenProps<"Products">) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        {/* <Header title="Products" /> */}
        <View style={styles.containerContent}>
          <ProductCard navigation={navigation} route={route} />
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
  },
});
