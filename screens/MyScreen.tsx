import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { FlatList, ImageBackground, StyleSheet, View, Text } from "react-native";
import mockData from "../assets/DummyData/ProductData";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../contexts/AuthContext";
import { IProduct } from "../contexts/ProductContext";
import { ProductsStackScreenProps } from "../navigation/ProductsNavigator";
import { ScreenTabNavigationProp } from "../navigation/TabNavigator";

type Props = CompositeScreenProps<
  ScreenTabNavigationProp<'ProfileTab'>,
  ProductsStackScreenProps<'Details'>
>;
// man får ut alla skärmar från ProductStackScreenProps nu. kanske inte vill det?

export default function MyScreen({ navigation }: Props) {
  const { userToken } = useContext(AuthContext);
  const products :IProduct[] = mockData.filter(product => product.userId == userToken);
  const renderProduct = ({ item }: { item: IProduct }) => {
    return <ProductCard
      product={item} 
      onPress={() => navigation.navigate( 'Details', { productId: item.id })} 
      />
  }

  if (!products) return( 
    <View>
      <Text>No Product found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/bkg1.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.containerContent}>
        <FlatList 
            data={products} 
            renderItem={renderProduct}
            keyExtractor={(item: IProduct) => item.id} />
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
