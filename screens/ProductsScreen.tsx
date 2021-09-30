import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import mockData from "../assets/DummyData/ProductData";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../contexts/ProductContext";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import { ListRenderItem } from "react-native";

export default function ProductsScreen({
  navigation,
}: ProductsStackScreenProps<"Products">) {
  const products: IProduct[] = mockData;
  const renderProduct = ({ item }: { item: IProduct }) => {
    return (
      <ProductCard
        product={item}
        onPress={() => navigation.navigate("Details", { productId: item.id })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.containerContent}>
          <FlatList
            style={styles.flatListContent}
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item: IProduct) => item.id}
          />
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
  flatListContent: {
    height: 100,
    marginTop: 114,
    marginBottom: 80,
  },
});
