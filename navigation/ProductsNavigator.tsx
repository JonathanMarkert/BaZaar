import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import MapScreen from "../screens/MapScreen";
import ProductsScreen from "../screens/ProductsScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

type ProductsStackParamList = {
  Details: { productId: string };
  Products: undefined;
  Map: { productId: string };
  Home: undefined; // behövs denna???
};

export type ProductsStackScreenProps<
  Screen extends keyof ProductsStackParamList
> = NativeStackScreenProps<ProductsStackParamList, Screen>;

// export type ProductsStackAllScreenProps = NativeStackScreenProps<ProductsStackParamList>;

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
        headerRight: () => (
          <View style={styles.menu}>
            <IonIcons
              name="menu"
              size={45}
              color={Theme.colors.secondary}
              onPress={() => console.log("TadAAAAA!!!")}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
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
