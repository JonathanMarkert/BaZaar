import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AddProductForm from "../components/AddProductForm";
import Theme from "../components/Theme";
import { useProductContext } from "../contexts/ProductContext";
import SuccessScreen from "./SuccessScreen";

export default function AddProductScreen() {
  const { productSuccess, setProductSuccess } = useProductContext();

  const toggleSuccess = () => {
    setProductSuccess(!productSuccess);
  };
  return (
    <>
      {productSuccess == false ? (
        <View style={styles.container}>
          <StatusBar style="dark" />
          <ImageBackground
            source={require("../assets/bkg1.png")}
            style={styles.backgroundImg}
          >
            <View style={styles.containerContent}>
              <AddProductForm onSubmitSuccess={toggleSuccess} />
            </View>
          </ImageBackground>
        </View>
      ) : (
        <SuccessScreen confirmSuccess={toggleSuccess} />
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
    marginTop: 104,
    marginBottom: 90,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
