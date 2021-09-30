import { StatusBar } from 'expo-status-bar';
import React, { FC, useContext } from "react";
import { ImageBackground, StyleSheet, View, Text, FlatList } from "react-native";
import mockData from '../assets/DummyData/ProductData';
import Header from "../components/Header";
import ProductCard from '../components/ProductCard';
import ProductContext, { IProduct, useProductContext } from '../contexts/ProductContext';
import { ProductsStackScreenProps } from '../navigation/ProductsNavigator';
import { ListRenderItem } from 'react-native';
import ProductProvider from '../contexts/ProductContext';



export default function ProductsScreen({ navigation }: ProductsStackScreenProps<'Products'>) {
  //const products :IProduct[] = mockData;
 //const products =useProductContext
 
  const {products, dispatch} =useProductContext();
    
  //const product = products.find(product => product.id === 2);
  const renderProduct = ({ item }: { item: IProduct }) => {
    return <ProductCard
      product={item} 
      onPress={() => navigation.navigate('Details', { productId: item.id })}
      />
  }
  
  // if (!product) return( 
  //   <View>
  //     <Text>No Product found</Text>
  //   </View>
  // ); //returnera error not found
  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={require('../assets/bkg1.png')} style={styles.backgroundImg}>
        <Header title="Products" />
        <View style={styles.containerContent}>
          {/* <ProductCard 
            product={product}
            onPress={() => navigation.navigate('Details', { productId: product.id })}
          /> */}
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
