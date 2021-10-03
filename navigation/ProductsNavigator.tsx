import React from "react";
import DetailsScreen from "../screens/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MapScreen from "../screens/MapScreen";
import ProductsScreen from "../screens/ProductsScreen";
import { ThemeProvider } from "@react-navigation/native";
import Theme from "../components/Theme";

type ProductsStackParamList = {
  Details: { productId: string };
  Products: undefined;
  Map: { productId: string };
  Home: undefined; // behövs denna???
};

export type ProductsStackScreenProps<
  Screen extends keyof ProductsStackParamList
> = NativeStackScreenProps<ProductsStackParamList, Screen>;

export type ProductsStackAllScreenProps = NativeStackScreenProps<ProductsStackParamList>;

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsNavigator() {
  return (
    // TODOHEADER sätt header center och färg, inte false om vi använder inbygda headern
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Theme.colors.primary95,
        },
      }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
