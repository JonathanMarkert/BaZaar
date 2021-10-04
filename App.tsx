import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TokenProvider from "./contexts/AuthContext";
import ProductProvider from "./contexts/ProductContext";
import RootNavigation from "./navigation/RootNavigation";

export default function App() {
  return (
    <TokenProvider>
      <ProductProvider>
        <NavigationContainer>
          {/* Note: Add specific page you want to work on,
          and comment out RootNavigation
          if you dont want to login everytime while developing */}
          <RootNavigation />
        </NavigationContainer>
      </ProductProvider>
    </TokenProvider>
  );
}
