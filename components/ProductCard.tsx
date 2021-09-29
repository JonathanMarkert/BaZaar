import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { IProduct } from "../contexts/ProductContext";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import Theme from "./Theme";

const data = {
  name: "Fine Car",
  price: 20,
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
  category: "Car",
  address: "Borås",
};
interface Props {
  product: IProduct;
  onPress: () => void;
}

export default function ProductCard({product, onPress}: Props) {
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image 
        source={{uri: product.imageUri}}
        style={styles.cover}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.baseText, styles.boldText]}>
          {product.name}
        </Text>
        <Text style={styles.baseText}>
          {product.price} kr
        </Text>
        <Text style={styles.baseText}>
          {product.city}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Theme.colors.lightBg,
    backgroundColor: "#FAF6F6",
    width: 350,
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    marginVertical: 4,
  },
  cover: {
    width: 150,
    height: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    height: 100,
    marginHorizontal: 10,
    justifyContent: "space-evenly",
  },
  baseText: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
});