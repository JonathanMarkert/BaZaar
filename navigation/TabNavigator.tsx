import IonIcons from "@expo/vector-icons/Ionicons";
import {
  BottomTabScreenProps,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Theme from "../components/Theme";
import AddProductScreen from "../screens/AddProductSreen";
import HomeScreen from "../screens/HomeScreen";
import MyScreenNavigator from "./MyScreenNavigatior";
import ProductsNavigator from "./ProductsNavigator";

type ScreenTabParamList = {
  HomeTab: undefined;
  AddProductTab: undefined;
  ProductsTab: undefined;
  ProfileTab: undefined;
};

export type ScreenTabNavigationProp<Screen extends keyof ScreenTabParamList> =
  BottomTabScreenProps<ScreenTabParamList, Screen>;

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
        tabBarActiveTintColor: Theme.colors.bazaarRed,
        tabBarInactiveTintColor: Theme.colors.secondary,
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
                name="list-outline"
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
        component={MyScreenNavigator}
        options={{
          headerShown: false,
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
