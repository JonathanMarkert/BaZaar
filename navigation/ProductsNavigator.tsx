import React from "react";
import DetailsScreen from "../screens/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MapScreen from "../screens/MapScreen";
import ProductsScreen from "../screens/ProductsScreen";

type ProductsStackParamList = {
  // Details: { userId: string };
  Details: undefined;
  Products: undefined;
  Map: undefined;
};

export type ProductsStackScreenProps<Screen extends keyof ProductsStackParamList> = NativeStackScreenProps<ProductsStackParamList, Screen>;

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsNavigator(){
  return (
// TODOHEADER sätt header center och färg, inte false om vi använder inbygda headern
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}