import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import TokenProvider from "./contexts/AuthContext";
import RootNavigation from "./navigation/RootNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TokenProvider>
      <NavigationContainer>
        {/* Note: Add specific page you want to work on,
        and comment out RootNavigation
        if you dont want to login everytime while developing */}
        <RootNavigation />
      </NavigationContainer>
    </TokenProvider>
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
