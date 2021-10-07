import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct, useProductContext } from "../contexts/ProductContext";
import Theme from "./Theme";

interface Props {
  product: IProduct;
  index: number;
  arrayLength: number;
  hasButtonUnder: boolean;
  onPress: () => void;
}

export default function ProductCard({
  product,
  index,
  arrayLength,
  hasButtonUnder,
  onPress,
}: Props) {
  const { products, dispatch } =useProductContext();
  return (
    <View
      style={[
        { marginTop: index === 0 ? 104 : 4 },
        { marginBottom: index === arrayLength - 1 ? 90 : 4 },
      ]}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Image source={{ uri: product.imageUri }} style={styles.cover} />
        <View style={styles.infoContainer}>
          <Text style={[styles.baseText, styles.boldText]}>{product.name}</Text>
          <Text style={styles.baseText}>{product.price} kr</Text>
          <Text style={styles.baseText}>{product.city}</Text>
        </View>
      </TouchableOpacity>
      {hasButtonUnder && (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            dispatch({ type: 'remove-listing', payload: product })
          }
        >
          <Text style={styles.buttonText}>
            Remove
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.lightBg,
    width: "100%",
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
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
  button: {
    alignItems: "center",   
    backgroundColor: Theme.colors.bazaarBlue,
    borderRadius:10,
    padding: 15,
    marginTop: 5
  },
  buttonText: {
    fontSize: 20,
    color: Theme.colors.buttonText,
    fontWeight: "bold",
    },
});
