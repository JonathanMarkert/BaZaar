import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import ProductCard from "../components/ProductCard";
import Theme from "../components/Theme";
import { IProduct, useProductContext } from "../contexts/ProductContext";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";

export default function ProductsScreen({
  navigation,
}: ProductsStackScreenProps<"Products">) {
  const { products, category } = useProductContext();

  let filteredProducts: IProduct[];
  if (!category) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((item) => item.category === category);
  }

  const renderProduct = ({
    item,
    index,
  }: {
    item: IProduct;
    index: number;
  }) => {
    return (
      <ProductCard
        product={item}
        index={index}
        arrayLength={filteredProducts.length}
        hasButtonUnder={false}
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
            data={filteredProducts}
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
  },
  flatListContent: {
    height: 100,
    paddingHorizontal: 15,
  },
});
