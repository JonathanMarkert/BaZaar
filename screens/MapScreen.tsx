import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Map from "../components/Map";
import Theme from "../components/Theme";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";

export default function MapScreen({ route }: ProductsStackScreenProps<"Map">) {
  const productId = route.params.productId;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.containerContent}>
          <Map productId={productId} />
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
    backgroundColor: Theme.colors.defaultMapBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 90,
    marginHorizontal: 10,
    marginTop: 104,
  },
});
