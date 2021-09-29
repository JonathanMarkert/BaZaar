import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import Theme from "./Theme";

const data = {
  name: "Fine Car",
  price: 20,
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
  category: "Car",
  address: "Borås",
};

export default function ProductCard({ navigation}: ProductsStackScreenProps<'Products'>) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details')}>
      <Image 
        source={{uri: data.img}}
        style={styles.cover}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.baseText, styles.boldText]}>
          {data.name}
        </Text>
        <Text style={styles.baseText}>
          {data.price} kr
        </Text>
        <Text style={styles.baseText}>
          {data.address}
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