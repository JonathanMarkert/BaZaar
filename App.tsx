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
          <RootNavigation />
        </NavigationContainer>
      </ProductProvider>
    </TokenProvider>
  );
}
