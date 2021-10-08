import IonIcons from "@expo/vector-icons/Ionicons";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CategorySidebar from "../components/CategorySidebar";
import Theme from "../components/Theme";
import { useProductContext } from "../contexts/ProductContext";
import DetailsScreen from "../screens/DetailsScreen";
import MapScreen from "../screens/MapScreen";
import ProductsScreen from "../screens/ProductsScreen";

type ProductsStackParamList = {
  Details: { productId: string };
  Products: { category: string } | undefined;
  Map: { productId: string };
};

export type ProductsStackScreenProps<
  Screen extends keyof ProductsStackParamList
> = NativeStackScreenProps<ProductsStackParamList, Screen>;

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsNavigator() {
  const [open, setOpen] = useState(false);
  const { category, setCategory } = useProductContext();

  function onSelect(category: string) {
    setCategory(category);
    setOpen(false);
  }

  return (
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
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: category ? `${category}` : "Products",
          headerRight: () => (
            <View style={styles.menu}>
              <IonIcons
                name="search"
                size={open ? 0 : 45}
                color={Theme.colors.secondary}
                onPress={() => setOpen(true)}
              />
              {open && (
                <CategorySidebar
                  onPress={() => setOpen(false)}
                  onSelect={onSelect}
                />
              )}
            </View>
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingRight: 8,
  },
});
