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
              {open && (
                <Modal
                  animationType="none"
                  onRequestClose={() => setOpen(false)}
                  transparent={true}
                >
                  <View style={[{ flexDirection: "row-reverse" }, { flex: 1 }]}>
                    <View style={styles.modalContainer}>
                      <View style={styles.categoryTopWrapper}>
                        <Text style={styles.category}>Categories</Text>
                        <View style={styles.closeIcon}>
                          <IonIcons
                            name="close"
                            size={20}
                            color={Theme.colors.secondary}
                            onPress={() => setOpen(false)}
                          />
                        </View>
                      </View>
                      <View
                        style={[
                          { borderBottomColor: Theme.colors.secondary },
                          { borderBottomWidth: 2 },
                        ]}
                      ></View>
                      <ScrollView>
                        {categories.map((item) => {
                          return (
                            <Pressable
                              key={item.id.toString()}
                              onPress={() => console.log(item.name.toString())}
                              style={({ pressed }) => [
                                {
                                  backgroundColor: pressed
                                    ? Theme.colors.primary
                                    : Theme.colors.filterModal,
                                },
                              ]}
                            >
                              <Text style={styles.categoryList}>
                                {item.name.toString()}
                              </Text>
                            </Pressable>
                          );
                        })}
                      </ScrollView>
                    </View>
                    <View style={styles.invisibleView}></View>
                  </View>
                </Modal>
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
  modalContainer: {
    backgroundColor: Theme.colors.filterModal,
    flex: 2,
    marginTop: 56,
    marginBottom: 80,
  },
  categoryTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  categoryList: {
    padding: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: Theme.colors.secondary,
  },
  category: {
    padding: 1,
    marginLeft: 5,
    fontWeight: "bold",
    color: Theme.colors.secondary,
    fontSize: 25,
    // borderBottomWidth: 5,
    // borderBottomColor: Theme.colors.bazaarRed,
  },
});
