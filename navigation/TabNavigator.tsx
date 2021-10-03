import IonIcons from "@expo/vector-icons/Ionicons";
import { BottomTabNavigationProp, BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreen from "../screens/MyScreen";
import ProductsScreen from "../screens/ProductsScreen";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsNavigator, { ProductsStackAllScreenProps, ProductsStackScreenProps } from "./ProductsNavigator";
import Header from "../components/Header";

type ScreenTabParamList = {
  HomeTab: undefined;
  AddProductTab: undefined;
  ProductsTab: ProductsStackAllScreenProps;
  ProfileTab: ProductsStackScreenProps<'Details'>;
};

export type ScreenTabNavigationProp<
  Screen extends keyof ScreenTabParamList
> = BottomTabScreenProps<ScreenTabParamList, Screen>;

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: "center",
        headerBackgroundContainerStyle: {
          backgroundColor: Theme.colors.primary,
          opacity: 0.95,
        },
        lazy: false,
        tabBarStyle: styles.container,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcons
                name="home-outline"
                size={45}
                color={
                  focused ? Theme.colors.bazaarRed : Theme.colors.secondary
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddProductTab"
        component={AddProductScreen}
        options={{
          headerTitle: "AddProduct",
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcons
                name="add-circle-outline"
                size={45}
                color={
                  focused ? Theme.colors.bazaarRed : Theme.colors.secondary
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProductsTab"
        component={ProductsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcons
                name="search-outline"
                size={45}
                color={
                  focused ? Theme.colors.bazaarRed : Theme.colors.secondary
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={MyScreen}
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcons
                name="person-circle-outline"
                size={45}
                color={
                  focused ? Theme.colors.bazaarRed : Theme.colors.secondary
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Theme.colors.primary95,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
});
