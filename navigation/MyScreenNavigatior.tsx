import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Theme from "../components/Theme";
import DetailsScreen from "../screens/DetailsScreen";
import MapScreen from "../screens/MapScreen";
import MyScreen from "../screens/MyScreen";
import { AuthContext } from "../contexts/AuthContext";

type MyScreenStackParamList = {
  Details: { productId: string };
  Profile: undefined;
  Map: { productId: string };
};

export type MyScreenStackScreenProps<
  Screen extends keyof MyScreenStackParamList
> = NativeStackScreenProps<MyScreenStackParamList, Screen>;

const Stack = createNativeStackNavigator<MyScreenStackParamList>();

export default function MyScreenNavigator() {
  const { signOut } = useContext(AuthContext);
  
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
      <Stack.Screen 
        name="Profile" 
        component={MyScreen} 
        options={{headerRight: () => (
          <TouchableOpacity style={styles.menu} onPress={signOut}>
            <Text>Logout</Text>
          </TouchableOpacity>
          ),}}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingRight: 15,
  },
});
