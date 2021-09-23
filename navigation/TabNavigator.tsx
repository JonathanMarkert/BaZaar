import IonIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreen from "../screens/MyScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
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
                size={20}
                color={focused ? "tomato" : "grey"}
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
                size={20}
                color={focused ? "tomato" : "grey"}
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
                size={20}
                color={focused ? "tomato" : "grey"}
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
                size={20}
                color={focused ? "tomato" : "grey"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
