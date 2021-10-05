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
import { Modal, StyleSheet, View, Text } from "react-native";

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
        headerRight: () => (
          <View style={styles.menu}>
            <IonIcons
              name="search"
              size={45}
              color={Theme.colors.secondary}
              onPress={() => setOpen(true)}
            />
            {open && (
              <Modal
                animationType="slide"
                onRequestClose={() => setOpen(false)}
                transparent={true}
              >
                <View style={[{ flexDirection: "row-reverse" }, { flex: 1 }]}>
                  <View style={styles.modalContainer}>
                    <View style={styles.closeIcon}>
                      <IonIcons
                        name="close"
                        size={45}
                        color={Theme.colors.secondary}
                        onPress={() => setOpen(false)}
                      />
                    </View>
                    <Text>Hallå! Här ska vår placeholder vara</Text>
                  </View>
                  <View style={styles.invisibleView}></View>
                </View>
              </Modal>
            )}
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
  modalContainer: {
    backgroundColor: "#C5BED0",
    flex: 2,
    marginTop: 56,
    marginBottom: 80,
  },
  closeIcon: {
    alignItems: "flex-end",
  },
  menu: {
    paddingRight: 8,
  },
  invisibleView: {
    flex: 2,
  },
});
