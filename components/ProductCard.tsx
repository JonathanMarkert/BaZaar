import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { IProduct } from "../contexts/ProductContext";
import Theme from "./Theme";

interface Props {
  product: IProduct;
  index: number;
  arrayLength: number;
  onPress: () => void;
}

export default function ProductCard({
  product,
  index,
  arrayLength,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { marginTop: index === 0 ? 104 : 4 },
        { marginBottom: index === arrayLength - 1 ? 90 : 4 },
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: product.imageUri }} style={styles.cover} />
      <View style={styles.infoContainer}>
        <Text style={[styles.baseText, styles.boldText]}>{product.name}</Text>
        <Text style={styles.baseText}>{product.price} kr</Text>
        <Text style={styles.baseText}>{product.city}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.lightBg,
    width: 350,
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    // marginBottom: 4,
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
