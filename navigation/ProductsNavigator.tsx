import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
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
          headerRight: () => (
            <View style={styles.menu}>
              <IonIcons
                name="search"
                size={open ? 0 : 45}
                color={Theme.colors.secondary}
                onPress={() => setOpen(true)}
              />
              {open && <CategorySidebar onPress={() => setOpen(false)} />}
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
