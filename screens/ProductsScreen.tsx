import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import mockData from '../assets/DummyData/ProductData';
import Header from "../components/Header";
import ProductCard from '../components/ProductCard';
import { IProduct } from '../contexts/ProductContext';
import { ProductsStackScreenProps } from '../navigation/ProductsNavigator';



export default function ProductsScreen({ navigation }: ProductsStackScreenProps<'Products'>) {
  const products = mockData;
  const product = products.find(product => product.id === 2);

  if (!product) return( 
    <View>
      <Text>No Product found</Text>
    </View>
  ); //returnera error not found

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={require('../assets/bkg1.png')} style={styles.backgroundImg}>
        <Header title="Products" />
        <View style={styles.containerContent}>
          <ProductCard 
            product={product}
            onPress={() => navigation.navigate('Details', { productId: product.id })}
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
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
