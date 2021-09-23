import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProductsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>This is the ProductScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
