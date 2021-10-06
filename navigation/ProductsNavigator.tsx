import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import MapScreen from "../screens/MapScreen";
import ProductsScreen from "../screens/ProductsScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { categories } from "../assets/DummyData/Category";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategorySidebar from "../components/CategorySidebar";
import { useProductContext } from "../contexts/ProductContext";

type ProductsStackParamList = {
  Details: { productId: string };
  Products: { category: string } | undefined;
  Map: { productId: string };
  // Home: undefined; // behövs denna???
};

export type ProductsStackScreenProps<
  Screen extends keyof ProductsStackParamList
> = NativeStackScreenProps<ProductsStackParamList, Screen>;

// export type ProductsStackAllScreenProps = NativeStackScreenProps<ProductsStackParamList>;
const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsNavigator() {
  const [open, setOpen] = useState(false);
  const { category, setCategory } = useProductContext();

  function onSelect(category: string) {
    setCategory(category);
    setOpen(false);
    console.log("onSelect: " + category);
  }

  // useEffect(() => {
  //   //console.log("useEffect hit");
  // }, [category]);

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
