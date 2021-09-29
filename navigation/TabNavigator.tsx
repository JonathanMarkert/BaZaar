import IonIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreen from "../screens/MyScreen";
import ProductsScreen from "../screens/ProductsScreen";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsNavigator from "./ProductsNavigator";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: "center",
        headerBackground: () => <Header />,
        lazy: false,
        tabBarStyle: styles.container,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
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
        name="AddProduct"
        component={AddProductScreen}
        options={{
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
        name="Products"
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
        name="Profile"
        component={MyScreen}
        options={{
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
