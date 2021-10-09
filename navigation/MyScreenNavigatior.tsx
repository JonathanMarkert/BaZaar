import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from "@react-navigation/native-stack";
import React from "react";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import MapScreen from "../screens/MapScreen";
import MyScreen from "../screens/MyScreen";

type MyScreenStackParamList = {
  Details: { productId: string };
  MyScreen: undefined;
  Map: { productId: string };
};

export type MyScreenStackScreenProps<
  Screen extends keyof MyScreenStackParamList
> = NativeStackScreenProps<MyScreenStackParamList, Screen>;

const Stack = createNativeStackNavigator<MyScreenStackParamList>();

export default function MyScreenNavigator() {

  return (
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
      <Stack.Screen name="MyScreen" component={MyScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
