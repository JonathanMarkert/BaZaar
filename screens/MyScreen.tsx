import { CompositeScreenProps } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet, Text, View
} from "react-native";
import ProductCard from "../components/ProductCard";
import Theme from "../components/Theme";
import { AuthContext } from "../contexts/AuthContext";
import { IProduct, useProductContext } from "../contexts/ProductContext";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import { ScreenTabNavigationProp } from "../navigation/TabNavigator";

type Props = CompositeScreenProps<
  ScreenTabNavigationProp<"ProfileTab">,
  ProductsStackScreenProps<"Details">
>;

export default function MyScreen({ navigation }: Props) {
  const { userToken } = useContext(AuthContext);
  const { products, dispatch } =useProductContext();
  
    const selectedProducts: IProduct[] = products.filter(
    (product) => product.userId == userToken
  );

  if (!products)
  return (
    <View>
      <Text>No Products found</Text>
    </View>
  );
  const emptyList = () =>{
    return(
      <View>
      <Text>No Products found</Text>
    </View>
    )
  }
  
  const renderProduct = ({
    item,
    index,
  }: {
    item: IProduct;
    index: number;
  }) => {
    return (
      <View>
        <ProductCard
          product={item}
          index={index}
          arrayLength={products.length}
          hasButtonUnder={true}
          onPress={() => navigation.navigate("Details", { productId: item.id })}
        />
      </View>
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
            data={selectedProducts}
            renderItem={renderProduct}
            keyExtractor={(item: IProduct) => item.id}
            ListEmptyComponent={emptyList}
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
