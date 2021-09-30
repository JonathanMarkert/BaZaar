import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import ProductProvider from "./contexts/ProductContext";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </ProductProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
