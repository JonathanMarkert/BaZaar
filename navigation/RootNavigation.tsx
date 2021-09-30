import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import Theme from "../components/Theme";
import { AuthContext } from "../contexts/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { userToken, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen
          name="SignIn"
          component={LoginScreen}
          options={{
            title: "Sign in",
            headerTransparent: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Theme.colors.primary95,
            },
            // animationTypeForReplace: isSignout ? "pop" : "push",
            // if we want to add isSignout function
          }}
        />
      ) : (
        <Stack.Screen
          name="test"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
