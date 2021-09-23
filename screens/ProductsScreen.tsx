import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProductsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>This is the ProductScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
