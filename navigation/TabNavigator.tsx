import IonIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreen from "../screens/MyScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
                color={focused ? "red" : "#4A4453"}
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
                color={focused ? "red" : "#4A4453"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IonIcons
                name="search-outline"
                size={45}
                color={focused ? "red" : "#4A4453"}
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
                color={focused ? "red" : "#4A4453"}
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
    backgroundColor: "#AFA8BA70",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
});
