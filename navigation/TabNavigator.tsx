import IonIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreen from "../screens/MyScreen";
import ProductsScreen from "../screens/ProductsScreen";
import MyTheme from "../components/Theme";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
                style={styles.icons}
                name="home-outline"
                size={45}
                color={focused ? MyTheme.colors.bazaarRed: MyTheme.colors.secondary}
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
                style={styles.icons}
                name="add-circle-outline"
                size={45}
                color={focused ? MyTheme.colors.bazaarRed: MyTheme.colors.secondary}
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
                style={styles.icons}
                name="search-outline"
                size={45}
                color={focused ? MyTheme.colors.bazaarRed: MyTheme.colors.secondary}
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
                style={styles.icons}
                name="person-circle-outline"
                size={45}
                color={focused ? MyTheme.colors.bazaarRed: MyTheme.colors.secondary}
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
    flexDirection: "column",
    height: 90,
    opacity: 0.5,
    backgroundColor: MyTheme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    opacity: 1,
  },
});
